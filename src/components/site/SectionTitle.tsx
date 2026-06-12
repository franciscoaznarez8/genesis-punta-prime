type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center", light }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 font-display text-4xl md:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <span className={`mt-5 inline-block hairline ${align === "left" ? "ml-0" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
