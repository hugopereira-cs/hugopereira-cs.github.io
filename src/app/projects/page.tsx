import { Suspense } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjects, getTechnologies } from "@/lib/api";

type ProjectsPageProps = {
  searchParams: Promise<{ tech?: string | string[] }>;
};

function ProjectsLoading() {
  return <p role="status">Carregando projetos...</p>;
}

async function ProjectsContent({ searchParams }: ProjectsPageProps) {
  const [{ tech }, projects, technologies] = await Promise.all([
    searchParams,
    getProjects(),
    getTechnologies(),
  ]);
  const selectedTech = typeof tech === "string" ? tech : "";
  const filteredProjects = selectedTech
    ? projects.filter((project) =>
        project.technologies.some((technology) => technology.slug === selectedTech)
      )
    : projects;

  return (
    <>
      <form
        action="/projects"
        method="get"
        className="mb-8 flex flex-col gap-3 rounded-xl border border-foreground/10 p-4 sm:flex-row sm:items-end"
      >
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="tech-filter" className="text-sm font-medium">
            Filtrar por tecnologia
          </label>
          <select
            id="tech-filter"
            name="tech"
            defaultValue={selectedTech}
            className="h-10 rounded-md border border-foreground/15 bg-background px-3 text-sm text-foreground"
          >
            <option value="">Todas as tecnologias</option>
            {technologies.map((technology) => (
              <option key={technology.slug} value={technology.slug}>
                {technology.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="h-10 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 cursor-pointer"
        >
          Aplicar filtro
        </button>
        {selectedTech && (
          <a
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md px-3 text-sm text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
          >
            Limpar
          </a>
        )}
      </form>

      {filteredProjects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-foreground/10 px-5 py-8 text-center text-foreground/70">
          Nenhum projeto encontrado para essa tecnologia.
        </p>
      )}
    </>
  );
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:py-14">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projetos</h1>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Projetos desenvolvidos e as tecnologias utilizadas em cada um.
        </p>
      </header>
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
