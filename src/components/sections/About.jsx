import { Card } from '../ui/Card';

export function About() {
  return (
    <section className="w-full overflow-x-hidden px-4 lg:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 place-items-center">
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
              <img src="./job.svg" alt="Ícone de pessoa" className="flex size-4" /> Desenvolvedor
              Front-end
            </li>
            <li className="flex flex-row gap-2 items-center">
              <img src="./location.svg" alt="Ícone de pessoa" className="size-4" /> Paraíba do Sul -
              RJ
            </li>
          </ul>
          <p className="lg:text-lg">
            Desenvolvedor front-end com foco em criar interfaces modernas, responsivas e bem
            estruturadas. Possuo experiência em React, Tailwind CSS, HTML, CSS e JavaScript, além de
            controle de versão com Git e GitHub.
          </p>
        </Card>
      </div>
      {/* TODO: Trigger */}
    </section>
  );
}
