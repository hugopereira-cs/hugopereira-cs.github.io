import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import technologiesData from "@/data/technologies.json";
import type { Portfolio, Profile, Project, TechCategory, Technology } from "@/types";

const TECH_CATEGORIES = new Set(["language", "frontend", "backend", "database", "tools"]);

function isTechCategory(category: string): category is TechCategory {
  return TECH_CATEGORIES.has(category);
}

const technologies: Technology[] = technologiesData.map((technology) => {
  if (!isTechCategory(technology.category)) {
    throw new Error(
      `Categoria desconhecida "${technology.category}" para a tecnologia "${technology.slug}".`
    );
  }

  return {
    ...technology,
    category: technology.category,
  };
});

const technologiesBySlug = new Map(technologies.map((technology) => [technology.slug, technology]));

export function getProfile(): Profile {
  return profileData;
}

export function getTechnologies(params?: { skills?: boolean }): Technology[] {
  if (params?.skills === undefined) {
    return technologies;
  }

  return technologies.filter((technology) => technology.showInSkills === params.skills);
}

export function getProjects(params?: { featured?: boolean }): Project[] {
  return projectsData
    .filter((project) => params?.featured === undefined || project.featured === params.featured)
    .map((project) => ({
      ...project,
      technologies: project.technologies.map((technologySlug) => {
        const technology = technologiesBySlug.get(technologySlug);

        if (!technology) {
          throw new Error(
            `Projeto "${project.slug}" referencia a tecnologia desconhecida "${technologySlug}".`
          );
        }

        return technology;
      }),
    }))
    .sort((projectA, projectB) => projectA.order - projectB.order);
}

export function getPortfolio(): Portfolio {
  return {
    profile: getProfile(),
    projects: getProjects(),
    technologies: getTechnologies(),
  };
}
