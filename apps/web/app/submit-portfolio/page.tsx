"use client";

import { Link } from "lucide-react";
import { Input } from "../../components/Input";
import { StepIndicator } from "../../components/StepIndicator";
import { Button } from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";

type StepHeaderProps = {
  title: string;
  description: string;
};

type SubmitStepProps = {
  onNext: () => void;
  onBack?: () => void;
};

function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className="space-y-3.5">
      <h1 className="font-heading font-semibold text-[48px] text-ink text-hero text-balance">
        Submit your portfolio
      </h1>
      <p className="font-sans text-muted">
        Paste the link to your portfolio. We scan it and fill in your details,
        and you can check everything before it goes live.
      </p>
    </div>
  );
}

function StepSubmitPortfolio({ onNext }: SubmitStepProps) {
  function handleSubmit(e: any) {
    e.preventDefault();
    onNext();
  }
  return (
    <div>
      <StepHeader
        title="Submit your portfolio"
        description="Paste the link to your portfolio. We scan it and fill in your details, and you can check everything before it goes live."
      />
      <form className="pt-8" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-end gap-2.5">
          <Input
            label="Portfolio URL"
            icon={<Link size={18} />}
            placeholder="https://www.example.com or example.com"
            className="flex-1"
          />
          <Button type="submit">Submit Portfolio</Button>
        </div>
      </form>
    </div>
  );
}

export default function page() {
  const steps = [
    <StepSubmitPortfolio onNext={() => setCurrentStep(currentStep + 1)} />,
    <StepSubmitPortfolio onNext={() => setCurrentStep(currentStep + 1)} />,
    <StepSubmitPortfolio onNext={() => setCurrentStep(currentStep + 1)} />,
  ];
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div className="space-y-4">
      <StepIndicator
        steps={steps.length}
        currentStep={currentStep}
        label="Paste Your Link"
      />
      {steps[currentStep]}
    </div>
  );
}
