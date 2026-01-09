# 💼 Portfólio - Hugo Pereira

<div align="center">
  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

## 📋 Sobre o Projeto

Portfólio profissional desenvolvido como projeto do **Bootcamp Front-end do Zero** da [Digital Innovation One (DIO)](https://www.dio.me/). O site apresenta projetos, habilidades e informações profissionais de forma moderna e responsiva.

Este projeto demonstra o domínio das três principais tecnologias do desenvolvimento front-end: HTML5, CSS3 e JavaScript, através de uma interface intuitiva e visualmente atraente.

## ✨ Funcionalidades

- 🎨 **Tema Claro/Escuro**: Alternância entre temas com persistência via localStorage
- 📱 **Design Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- 🧭 **Navegação Intuitiva**: Menu principal no desktop e menu mobile fixo na parte inferior
- 📂 **Seções Organizadas**:
  - Home com apresentação e links sociais
  - Skills com principais tecnologias
  - Projetos em destaque com detalhes e links
  - Sobre mim com formação e experiências
  - Contato com informações e redes sociais
- 🎯 **Accordion Interativo**: Exibição dinâmica de cursos e certificações
- 🔗 **Links Externos**: Integração com GitHub e LinkedIn

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo
- **CSS3**: Estilização avançada com:
  - CSS Variables para temas dinâmicos
  - Flexbox para layouts responsivos
  - Media Queries para diferentes breakpoints
  - Animações e transições suaves
- **JavaScript Vanilla**: Funcionalidades interativas como:
  - Sistema de temas (claro/escuro)
  - Accordion para cursos
  - Navegação ativa no menu
  - Persistência de dados com localStorage
- **Google Fonts**: Tipografia personalizada (Inter e League Spartan)
- **Bootstrap Icons**: Ícones modernos e escaláveis

## 📁 Estrutura do Projeto

```
portfolio/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── scripts/
│   │   └── scripts.js
│   └── images/
│       ├── logo.png
│       ├── favicon.ico
│       ├── about-section.png
│       ├── technologies/
│       │   ├── javascript.svg
│       │   ├── css.svg
│       │   └── bootstrap-fill.svg
│       └── projects/
│           ├── spider-man.png
│           ├── pokedex.png
│           └── virtual-piano.png
└── README.md
```

## 🎨 Paleta de Cores

### Tema Escuro (Padrão)
- Background Principal: `#111217`
- Background Secundário: `#28292e`
- Cor Primária: `#f0f0f0`
- Texto: `#9a9a9c`
- Bordas: `#28292e` / `#c7c8c9`

### Tema Claro
- Background Principal: `#e9e9e9`
- Background Secundário: `#c7c8c9`
- Cor Primária: `#0b0b0f`
- Texto: `#28292e`
- Bordas: `#c7c8c9` / `#9a9a9a`

## 📱 Responsividade

O projeto conta com breakpoints otimizados para diferentes dispositivos:

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop Small**: 992px - 1199px
- **Desktop Medium**: 1200px - 1399px
- **Desktop Large**: 1400px - 1699px
- **Desktop XL**: ≥ 1700px

## 🎯 Recursos Destacados

### Sistema de Temas
```javascript
// Alternância entre tema claro e escuro
function changeTheme() {
  const currentTheme = rootHtml.getAttribute('data-theme') || 'dark';
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
}
```

### Menu Ativo
O menu identifica automaticamente a seção ativa baseada nos cliques do usuário.

### Accordion Dinâmico
Accordion para exibir informações de cursos de forma organizada e interativa.

## 🌐 Deploy

O projeto está disponível online através do GitHub Pages:
[https://hugopereira-cs.github.io](https://hugopereira-cs.github.io)

## 👨‍💻 Autor

**Hugo Pereira**
- Localização: Paraíba do Sul - RJ
- GitHub: [@hugopereira-cs](https://github.com/hugopereira-cs)
- LinkedIn: [Hugo Pereira](https://www.linkedin.com/in/hugopereiradev/)
- Email: hugo.pereira.codes@gmail.com

## 📝 Licença

© 2025. Todos os Direitos Reservados. Hugo Pereira.

---

<div align="center">
  
### ⭐ Se este projeto foi útil, considere dar uma estrela!

Desenvolvido com 💙 durante o Bootcamp Front-end do Zero - DIO

</div>