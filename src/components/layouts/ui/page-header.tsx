import { useBreakpoint } from '@/lib/useBreakpoint';
import HamburgerSheet from './hamburger-sheet';
import HeaderNavigation, { type NavigationItem } from './header-navigation';
import LogoHeading from './logo-heading';

const NAVIGATION_MENU_ITEMS: NavigationItem[] = [
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Posts', href: '/posts' },
  { title: 'About', href: '/about' },
];

export default function PageHeader() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <LogoHeading />
      <Navigation currentPath={currentPath} />
    </header>
  );
}

function Navigation({ currentPath }: { currentPath: string }) {
  const isSm = useBreakpoint('sm');
  if (isSm === null) return null;
  if (!isSm) return <HamburgerSheet menuItems={NAVIGATION_MENU_ITEMS} currentPath={currentPath} />;
  return <HeaderNavigation menuItems={NAVIGATION_MENU_ITEMS} currentPath={currentPath} />;
}
