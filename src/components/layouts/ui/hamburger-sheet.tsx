import { Menu } from 'lucide-react';
import { TypographyH3 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import type { NavigationItem } from './header-navigation';

interface HamburgerSheetProps {
  menuItems: NavigationItem[];
  currentPath: string;
}

export default function HamburgerSheet({ menuItems, currentPath }: HamburgerSheetProps) {
  return (
    <Sheet side="right">
      <SheetTrigger render={<Button variant="ghost" size="icon" />}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start gap-6">
        <a href="/">
          <img src="/logo.svg" alt="Lordly Logo" className="w-auto h-[8vh] aspect-square" />
        </a>
        {menuItems.map((item) => (
          // biome-ignore lint/a11y/useAnchorContent: children passed via render prop
          <Button variant="link" render={<a href={item.href} />} key={item.href}>
            <TypographyH3
              className={cn({
                'underline decoration-2': item.href === currentPath,
              })}
            >
              {item.title}
            </TypographyH3>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}
