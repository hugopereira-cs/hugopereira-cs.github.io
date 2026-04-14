export function Header() {
  return (
    <div className="h-16 w-auto flex flex-row justify-center items-center px-4 mb-8 border-b border-brand-border">
      <div className="w-auto flex flex-row gap-4 text-sm md:gap-24 md:text-base text-brand-text-secondary">
        <a href="#" className="py-4">
          Home
        </a>
        <a href="#" className="py-4">
          Projetos
        </a>
        <p className="h-12 w-10 text-xs py-0.5 text-brand-accent">Dev Hugo Pereira</p>
        <a href="#" className="py-4">
          Sobre
        </a>
        <a href="#" className="py-4">
          Contato
        </a>
      </div>
    </div>
  );
}
