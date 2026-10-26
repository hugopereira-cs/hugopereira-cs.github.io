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
