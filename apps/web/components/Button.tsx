import Link from "next/link";
import type { ComponentProps } from "react";

// Shared styles, so <Button> and <ButtonLink> always look the same.
const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap " +
  "transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
  "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-brand text-on-brand hover:bg-brand-hover",
  secondary: "border border-line bg-white text-ink hover:bg-surface-hover",
  danger: "border border-danger-line bg-white text-danger hover:bg-error-soft",
  ghost: "bg-transparent text-ink hover:bg-surface-hover",
};

const sizes = {
  sm: "h-9 px-3 text-[13px]", // 36px, list rows
  md: "h-11 px-4 text-sm", // 44px, forms and review pages
  lg: "h-13 px-6 text-[15px]", // 52px, hero and page CTAs
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

// Everything a normal <button> accepts (onClick, disabled, type, aria-*...),
// plus our own variant and size.
type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  type = "button", // avoid accidental form submits
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classes(variant, size, className)}
      {...props}
    />
  );
}

// Same look, but it navigates: use this for "Submit a portfolio", "Browse portfolios" etc.
type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={classes(variant, size, className)} {...props} />;
}
