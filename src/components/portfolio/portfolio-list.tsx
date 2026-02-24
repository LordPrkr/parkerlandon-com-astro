import type { PortfolioItem } from "@/lib/portfolio";
import PortfolioCard from "./portfolio-card";

interface PortfolioListProps {
  items: PortfolioItem[];
}

export default function PortfolioList({ items }: PortfolioListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
      {items.map((item) => (
        <PortfolioCard key={item.title} item={item} />
      ))}
    </div>
  );
}
