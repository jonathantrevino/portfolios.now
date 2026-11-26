import { TopWordmark } from "../../components/Wordmark";

export default function SubmitPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopWordmark />
      <div className="pt-12 pb-24 px-6">
        <div className="pt-10 max-w-150 mx-auto">{children}</div>
      </div>
    </div>
  );
}
