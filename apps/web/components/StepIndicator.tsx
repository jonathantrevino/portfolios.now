type StepIndicatorProps = {
  steps: number;
  currentStep: number;
  label: string;
};
export function StepIndicator({
  steps,
  currentStep,
  label,
}: StepIndicatorProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-1">
        {Array.from({ length: steps }).map((_, index) => (
          <div
            key={index}
            className={`${index === currentStep ? "w-7 bg-brand" : "w-2 bg-line"} h-2 rounded-full`}
          ></div>
        ))}
      </div>
      <p className="font-sans text-[14px] text-muted">{label}</p>
    </div>
  );
}
