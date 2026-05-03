import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getTechBadgeUrl } from '../../../constants/techs';
import { SITE_CONTENT } from '../../../constants/content';

/**
 * Componente para renderizar o conteúdo da aba Skills
 */
function SkillsContent({ techs }) {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center md:justify-start">
      {techs.map((tech) => (
        <div key={tech} title={tech}>
          <img
            src={getTechBadgeUrl(tech)}
            alt={tech}
            className="h-8 lg:h-10 w-auto transition-transform hover:scale-105 hover:opacity-90"
          />
        </div>
      ))}
    </div>
  );
}

SkillsContent.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Componente para renderizar o conteúdo da aba Idiomas
 */
function LanguagesContent({ items }) {
  return (
    <div className="space-y-3 p-4">
      {items.map((language, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-brand-border pb-2">
          <span className="text-brand-text-primary font-medium">{language.name}</span>
          <span className="text-brand-text-secondary text-sm">{language.level}</span>
        </div>
      ))}
    </div>
  );
}

LanguagesContent.propTypes = {
  items: PropTypes.array.isRequired
};

/**
 * Componente para renderizar o conteúdo da aba Educação
 */
function EducationContent({ graduation, courses }) {
  return (
    <div className="space-y-4 p-4">
      {graduation && graduation.length > 0 && (
        <div>
          <h4 className="text-brand-accent-hover font-semibold mb-3">Formação Acadêmica</h4>
          <div className="space-y-3">
            {graduation.map((edu, index) => (
              <div key={index} className="border-l-2 border-brand-accent-hover pl-4">
                <p className="text-brand-text-primary font-medium">{edu.course}</p>
                <p className="text-brand-text-secondary text-sm">{edu.institution}</p>
                <p className="text-brand-text-secondary text-xs mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {courses && courses.length > 0 && (
        <div>
          <h4 className="text-brand-accent-hover font-semibold mb-3">Cursos</h4>
          <div className="space-y-2">
            {courses.map((course, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <p className="text-brand-text-primary font-medium">{course.name}</p>
                  <p className="text-brand-text-secondary text-sm">{course.platform}</p>
                </div>
                <span className="text-brand-accent-hover text-xs whitespace-nowrap ml-2">
                  {course.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

EducationContent.propTypes = {
  graduation: PropTypes.array,
  courses: PropTypes.array
};

/**
 * Componente para renderizar o conteúdo da aba Experiência
 */
function ExperienceContent({ items }) {
  return (
    <div className="space-y-4 p-4">
      {items.map((experience, index) => (
        <div key={index} className="border-l-2 border-brand-accent-hover pl-4">
          <div className="flex justify-between items-start mb-2">
            <p className="text-brand-text-primary font-medium">{experience.role}</p>
            <span className="text-brand-text-secondary text-xs whitespace-nowrap ml-2">
              {experience.period}
            </span>
          </div>
          <p className="text-brand-text-secondary text-sm font-medium mb-2">{experience.company}</p>
          <p className="text-brand-text-secondary text-sm">{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

ExperienceContent.propTypes = {
  items: PropTypes.array.isRequired
};

/**
 * Componente AboutTabs - Layout de abas para a seção About
 * Implementa um tablist com as abas: Skills, Idiomas, Educação e Experiência
 *
 * Características:
 * - Sistema de abas acessível usando Radix UI
 * - Conteúdo dinâmico baseado na estrutura de dados
 * - Animação suave ao trocar entre abas
 * - Design responsivo e estilizado com Tailwind CSS
 */
export function AboutTabs() {
  const {
    about: { tabs }
  } = SITE_CONTENT;

  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section className="w-full max-w-[320px] lg:max-w-4xl lg:mt-8 border border-brand-border rounded col-span-full flex flex-col mb-4">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col w-full">
        {/* Tablist - Headers das abas */}
        <Tabs.List className="flex flex-wrap lg:flex-nowrap border-brand-border" role="tablist">
          {Object.entries(tabs).map(([key, tab]) => (
            <Tabs.Trigger
              key={key}
              value={key}
              className="flex-[1_0_50%] lg:flex-1 min-h-12 px-2 py-3 text-xs md:text-sm lg:text-base font-medium
                         text-brand-text-secondary hover:text-brand-text-primary
                         border-b border-brand-border border-r 
                         lg:border-r-0 last:lg:border-r-0 transition-colors duration-200
                         data-[state=active]:border-b-2 data-[state=active]:border-brand-accent-hover 
                         data-[state=active]:text-brand-text-primary
                         cursor-pointer relative overflow-hidden group text-center">
              <span className="relative z-10 line-clamp-2">{tab.title}</span>
              {/* Efeito de hover subtle */}
              <div className="absolute inset-0 bg-brand-accent-hover/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tab Content - Conteúdo das abas */}
        <Tabs.Content value="skills">
          <SkillsContent techs={tabs.skills.techs} />
        </Tabs.Content>
        <Tabs.Content value="languages">
          <LanguagesContent items={tabs.languages.items} />
        </Tabs.Content>
        <Tabs.Content value="education">
          <EducationContent
            graduation={tabs.education.graduation}
            courses={tabs.education.courses}
          />
        </Tabs.Content>
        <Tabs.Content value="experience">
          <ExperienceContent items={tabs.experience.items} />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
