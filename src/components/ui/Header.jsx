import { Menu } from './Menu';

export function Header() {
  return (
    <div className="h-16 flex flex-row justify-items-start gap-104 items-center mb-16 px-64 py-10 border-y border-brand-border">
      <Menu />
      <img src="./logo.png" alt="" className="h-12" />
    </div>
  );
}
