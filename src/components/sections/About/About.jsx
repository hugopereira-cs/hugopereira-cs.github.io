import { SITE_CONTENT } from '../../../constants/content';
import { Card } from '../../ui/Card';
import { Trigger } from '../../ui/Trigger/Trigger';

export function About() {
  const { about } = SITE_CONTENT;

  return (
    <section className="w-full overflow-x-hidden px-4 lg:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 place-items-center">
      <img
        src="./aboutSection.png"
        alt="Imagem de Perfil de Hugo Pereira"
        className="max-w-48 lg:max-w-80"
      />

      <div className="lg:justify-self-start">
        <Card>
          <h2 className="text-3xl text-center lg:text-start lg:text-4xl font-semibold text-brand-text-primary mb-2 tracking-wide">
            Sobre Mim
          </h2>
          <ul className="flex flex-col gap-1 lg:text-lg">
            <li className="flex flex-row gap-2 items-center">
              <img src="./job.svg" alt="Ícone de pessoa" className="size-4" /> {about.role}
            </li>
            <li className="flex flex-row gap-2 items-center">
              <img src="./location.svg" alt="Ícone de pessoa" className="size-4" /> {about.location}
            </li>
          </ul>
          <p className="lg:text-lg">{about.description}</p>
        </Card>
      </div>
      <Trigger />
    </section>
  );
}
