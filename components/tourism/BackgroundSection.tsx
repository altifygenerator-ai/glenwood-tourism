export default function BackgroundSection({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="relative py-24 dark-section overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}