import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

interface HeaderNavigationProps {
  menuItems: NavigationItem[];
  currentPath: string;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export default function HeaderNavigation({
  menuItems,
  currentPath,
}: HeaderNavigationProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
              href={item.href}
              className={navigationMenuTriggerStyle()}
              active={currentPath === item.href}
            >
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
