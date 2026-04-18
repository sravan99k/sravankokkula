type SectionTitleProps = {
  index: string;
  kicker: string;
  title: string;
  body?: string;
  invert?: boolean;
  align?: "left" | "center";
};

export function SectionTitle({ index, kicker, title, body, invert = false, align = "left" }: SectionTitleProps) {
  const textAlign = align === "center" ? "text-center mx-auto" : "text-left";
  const labelTone = invert ? "text-background/60" : "text-muted-foreground";
  const bodyTone = invert ? "text-background/72" : "text-muted-foreground";

  return (
    <div className={`max-w-3xl ${textAlign}`}>
      <p className={`font-mono text-xs uppercase tracking-[0.28em] ${labelTone}`}>
        {index} / {kicker}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-[-0.04em] md:text-5xl">
        {title}
      </h2>
      {body ? <p className={`mt-5 text-base leading-8 md:text-lg ${bodyTone}`}>{body}</p> : null}
    </div>
  );
}
