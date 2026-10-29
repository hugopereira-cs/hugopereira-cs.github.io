// =============================================================================
// Home page (/) — Server Component
// Ref: spec 00 § 4.1 (Home / Hero)
// Dados carregados dos arquivos locais em src/data
// =============================================================================

import { HeroSection } from "@/components/ui/HeroSection";
import { getProfile } from "@/lib/data";

export default function Home() {
  const profile = getProfile();
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
      <HeroSection profile={profile} />
    </main>
  );
}
