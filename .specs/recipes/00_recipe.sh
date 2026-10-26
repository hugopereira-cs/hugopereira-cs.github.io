#!/usr/bin/env bash
# =============================================================================
# 00_recipe.sh — Fundação do Portfolio Web (v1)
# Corresponde ao spec: .specs/seeds/00_spec.md
# Roadmap etapa 1: Next.js + TypeScript + Tailwind + Biome + CI + deploy inicial
# =============================================================================
set -euo pipefail

# ---------------------------------------------------------------------------
# 0. Variáveis de configuração
# ---------------------------------------------------------------------------
APP_NAME="hugopereira-cs.github.io"   # nome do repo / diretório raiz
NODE_MIN="24"                          # versão mínima do Node.js exigida
NEXT_VERSION="latest"                      # versão major do Next.js
API_URL_EXAMPLE="https://portfolio-api-hugo-pereira.vercel.app"

# ---------------------------------------------------------------------------
# 1. Pré-requisitos
# ---------------------------------------------------------------------------
echo "── [1/9] Verificando pré-requisitos..."

node_major=$(node -e "console.log(process.versions.node.split('.')[0])")
if [[ "$node_major" -lt "$NODE_MIN" ]]; then
  echo "ERRO: Node.js $NODE_MIN+ é necessário (atual: $(node -v))"
  exit 1
fi

if ! command -v npx &>/dev/null; then
  echo "ERRO: npx não encontrado. Instale Node.js $NODE_MIN+."
  exit 1
fi

echo "OK: Node $(node -v) | npm $(npm -v)"

# ---------------------------------------------------------------------------
# 2. Criar projeto Next.js com App Router + TypeScript + Tailwind
# ---------------------------------------------------------------------------
echo ""
echo "── [2/9] Criando projeto Next.js..."

# create-next-app recusa diretórios que já tenham conteúdo (ex: .specs/, old-portfolio/).
# Solução: scaffoldar em um subdiretório temporário e mover tudo para a raiz.
# Flags:
#   --ts           → TypeScript
#   --tailwind     → Tailwind CSS
#   --app          → App Router
#   --no-src-dir   → sem src/ gerado pelo CLI (criamos manualmente logo abaixo)
#   --no-eslint    → sem ESLint (usaremos Biome)
#   --import-alias → alias "@/*" para imports absolutos
#   --yes / -y     → aceita todos os defaults restantes sem prompt
TMP_DIR="nextapp-tmp"

npx -y create-next-app@"$NEXT_VERSION" "$TMP_DIR" \
  --ts \
  --tailwind \
  --app \
  --no-src-dir \
  --no-eslint \
  --import-alias "@/*" \
  --yes

# Mover tudo do temp para a raiz (exceto o próprio diretório tmp)
shopt -s dotglob
mv "$TMP_DIR"/* .
shopt -u dotglob
rm -rf "$TMP_DIR"

echo "OK: projeto Next.js criado."

# ---------------------------------------------------------------------------
# 3. Estrutura de pastas src/ conforme spec (seção 11)
# ---------------------------------------------------------------------------
echo ""
echo "── [3/9] Criando estrutura de pastas src/..."

mkdir -p \
  src/app/projects \
  src/app/about \
  src/app/contact \
  src/components/layout \
  src/components/projects \
  src/components/ui \
  src/lib/api \
  src/types \
  public/images/projects

# O create-next-app com --no-src-dir gera os arquivos em app/
# Movemos para src/app/ conforme a estrutura do spec
if [[ -d "app" ]]; then
  cp -r app/. src/app/
  rm -rf app
fi

echo "OK: estrutura de pastas criada."

# ---------------------------------------------------------------------------
# 4. Instalar dependências de produção
# ---------------------------------------------------------------------------
echo ""
echo "── [4/9] Instalando dependências de produção..."

npm install \
  lucide-react \
  react-icons

echo "OK: dependências instaladas."

# ---------------------------------------------------------------------------
# 5. Instalar e configurar Biome (lint + format, substitui ESLint/Prettier)
# ---------------------------------------------------------------------------
echo ""
echo "── [5/9] Configurando Biome..."

npm install --save-dev \
  @biomejs/biome

# Sobrescreve/cria biome.json com configuração ajustada ao projeto
cat > biome.json << 'BIOME'
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": ["node_modules", ".next", "out", "public"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "trailingCommas": "es5",
      "semicolons": "always"
    }
  }
}
BIOME

echo "OK: Biome configurado."

# ---------------------------------------------------------------------------
# 6. Atualizar package.json: scripts de lint, format e typecheck
# ---------------------------------------------------------------------------
echo ""
echo "── [6/9] Atualizando scripts no package.json..."

node - << 'JSEOF'
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

pkg.scripts = {
  ...pkg.scripts,
  "dev":       "next dev",
  "build":     "next build",
  "start":     "next start",
  "lint":      "biome lint ./src",
  "lint:fix":  "biome lint --write ./src",
  "format":    "biome format --write ./src",
  "check":     "biome check ./src",
  "check:fix": "biome check --write ./src",
  "typecheck": "tsc --noEmit",
};

fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
console.log("package.json atualizado.");
JSEOF

echo "OK: scripts atualizados."

# ---------------------------------------------------------------------------
# 7. Variáveis de ambiente
# ---------------------------------------------------------------------------
echo ""
echo "── [7/9] Criando arquivos de variáveis de ambiente..."

# .env.example — versionado no repositório
cat > .env.example << ENVEX
# Base URL da Portfolio API (somente servidor — sem NEXT_PUBLIC_)
API_URL=$API_URL_EXAMPLE
ENVEX

# .env.local — NÃO versionado (gitignore já cobre *.local)
if [[ ! -f ".env.local" ]]; then
  cat > .env.local << ENVLOCAL
# Base URL da Portfolio API (somente servidor — sem NEXT_PUBLIC_)
API_URL=$API_URL_EXAMPLE
ENVLOCAL
  echo "Criado .env.local com API_URL de exemplo."
else
  echo ".env.local já existe — não sobrescrito."
fi

echo "OK: variáveis de ambiente configuradas."

# ---------------------------------------------------------------------------
# 8. GitHub Actions — CI (lint + typecheck)
# ---------------------------------------------------------------------------
echo ""
echo "── [8/9] Criando workflow de CI (.github/workflows/ci.yml)..."

mkdir -p .github/workflows

cat > .github/workflows/ci.yml << 'YAML'
name: CI

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  quality:
    name: Lint & Typecheck
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Lint (Biome)
        run: npm run lint

      - name: Typecheck (tsc)
        run: npm run typecheck
YAML

echo "OK: CI configurado."

# ---------------------------------------------------------------------------
# 9. Arquivos iniciais da camada src/ (stubs tipados, compiláveis)
# ---------------------------------------------------------------------------
echo ""
echo "── [9/9] Criando arquivos stub iniciais..."

# ── 9a. Tipos centrais ──────────────────────────────────────────────────────
cat > src/types/index.ts << 'TS'
// =============================================================================
// Tipos centrais do Portfolio Web — espelham os schemas Zod da Portfolio API
// Ref: spec 00 § 5 (Tipos)
// =============================================================================

export type TechCategory = "language" | "frontend" | "backend" | "database" | "tools";

export type Technology = {
  slug: string;
  name: string;
  category: TechCategory;
  showInSkills: boolean;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover: { src: string; alt: string };
  gallery: unknown[];
  technologies: Technology[];
  features: string[];
  links: { github: string; live: string | null };
  featured: boolean;
  order: number;
};

export type Language = {
  name: string;
  level: string;
  levelLabel: string;
};

export type Degree = {
  institution: string;
  course: string;
  status: string;
  expectedEnd?: string;
};

export type Course = {
  name: string;
  institution: string;
  hours: number;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  description: string;
};

export type Contact = {
  type: string;
  name: string;
  handle: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  slogan: string;
  location: string;
  availability: string;
  about: string;
  photos: {
    hero: string;
    about: string;
  };
  languages: Language[];
  education: {
    degrees: Degree[];
    courses: Course[];
  };
  experience: Experience[];
  contacts: Contact[];
};

export type Portfolio = {
  profile: Profile;
  projects: Project[];
  technologies: Technology[];
};
TS

# ── 9b. Leitura de variáveis de ambiente ────────────────────────────────────
cat > src/lib/env.ts << 'TS'
// Lê e valida a variável de ambiente API_URL (somente servidor).
// Lança erro em tempo de inicialização se não estiver definida.
const apiUrl = process.env.API_URL;

if (!apiUrl) {
  throw new Error(
    "Variável de ambiente API_URL não definida. " +
      "Copie .env.example para .env.local e preencha o valor."
  );
}

export const ENV = {
  API_URL: apiUrl,
} as const;
TS

# ── 9c. Camada de acesso à API ───────────────────────────────────────────────
cat > src/lib/api/index.ts << 'TS'
// =============================================================================
// Camada de acesso à Portfolio API — somente no servidor (Server Components)
// Ref: spec 00 § 5 (Consumo da API)
// =============================================================================
import { ENV } from "@/lib/env";
import type { Portfolio, Profile, Project, Technology } from "@/types";

// Revalidação a cada 1 hora, conforme spec
const REVALIDATE = 3600;

/** Helper central: monta URL, aplica cache, trata erros. */
async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${ENV.API_URL}${path}`;

  const response = await fetch(url, {
    ...init,
    next: { revalidate: REVALIDATE },
  });

  if (!response.ok) {
    // A API retorna { error: { code, message } } em caso de falha
    const body = await response.json().catch(() => ({}));
    const message: string = body?.error?.message ?? response.statusText;
    throw new Error(`API error [${response.status}] ${path}: ${message}`);
  }

  return response.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Funções públicas de acesso
// ---------------------------------------------------------------------------

/** Retorna o payload completo: perfil + projetos + tecnologias. */
export async function getPortfolio(): Promise<Portfolio> {
  return apiFetch<Portfolio>("/api/v1/portfolio");
}

/** Retorna apenas o perfil (usado em /about e /contact). */
export async function getProfile(): Promise<Profile> {
  return apiFetch<Profile>("/api/v1/profile");
}

/** Retorna projetos, com filtro opcional por `featured`. */
export async function getProjects(params?: { featured?: boolean }): Promise<Project[]> {
  const qs = params?.featured !== undefined ? `?featured=${params.featured}` : "";
  return apiFetch<Project[]>(`/api/v1/projects${qs}`);
}

/** Retorna tecnologias, com filtro opcional por `skills` (showInSkills). */
export async function getTechnologies(params?: { skills?: boolean }): Promise<Technology[]> {
  const qs = params?.skills !== undefined ? `?skills=${params.skills}` : "";
  return apiFetch<Technology[]>(`/api/v1/technologies${qs}`);
}
TS

# ── 9d. Páginas stub ─────────────────────────────────────────────────────────
cat > src/app/projects/page.tsx << 'TSX'
// /projects — stub (etapa 5 do roadmap)
export default function ProjectsPage() {
  return (
    <main>
      <h1>Projetos</h1>
    </main>
  );
}
TSX

cat > src/app/about/page.tsx << 'TSX'
// /about — stub (etapa 6 do roadmap)
export default function AboutPage() {
  return (
    <main>
      <h1>Sobre</h1>
    </main>
  );
}
TSX

cat > src/app/contact/page.tsx << 'TSX'
// /contact — stub (etapa 6 do roadmap)
export default function ContactPage() {
  return (
    <main>
      <h1>Contato</h1>
    </main>
  );
}
TSX

# ── 9e. Tratamento de falhas (stubs — etapa 7) ──────────────────────────────
cat > src/app/error.tsx << 'TSX'
"use client";
// Fallback global de erros — etapa 7 do roadmap
// Ref: spec 00 § 6 (Tratamento de falhas)
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main>
      <h1>Algo deu errado</h1>
      <button type="button" onClick={reset}>
        Tentar novamente
      </button>
    </main>
  );
}
TSX

cat > src/app/not-found.tsx << 'TSX'
// Página 404 global — etapa 7 do roadmap
export default function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>
    </main>
  );
}
TSX

cat > src/app/loading.tsx << 'TSX'
// Skeleton/loading global — etapa 7 do roadmap
export default function Loading() {
  return <div aria-busy="true" aria-label="Carregando..." />;
}
TSX

cat > src/app/projects/loading.tsx << 'TSX'
// Skeleton/loading de /projects — etapa 7 do roadmap
export default function ProjectsLoading() {
  return <div aria-busy="true" aria-label="Carregando projetos..." />;
}
TSX

echo "OK: arquivos stub criados."

# ---------------------------------------------------------------------------
# Resumo final
# ---------------------------------------------------------------------------
echo ""
echo "════════════════════════════════════════════════════════════════════"
echo " Portfolio Web — Fundação concluída com sucesso!"
echo "════════════════════════════════════════════════════════════════════"
echo ""
echo "Próximos passos:"
echo "  1. cp .env.example .env.local  (se ainda não feito)"
echo "  2. npm run dev                 (inicia o servidor local)"
echo "  3. npm run typecheck           (valida tipos)"
echo "  4. npm run lint                (valida código com Biome)"
echo ""
echo "Roadmap:"
echo "  Etapa 2 → Camada de API (apiFetch já criado, expandir conforme necessário)"
echo "  Etapa 3 → Layout base: header, footer, tema claro/escuro, fontes"
echo "  Etapa 4 → Home: hero, destaques, skills, sobre resumido"
echo "  Etapa 5 → Projects: lista + filtro por tech na URL"
echo "  Etapa 6 → About e Contact"
echo "  Etapa 7 → Estados, polimento, metadata/OG, sitemap"
echo "  Etapa 8 → Acessibilidade, Lighthouse, README, domínio"
echo ""
