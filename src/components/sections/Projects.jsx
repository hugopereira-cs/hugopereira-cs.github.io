import { ProjectItem } from '../ui/ProjectItem';
// TODO: Popular projects
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
    projectURL: 'https://hugopereira-cs.github.io/calculadora-react-dio/',
    gitHubURL: 'https://github.com/hugopereira-cs/gitFind'
  }
];

export function Projects() {
  return (
    <section>
      <h1 className="text-4xl text-center font-semibold text-brand-text-primary mb-8">Projetos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
