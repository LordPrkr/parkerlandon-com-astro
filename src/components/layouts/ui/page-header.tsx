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
      <div className="hidden sm:block">
        <HeaderNavigation menuItems={NAVIGATION_MENU_ITEMS} currentPath={currentPath} />
      </div>
      <div className="sm:hidden">
        <HamburgerSheet menuItems={NAVIGATION_MENU_ITEMS} currentPath={currentPath} />
      </div>
    </header>
  );
}
