import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import type { NavigationItem } from './header-navigation';
import { TypographyH3 } from '@/components/typography';
import { cn } from '@/lib/utils';

interface HamburgerSheetProps {
  menuItems: NavigationItem[];
  currentPath: string;
}

export default function HamburgerSheet({ menuItems, currentPath }: HamburgerSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon strokeWidth={12} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start gap-6" side="right">
        <a href="/">
          <img src="/logo.svg" alt="Lordly Logo" className="w-auto h-[8vh] aspect-square" />
        </a>
        {menuItems.map((item) => (
          <Button variant="link" asChild key={item.href}>
            <a href={item.href}>
              <TypographyH3
                className={cn({
                  'underline decoration-2': item.href === currentPath,
                })}
              >
                {item.title}
              </TypographyH3>
            </a>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}
