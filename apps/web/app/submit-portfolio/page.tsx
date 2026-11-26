"use client";

import { Link } from "lucide-react";
import { Input } from "../../components/Input";
import { StepIndicator } from "../../components/StepIndicator";
import { Button } from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

type StepHeaderProps = {
  title: string;
  description: string;
};

type SubmitPortfolioFormFields = {
  url: string;
};

type SubmitStepProps = {
  onNext: () => void;
  onBack?: () => void;
};

function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className="space-y-3.5">
      <h1 className="font-heading font-semibold text-[48px] text-ink text-hero text-balance">
        {title}
      </h1>
      <p className="font-sans text-muted">{description}</p>
    </div>
  );
}

function StepSubmitPortfolio({ onNext }: SubmitStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitPortfolioFormFields>();
  const onSubmit: SubmitHandler<SubmitPortfolioFormFields> = async (data) => {
    console.log(data);
    // TODO: send url to api to validate then initiate scanning processing
    onNext();
  };

  return (
    <div>
      <StepHeader
        title="Submit your portfolio"
        description="Paste the link to your portfolio. We scan it and fill in your details, and you can check everything before it goes live."
      />
      <form className="pt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2.5">
          <Input
            {...register("url", {
              required: "URL is required",
              pattern: {
                value:
                  /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?::\d+)?(?:\/[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)?$/,
                message:
                  "Please enter a valid URL (e.g., https://example.com or example.com)",
              },
            })}
            error={errors.url?.message ?? ""}
            label="Portfolio URL"
            icon={<Link size={18} />}
            placeholder="https://www.example.com or example.com"
            className="flex-1"
          />
          <Button type="submit" className="relative top-7.5">
            Submit Portfolio
          </Button>
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
