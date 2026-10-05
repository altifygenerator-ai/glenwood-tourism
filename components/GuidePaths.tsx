import Link from "next/link";
import styles from "./GuidePaths.module.css";

export const glenwoodPaths = [
  { href: "/caddo-river", label: "Float the Caddo" },
  { href: "/explore", label: "Things to do" },
  { href: "/glenwood-ar-restaurants", label: "Restaurants" },
  { href: "/glenwood-ar-cabins", label: "Cabins & stays" },
  { href: "/things-to-do-in-glenwood-with-kids", label: "With kids" },
  { href: "/this-weekend", label: "This weekend" },
];

export default function GuidePaths({ title = "Quick plan", links = glenwoodPaths, next = false }: {
  title?: string;
  links?: { href: string; label: string }[];
  next?: boolean;
}) {
  return (
    <section className={next ? styles.next : styles.quick} aria-label={title}>
      <div className="container">
        {next ? <h2 className="mb-5 text-3xl font-semibold">{title}</h2> : <p className="eyebrow mb-4">{title}</p>}
        <nav aria-label={title} className={styles.links}>
          {links.map(link => <Link key={link.href} href={link.href} className="btn">{link.label}</Link>)}
        </nav>
      </div>
    </section>
  );
}
