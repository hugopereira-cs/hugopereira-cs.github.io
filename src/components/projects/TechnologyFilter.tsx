"use client";

import { useRouter } from "next/navigation";
import { type SubmitEvent, useState } from "react";
import type { Technology } from "@/types";

type TechnologyFilterProps = {
  technologies: Technology[];
  selectedTech: string;
};

export function TechnologyFilter({ technologies, selectedTech }: TechnologyFilterProps) {
  const router = useRouter();
  const [tech, setTech] = useState(selectedTech);

  const applyFilter = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new URLSearchParams();

    if (tech) {
      query.set("tech", tech);
    }

    const search = query.toString();
    router.push(search ? `/projects?${search}` : "/projects", { scroll: false });
  };

  return (
    <form
      onSubmit={applyFilter}
      className="mb-8 flex flex-col gap-3 rounded-xl border border-foreground/10 p-4 sm:flex-row sm:items-end"
    >
      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor="tech-filter" className="text-sm font-medium">
          Filtrar por tecnologia
        </label>
        <select
          id="tech-filter"
          name="tech"
          value={tech}
          onChange={(event) => setTech(event.target.value)}
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
        className="h-10 cursor-pointer rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
      >
        Aplicar filtro
      </button>
      {selectedTech && (
        <button
          type="button"
          onClick={() => router.push("/projects", { scroll: false })}
          className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md px-3 text-sm text-foreground/70 hover:text-foreground hover:underline"
        >
          Limpar
        </button>
      )}
    </form>
  );
}
