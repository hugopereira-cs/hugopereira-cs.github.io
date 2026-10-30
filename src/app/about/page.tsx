import { PageContainer } from "@/components/ui/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer className="py-10 sm:py-14">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre</h1>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Em construção: aqui entra a história, a trajetória e os valores do
          trabalho.
        </p>
      </header>
    </PageContainer>
  );
}
