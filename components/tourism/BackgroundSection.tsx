export default function BackgroundSection({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="dark-section relative overflow-hidden py-24 md:py-32"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-sm md:p-8">
          {children}
        </div>
      </div>
    </section>
  );
}