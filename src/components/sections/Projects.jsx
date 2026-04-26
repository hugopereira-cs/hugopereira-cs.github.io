import { SITE_CONTENT } from '../../constants/content';
import { ProjectItem } from '../ui/ProjectItem';

export function Projects() {
  const { projects } = SITE_CONTENT;

  return (
    <section className="w-full overflow-x-hidden p-4">
      <h1 className="text-4xl text-center font-semibold text-brand-text-primary lg:text-5xl mb-8 tracking-wide">
        Projetos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full place-items-start">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
