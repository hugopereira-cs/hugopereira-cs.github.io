import type { ElementType, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function PageContainer({
  children,
  className = "",
  as: Component = "main",
}: PageContainerProps) {
  return (
    <Component
      className={[
        "mx-auto w-full max-w-5xl flex-1 px-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
