import { SITE_CONTENT } from '../../../constants/content';
import { ProjectItem } from '../../ui/ProjectItem';
import { SectionTitle } from '../../ui/SectionTitle';

/**
 * Seção de Projetos.
 * Renderiza uma grade de projetos extraídos do SITE_CONTENT.
 * 
 * @component
 */
export function Projects() {
  const { projects } = SITE_CONTENT;

  return (
    <section className="w-full overflow-x-hidden p-4">
      <SectionTitle>Projetos</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full place-items-start">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
