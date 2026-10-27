// =============================================================================
// Home page (/) — Server Component
// Ref: spec 00 § 4.1 (Home / Hero)
// Dados: uma única chamada a GET /api/v1/portfolio
// =============================================================================

import { HeroSection } from "@/components/ui/HeroSection";
import { getPortfolio } from "@/lib/api";

export default async function Home() {
  const { profile } = await getPortfolio();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
      <HeroSection profile={profile} />
    </main>
  );
}
