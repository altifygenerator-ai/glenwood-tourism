import type { ReactNode } from "react";

const AMITY_URL = "https://www.amityarkansas.org";

export function AmityLink({
  children = "Amity",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AMITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-semibold text-[color:var(--color-accent)] underline underline-offset-4 transition hover:opacity-75 ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export function LinkedAmityText({ text }: { text: string }) {
  const parts = text.split(/(\bAmity\b)/g);

  return (
    <>
      {parts.map((part, index) =>
        part === "Amity" ? (
          <AmityLink key={`${part}-${index}`}>{part}</AmityLink>
        ) : (
          part
        )
      )}
    </>
  );
}
