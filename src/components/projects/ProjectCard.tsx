import Image from "next/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  loadImageEagerly?: boolean;
};

export function ProjectCard({ project, loadImageEagerly = false }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-sm">
      <div className="relative aspect-video bg-foreground/5">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 512px"
          loading={loadImageEagerly ? "eager" : "lazy"}
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
          <p className="mt-2 leading-relaxed text-foreground/70">{project.summary}</p>
        </div>

        <ul
          aria-label={`Tecnologias utilizadas em ${project.title}`}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology.slug}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/80"
            >
              {technology.name}
            </li>
          ))}
        </ul>

        {project.features.length > 0 && (
          <ul className="list-inside list-disc space-y-1 text-sm text-foreground/70">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3 border-t border-foreground/10 pt-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            Ver código
            <span className="sr-only"> de {project.title} no GitHub (abre em nova aba)</span>
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            >
              Ver Aplicação
              <span className="sr-only"> de {project.title} (abre em nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
