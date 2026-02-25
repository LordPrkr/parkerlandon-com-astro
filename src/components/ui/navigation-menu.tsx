import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function NavigationMenu({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)} {...props}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
      {...props}
    />
  );
}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-heading transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/70 data-[open]:bg-accent/70',
);

function NavigationMenuTrigger({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger className={cn(navigationMenuTriggerStyle(), 'group', className)} {...props}>
      {children}{' '}
      <ChevronDown className="relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[open]:rotate-180" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>) {
  return <NavigationMenuPrimitive.Content className={cn('left-0 top-0 w-full md:absolute md:w-auto', className)} {...props} />;
}

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
};
