// =============================================================================
// HeroSection — exibe nome, cargo, slogan, localização, disponibilidade e foto
// Ref: spec 00 § 4.1 (Home / Hero)
// =============================================================================

import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Profile } from "@/types";

interface HeroSectionProps {
  profile: Pick<Profile, "name" | "role" | "slogan" | "location" | "availability" | "photos">;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const { name, role, slogan, location, availability, photos } = profile;

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col-reverse items-center gap-10 py-20 sm:flex-row sm:items-center sm:justify-between sm:gap-16"
    >
      {/* Texto */}
      <div className="flex flex-col gap-5 text-center sm:text-left">
        {/* Badge de disponibilidade */}
        <span className="inline-flex items-center self-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 sm:self-start dark:text-emerald-400">
          <span
            aria-hidden="true"
            className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
          />
          {availability}
        </span>

        {/* Nome + cargo */}
        <div className="flex flex-col gap-1">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {name}
          </h1>
          <p className="font-mono text-lg text-foreground/60">{role}</p>
        </div>

        {/* Slogan */}
        <p className="max-w-md text-base leading-relaxed text-foreground/70">{slogan}</p>

        {/* Localização */}
        <p className="inline-flex items-center justify-center gap-1.5 text-sm text-foreground/50 sm:justify-start">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          {location}
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Ver projetos
          </Link>
          <Link
            href="/contact"
            className="flex h-11 items-center justify-center rounded-lg border border-foreground/20 px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
          >
            Contato
          </Link>
        </div>
      </div>

      {/* Foto */}
      <div className="shrink-0">
        <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-foreground/10 sm:h-52 sm:w-52">
          <Image
            src={photos.hero}
            alt={`Foto de ${name}`}
            fill
            sizes="(max-width: 640px) 160px, 208px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
