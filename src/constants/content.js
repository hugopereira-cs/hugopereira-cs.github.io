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
          { name: 'Formação JavaScript Developer', platform: 'DIO', hours: '39h' },
          { name: 'Fundamentos do React', platform: 'Rocketseat', hours: '6h' },
          { name: 'Formação React Developer', platform: 'DIO', hours: '34h' },
          { name: 'Engenharia de Promp', platform: 'Rocketseat', hours: '2h' },
          { name: 'Introdução ao Tailwind CSS', platform: 'DIO', hours: '3h' },
          { name: 'Bootcamp Linux para Iniciante', platform: 'DIO', hours: '30h' }
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
      title: 'Login com React e TypeScript',
      description:
        'Aplicação web para buscar perfis e repositórios do GitHub pelo nome de usuário.',
      image: './login-react.png',
      techs: ['react', 'typescript', 'supabase'],
      features: [
        'Autenticação com supabase',
        'Rotas protegidas e rotas públicas',
        'Gerenciamento de temas'
      ],
      gitHubURL: 'https://github.com/hugopereira-cs/tela-de-login-react-ts'
    },
    {
      title: 'Calculadora React',
      description: 'Calculadora criada com React.js e Tailwind CSS.',
      image: './calculadora.png',
      techs: ['react', 'javascript', 'tailwindcss'],
      features: ['Histórico de operações', 'Entrada via teclado ou mouse', 'Interface responsiva'],
      projectURL: 'https://hugopereira-cs.github.io/calculadora-react-dio/',
      gitHubURL: 'https://github.com/hugopereira-cs/calculadora-react-dio'
    },
    {
      title: 'Site Países da Copa',
      description: 'Site com informações sobre os 48 países da Copa do Mundo 2026.',
      image: './paises-da-copa.png',
      techs: ['react', 'javascript', 'tailwindcss'],
      features: ['Internacionalização (i18n)', 'Design Responsivo', 'Modo Escuro & Claro'],
      projectURL: 'https://hugopereira-cs.github.io/paises-da-copa/',
      gitHubURL: 'https://github.com/hugopereira-cs/paises-da-copa'
    }
  ],

  contact: [
    {
      name: 'LinkedIn',
      username: '/hugopereiradev',
      title: 'Contecte-se Comigo no LinkedIn',
      logo: '/linkedin.svg',
      url: 'https://www.linkedin.com/in/hugopereiradev'
    },
    {
      name: 'GitHub',
      username: '/hugopereira-cs',
      title: 'Siga-me e Veja Meus Projetos no GitHub',
      logo: '/github.svg',
      url: 'https://github.com/hugopereira-cs'
    },
    {
      name: 'E-mail',
      username: 'hugo.pereira.codes@gmail.com',
      title: 'Fale Comigo por E-mail',
      logo: '/email.svg',
      url: 'mailto:hugo.pereira.codes@gmail.com'
    }
  ]
};
