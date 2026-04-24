import { Card } from '../ui/Card';

export function About() {
  return (
    <section className="w-full overflow-x-hidden p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full place-items-start">
        <img
          src="./aboutSection.png"
          alt="Imagem de Perfil de Hugo Pereira"
          className="max-w-48 lg:max-w-60"
        />
        <Card>
          <h2 className="text-3xl font-semibold text-brand-text-primary mb-2 tracking-wide">
            Sobre Mim
          </h2>
          <ul className="flex flex-col gap-1">
            <li className="flex flex-row gap-2 items-center">
              <img src="./job.svg" alt="Ícone de pessoa" className="flex size-4" /> Desenvolvedor
              Front-end
            </li>
            <li className="flex flex-row gap-2 items-center">
              <img src="./location.svg" alt="Ícone de pessoa" className="size-4" /> Paraíba do Sul -
              RJ
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
