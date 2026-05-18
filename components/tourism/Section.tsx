export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      {children}
    </section>
  );
}