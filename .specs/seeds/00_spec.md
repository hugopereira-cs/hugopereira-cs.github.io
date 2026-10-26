# Spec: Portfolio Web (Front-end)

> Versão 1.0 (primeira versão, sujeita a revisão)

## 1. Visão geral

Site/portfólio pessoal para apresentar perfil, tecnologias e projetos, com foco em conseguir a primeira vaga na área (estágio/júnior). O conteúdo vem da **Portfolio API** própria (Express + TypeScript + Zod), consumida exclusivamente no servidor pelo Next.js.

**Objetivo principal:** em ~30 segundos, o recrutador entende quem eu sou, o que sei fazer e consegue abrir meus projetos e meus contatos.

**Público-alvo:** recrutadores, tech leads e pessoas de engenharia avaliando candidatos a estágio/júnior (front-end, back-end e full stack).

## 2. Stack

| Área | Escolha |
|---|---|
| Framework | Next.js (App Router) |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS |
| Lint/Format | Biome |
| Deploy | Vercel |
| Fonte de dados | Portfolio API (`https://portfolio-api-hugo-pereira.vercel.app/api/v1`) |

## 3. Escopo da v1

### Dentro do escopo
- Quatro páginas: `/`, `/projects`, `/about`, `/contact`
- Consumo da API somente no servidor (Server Components)
- Filtro de projetos por tecnologia com estado na URL
- Tema claro/escuro
- Tratamento de erro, carregamento e 404
- SEO básico (metadata e Open Graph)
- CI com lint e typecheck

### Fora do escopo (fica para evolução)
- Internacionalização (somente português na v1)
- Formulário de contato (v1 usa links diretos)
- Página de detalhe de projeto (`/projects/[slug]`)
- Testes automatizados (opcional)
- Animações elaboradas

## 4. Páginas

### 4.1 `/` (Home / Hero)
- **Hero:** `name`, `role`, `slogan`, `location` e `availability` (como badge), foto em `photos.hero` e dois CTAs: "Ver projetos" (`/projects`) e "Contato" (`/contact`).
- **Projetos em destaque:** projetos com `featured=true`, em cards.
- **Skills:** tecnologias com `skills=true` (campo `showInSkills`), agrupadas por `category`: `language`, `frontend`, `backend`, `database` e `tools`.
- **Sobre resumido:** parágrafo curto com link para `/about`.
- **Dados:** uma única chamada a `GET /api/v1/portfolio`.

### 4.2 `/projects`
- Lista completa de projetos, ordenada pelo campo `order` (já devolvida assim pela API).
- Cada card: `cover` (imagem + `alt`), `title`, `summary`, tecnologias, `features` e links: `links.github` sempre e `links.live` somente quando não for `null`.
- O campo `description` fica reservado para a futura página `/projects/[slug]`; `gallery` é ignorado na v1.
- **Filtro por tecnologia:** controlado por query string (`/projects?tech=react`), lido via `searchParams` no Server Component. Sem fetch no cliente. Com apenas 3 projetos (todos usam React), o filtro agrega pouco hoje; implementar depois da lista base e manter simples.
- Estado vazio quando nenhum projeto corresponde ao filtro.
- **Dados:** `GET /api/v1/projects` (e `GET /api/v1/technologies` para montar as opções do filtro).

### 4.3 `/about`
- `about` (texto) e `photos.about`.
- **Formação:** `education.degrees` (Ciência da Computação, Estácio de Sá, em andamento, previsão 2028).
- **Cursos:** `education.courses` agrupados ou resumidos (são 9 cursos, ~262 h no total), evitando uma lista longa e monótona.
- **Idiomas:** `languages` com `levelLabel`.
- **Experiência:** `experience` está vazio hoje; a seção só é renderizada quando houver itens.
- Seção curta "Como este site foi feito": Next.js → Express API → JSON/Zod, com links para os dois repositórios.
- **Dados:** `GET /api/v1/profile`.

### 4.4 `/contact`
- Links diretos a partir de `contacts` (`type`, `name`, `handle`, `url`): LinkedIn, GitHub e e-mail.
- Link para download do currículo (arquivo estático em `public/`).
- Sem formulário na v1.
- **Dados:** `GET /api/v1/profile` (campo `contacts`).

## 5. Consumo da API

### Regras
- Todo `fetch` acontece em **Server Components** (ou `generateMetadata`). Nenhum componente `"use client"` chama a API.
- Variável de ambiente `API_URL` **sem** o prefixo `NEXT_PUBLIC_`, para nunca ir ao bundle do navegador.
- Como o navegador nunca chama a API, o CORS não entra em jogo (previews da Vercel funcionam sem mudanças na API).
- Cache com `revalidate` de 1 hora (`next: { revalidate: 3600 }`). Revalidação sob demanda pode ser adicionada depois.

### Camada de acesso (`src/lib/api`)
Centralizar as chamadas em funções tipadas, por exemplo:

```ts
getPortfolio(): Promise<Portfolio>
getProfile(): Promise<Profile>
getProjects(params?: { featured?: boolean }): Promise<Project[]>
getTechnologies(params?: { skills?: boolean }): Promise<Technology[]>
```

- Um helper `apiFetch<T>(path, options)` que monta a URL com `API_URL`, aplica `revalidate`, trata respostas não-OK e lança um erro tipado.
- Respostas de erro da API seguem o formato `{ error: { code, message } }`.

### Tipos
- Os tipos de `Profile`, `Project` e `Technology` devem espelhar os schemas Zod da API (`src/schemas/` no repositório da API).
- Em `Project`, o campo `technologies` contém **objetos de tecnologia**, não apenas slugs (no JSON são slugs; a API devolve os objetos).

```ts
type TechCategory = "language" | "frontend" | "backend" | "database" | "tools";

type Technology = {
  slug: string;
  name: string;
  category: TechCategory;
  showInSkills: boolean;
};

type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover: { src: string; alt: string };
  gallery: unknown[]; // vazio na v1
  technologies: Technology[];
  features: string[];
  links: { github: string; live: string | null };
  featured: boolean;
  order: number;
};
```

`Profile` segue o `profile.json`: `name`, `role`, `slogan`, `location`, `availability`, `about`, `photos`, `languages`, `education` (`degrees` e `courses`), `experience` e `contacts`. Conferir `links.github` (nullable ou não) no schema da API.

### Imagens
- As imagens ficam no front, em `public/images/` (ex.: `public/images/projects/calculadora.png`), e os caminhos vindos da API (`/images/...`) já apontam para lá.
- Usar `next/image` com `alt` vindo da API (`cover.alt`) e dimensões ou `fill` + `sizes` definidos.
- Se um dia a API passar a devolver URLs absolutas, configurar `images.remotePatterns` no `next.config`.
- Os nomes dos arquivos precisam bater com os caminhos dos JSONs; se mudar um, mudar o outro.
- Na v1, copiar os tipos manualmente. Validar a resposta com Zod no front é opcional; avaliar depois (ou extrair um pacote compartilhado).

## 6. Tratamento de falhas e estados

| Arquivo | Função |
|---|---|
| `app/error.tsx` | Fallback quando a API falha ou ocorre erro de renderização, com botão "Tentar novamente" |
| `app/not-found.tsx` | Página 404 global |
| `app/loading.tsx` / `app/projects/loading.tsx` | Skeletons/indicadores de carregamento |

- Se a API estiver fora do ar, o site deve exibir uma mensagem amigável, nunca uma tela quebrada.
- O cache do Next ajuda a servir a última versão válida enquanto a API "acorda" (cold start na Vercel).

## 7. Design e UX

- **Vibe:** minimalista e técnico.
- **Tema:** claro e escuro, respeitando `prefers-color-scheme`, com toggle manual (persistido) e sem "flash" de tema errado no carregamento.
- **Tailwind:** definir tokens (cores, espaçamentos, tipografia) no config/tema, evitando valores soltos.
- **Fontes:** `next/font` (uma fonte sans para texto e uma mono para detalhes técnicos).
- **Ícones:** `lucide-react` (ou `react-icons`, para logos de tecnologias).
- **Responsivo:** mobile-first; layouts testados em 360px, 768px e 1280px+.
- **Movimento:** transições sutis via CSS; respeitar `prefers-reduced-motion`.

## 8. Acessibilidade, performance e SEO

- HTML semântico (`header`, `main`, `nav`, `section`, `footer`), hierarquia de títulos correta.
- Navegação completa por teclado, foco visível, contraste mínimo WCAG AA.
- `alt` descritivo em todas as imagens; usar `next/image` com dimensões definidas.
- **Meta:** Lighthouse ≥ 90 em Performance, Acessibilidade, Boas Práticas e SEO.
- `metadata` por página (título, descrição), Open Graph e imagem de preview para compartilhamento no LinkedIn.
- `sitemap.xml` e `robots.txt`.

## 9. Qualidade e CI

- **Biome:** lint e format (`npm run lint`, `npm run format`).
- **Typecheck:** `tsc --noEmit` (`npm run typecheck`).
- **GitHub Actions:** a cada push/PR, rodar install, lint e typecheck.
- **Opcional:** Vitest + Testing Library para componentes-chave; Playwright para a jornada "home → projects".
- **README:** tão cuidado quanto o da API, com screenshot, link do deploy, stack e instruções para rodar localmente.

## 10. Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `API_URL` | Base da API (somente servidor) | `https://portfolio-api-hugo-pereira.vercel.app` |

Incluir um `.env.example` no repositório. Opcionalmente, validar a variável na inicialização (ex.: com Zod), como já é feito na API.

## 11. Estrutura de pastas sugerida

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # /
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/               # Header, Footer, ThemeToggle
│   ├── projects/             # ProjectCard, ProjectList, TechFilter
│   └── ui/                   # Botões, badges, seções reutilizáveis
├── lib/
│   ├── api/                  # apiFetch e funções de acesso
│   └── env.ts                # Leitura/validação de variáveis
└── types/                    # Profile, Project, Technology
```

## 12. Roadmap por etapas

1. **Fundação:** projeto Next.js + TypeScript + Tailwind + Biome, CI, deploy inicial na Vercel.
2. **Camada de API:** `apiFetch`, tipos e funções de acesso, com `revalidate`.
3. **Layout base:** header, footer, tema claro/escuro, fontes e tokens.
4. **Home:** hero, destaques, skills e sobre resumido.
5. **Projects:** lista completa e filtro por tecnologia na URL.
6. **About e Contact.**
7. **Estados e polimento:** `error`, `not-found`, `loading`, metadata/OG, sitemap.
8. **Qualidade:** acessibilidade, Lighthouse, README e domínio próprio.

## 13. Decisões tomadas

- Fetch somente no servidor (sem CORS no fluxo do front).
- Português apenas na v1.
- Contato por links, sem formulário.
- Sem `/projects/[slug]` na v1.
- Vibe minimalista e técnica, com tema claro/escuro.

## 14. Evoluções futuras (fase 2+)

- Página `/projects/[slug]` com estudo de caso (problema, decisões, o que deu errado, aprendizados), usando `generateStaticParams` e `generateMetadata`.
- Formulário de contato via Route Handler (`app/api/contact/route.ts`).
- Internacionalização PT/EN (exige textos nos dois idiomas na API).
- Badge de status da API usando `/api/v1/health`.
- Testes com Vitest/Testing Library e E2E com Playwright.
- Validação com Zod no front ou pacote de tipos compartilhado entre API e front.
- Revalidação sob demanda quando o conteúdo mudar.

## 15. Dados da API (confirmados) e pontos de atenção

**Confirmado com os JSONs atuais:**
- `profile.json` tem `contacts`, então `/contact` depende só da API.
- `technologies.json` tem `category`, então as skills podem ser agrupadas.
- Projetos têm `cover`, `features` e `links` (`github` e `live`).

**Pontos de atenção:**
- **Currículo:** não existe na API. Colocar o PDF em `public/` (ou, no futuro, adicionar um campo `resume` ao perfil).
- **Cypress e Supabase** têm `showInSkills: false`, mas Cypress aparece no texto de `about`. Decidir se entram nas skills.
- **Projeto sem deploy:** `login-react-typescript` tem `live: null`. Um projeto com demo online costuma pesar mais para quem avalia.
- **Todos os projetos são `featured`:** a home e `/projects` mostrarão a mesma lista. Aceitável com 3 projetos; revisar quando houver mais.
- **`availability`:** "Em transição de carreira" é vago para quem recruta. Considerar algo como "Buscando estágio/júnior".
- **`experience` vazio:** a seção não deve aparecer na v1.
