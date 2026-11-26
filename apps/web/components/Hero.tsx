type HeroProps = {
  title: string;
  description: string;
};
export function Hero({ title, description }: HeroProps) {
  return (
    <div className="space-y-4 max-w-190">
      <h1 className="font-heading font-semibold text-ink text-[56px] text-hero text-balance">
        {title}
      </h1>
      <p className="w-150 font-sans text-muted text-[18px]">{description}</p>
    </div>
  );
}
