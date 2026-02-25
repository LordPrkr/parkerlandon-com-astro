import type { PortfolioItem } from '@/lib/portfolio';
import { TypographyUL } from '../typography';
import AnchorText from '../typography/anchor-text';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import LoomEmbed from './loom-embed';
import YoutubeEmbed from './youtube-embed';

interface PortfolioCardDetailsButtonProps {
  item: PortfolioItem;
}

export default function PortfolioCardDetailsDialog({ item }: PortfolioCardDetailsButtonProps) {
  return (
    <Dialog>
      <DialogTrigger render={<Button size="sm" />}>View Details</DialogTrigger>
      <DialogContent className="overflow-y-scroll">
        <DialogHeader className="gap-2">
          <DialogTitle>{item.title}</DialogTitle>
          {item.loomUrl && <LoomEmbed url={item.loomUrl} />}
          {item.youtubeEmbedUrl && <YoutubeEmbed embedUrl={item.youtubeEmbedUrl} />}
          <DialogDescription className="font-body">{item.longDescription}</DialogDescription>
          <TypographyUL>
            {item.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  <AnchorText>{link.text}</AnchorText>
                </a>
              </li>
            ))}
          </TypographyUL>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary" size="sm" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
