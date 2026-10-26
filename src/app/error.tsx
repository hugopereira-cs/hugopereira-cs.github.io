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
