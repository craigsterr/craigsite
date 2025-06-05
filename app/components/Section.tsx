type SectionProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export default function Section({
  title,
  className = "",
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`drop-shadow-[0_8px_24px_rgba(0,0,0,1)] mx-5 bg-black/20 rounded-2xl p-5 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </section>
  );
}
