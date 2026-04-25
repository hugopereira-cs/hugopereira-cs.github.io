import { ProjectItem } from '../ui/ProjectItem';
// TODO: Adicionar outros projetos
const projects = [
  {
    title: 'Calculadora React',
    description: 'Calculadora criada com React.js',
    image: './calculadora.png',
    features: ['Histórico de operações', 'Entrada via teclado ou mouse', 'Interface responsiva'],
    projectURL: 'https://hugopereira-cs.github.io/calculadora-react-dio/',
    gitHubURL: 'https://github.com/hugopereira-cs/calculadora-react-dio'
  },
  {
    title: 'GitFind',
    description: 'Aplicação web para buscar perfis e repositórios do GitHub pelo nome de usuário.',
    image: './gitFind.png', //TODO
    features: [
      'Busca por @username',
      'Exibição de foto de perfil, nome, login e bio do usuário',
      'Listagem dos repositórios públicos com nome e descrição'
    ],
    projectURL: 'https://hugopereira-cs.github.io/gitFind/',
    gitHubURL: 'https://github.com/hugopereira-cs/gitFind'
  },
  {
    title: 'Conversor de Temperatura',
    description:
      'Converter temperaturas entre Fahrenheit e Celsius com interface moderna e amigável, com Vanilla JS.',
    image: './conversorTemp.png', //TODO
    features: ['Conversão bidirecional', 'Design totalmente responsivo', 'Validação de entrada'],
    projectURL: 'https://hugopereira-cs.github.io/conversor-de-temperatura/',
    gitHubURL: 'https://github.com/hugopereira-cs/conversor-de-temperatura'
  },
  {
    title: 'Conversor de Temperatura',
    description:
      'Converter temperaturas entre Fahrenheit e Celsius com interface moderna e amigável, com Vanilla JS.',
    image: './conversorTemp.png', //TODO
    features: ['Conversão bidirecional', 'Design totalmente responsivo', 'Validação de entrada'],
    projectURL: 'https://hugopereira-cs.github.io/conversor-de-temperatura/',
    gitHubURL: 'https://github.com/hugopereira-cs/conversor-de-temperatura'
  }
];

export function Projects() {
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
