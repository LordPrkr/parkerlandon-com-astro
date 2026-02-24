import type { PortfolioItem } from '@/lib/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import PortfolioCardTag from './portfolio-card-tag';
import PortfolioCardDetailsDialog from './portfolio-card-details-dialog';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card className="flex flex-col justify-between gap-4">
      <CardHeader className="flex flex-row items-center gap-4 pb-0">
        <span aria-label={`${item.title} Emoji`} role="img" className="text-6xl">
          {item.emoji}
        </span>
        <div className="flex flex-col gap-1">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.shortDescription}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-1 items-center pb-0 -mx-2">
        {item.tags.map((tag) => (
          <PortfolioCardTag key={tag} tag={tag} />
        ))}
      </CardContent>
      <CardFooter>
        <PortfolioCardDetailsDialog item={item} />
      </CardFooter>
    </Card>
  );
}
