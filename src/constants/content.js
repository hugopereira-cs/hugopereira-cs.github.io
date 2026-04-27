/**
 * Centralização de todo o conteúdo textual do portfólio.
 * Facilita a manutenção e futuras traduções (i18n).
 */

export const SITE_CONTENT = {
  hero: {
    name: 'Hugo Pereira',
    title: '<Olá, sou Hugo, Desenvolvedor Front-end />',
    slogan: 'Criatividade em Código & Desenvolvimento Front-end',
    image: './professional-photo.png'
  },

  about: {
    role: 'Desenvolvedor Front-end',
    location: 'Paraíba do Sul - RJ',
    description: `Desenvolvedor front-end com foco em criar interfaces modernas, responsivas e bem estruturadas. Possuo experiência em React, Tailwind CSS, HTML, CSS e JavaScript, além de controle de versão com Git e GitHub.`,
    image: './aboutSection.png',

    // Estrutura para o seu componente Trigger
    tabs: {
      skills: {
        title: 'Skills',
        techs: [
          'react',
          'tailwind',
          'typescript',
          'javascript',
          'html5',
          'css3',
          'python',
          'git',
          'github',
          'postgresql'
        ]
      },
      languages: {
        title: 'Idiomas',
        items: [
          { name: 'Português', level: 'Nativo' },
          { name: 'Inglês', level: 'Técnico / Intermediário' },
          { name: 'Italiano', level: 'Básico' }
        ]
      },
      education: {
        title: 'Educação',
        graduation: [
          {
            institution: 'Estácio de Sá',
            course: 'Ciência da Computação - Cursando',
            period: 'Início: 2024 - Previsão de término: 2028'
          }
        ],
        courses: [
          { name: 'Bootcamp Front-end do Zero', platform: 'DIO', hours: '75h' },
          { name: 'Formação JavaScript Developer', plataform: 'DIO', hours: '39h' },
          { name: 'Fundamentos do React', plataform: 'Rocketseat', hours: '6h' },
          { name: 'Formação React Developer', plataform: 'DIO', hours: '34h' },
          { name: 'Engenharia de Promp', plataform: 'Rocketseat', hours: '2h' },
          { name: 'Introdução ao Tailwind CSS', plataform: 'DIO', hours: '3h' },
          { name: 'Bootcamp Linux para Iniciante', plataform: 'DIO', hours: '30h' }
        ]
      },
      experience: {
        title: 'Experiência Profissional',
        items: [
          {
            company: 'Em transição de carreira'
            // role: 'Desenvolvedor Front-end',
            //period: '2023 - Presente',
            // description: 'Desenvolvimento de interfaces responsivas e manutenção de sistemas.'
          }
        ]
      }
    }
  },

  projects: [
    {
      title: 'Calculadora React',
      description: 'Calculadora criada com React.js',
      image: './calculadora.png',
      techs: ['react', 'javascript', 'css3'],
      features: ['Histórico de operações', 'Entrada via teclado ou mouse', 'Interface responsiva'],
      projectURL: 'https://hugopereira-cs.github.io/calculadora-react-dio/',
      gitHubURL: 'https://github.com/hugopereira-cs/calculadora-react-dio'
    },
    {
      title: 'GitFind',
      description:
        'Aplicação web para buscar perfis e repositórios do GitHub pelo nome de usuário.',
      image: './gitFind.png',
      techs: ['react', 'javascript', 'github'],
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
      image: './conversorTemp.png',
      techs: ['javascript', 'html5', 'css3'],
      features: ['Conversão bidirecional', 'Design totalmente responsivo', 'Validação de entrada'],
      projectURL: 'https://hugopereira-cs.github.io/conversor-de-temperatura/',
      gitHubURL: 'https://github.com/hugopereira-cs/conversor-de-temperatura'
    }
  ],

  contact: [
    {
      name: 'LinkedIn',
      title: 'Contecte-se comigo no LinkedIn',
      logo: '/linkedin.svg',
      url: 'https://www.linkedin.com/in/hugopereiradev'
    },
    {
      name: 'GitHub',
      title: 'Contecte-se comigo no GitHub',
      logo: '/github.svg', // TODO: adicionar logo à pasta public
      url: 'https://github.com/hugopereira-cs'
    },
    {
      name: 'E-mail',
      title: 'Envie-me um e-mail',
      logo: '/email.svg', // TODO: adicionar logo à pasta public
      url: 'mailto:hugo.pereira.codes@gmail.com'
    }
  ]
};
