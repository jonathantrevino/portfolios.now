import { useId, type ComponentProps, type ReactNode } from "react";

const sizes = {
  md: "min-h-11 text-[15px]", // 44px, forms (submit flow, admin)
  lg: "min-h-13 text-base", // 52px, search fields
};

// Everything a normal <input> accepts (value, onChange, type, placeholder...),
// minus the native "size" attribute, which we replace with our own.
type InputProps = Omit<ComponentProps<"input">, "size"> & {
  label: string | null; // always required, for accessibility
  hideLabel?: boolean; // keep the label for screen readers but hide it visually (search fields)
  icon?: ReactNode;
  trailing?: ReactNode; // e.g. a Search button inside the field
  hint?: string; // helper text under the field
  error?: string; // error text under the field; also turns the field red
  size?: keyof typeof sizes;
};

export function Input({
  label,
  hideLabel = false,
  icon,
  trailing,
  hint,
  error,
  size = "md",
  id,
  className,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={hideLabel ? "sr-only" : "text-sm font-semibold text-ink"}
        >
          {label}
        </label>
      )}
      <div
        className={[
          "flex items-center gap-2.5 rounded-xl bg-white px-4",
          "focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand",
          error ? "border border-error" : "border border-line",
          trailing ? "pr-1.5" : "",
        ].join(" ")}
      >
        {icon && (
          <span aria-hidden="true" className="flex shrink-0 text-icon">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [errorId, hintId].filter(Boolean).join(" ") || undefined
          }
          className={`${sizes[size]} w-full min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-icon`}
          {...props}
        />

        {trailing}
      </div>

      {error ? (
        <p id={errorId} className="text-sm font-medium text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-sm text-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
