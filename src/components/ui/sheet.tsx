import { DrawerPreview as SheetPrimitive } from '@base-ui/react/drawer';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

type Side = 'top' | 'bottom' | 'left' | 'right';

const SWIPE_DIRECTION_MAP: Record<Side, 'up' | 'down' | 'left' | 'right'> = {
  top: 'up',
  bottom: 'down',
  left: 'left',
  right: 'right',
};

const SheetContext = React.createContext<{ side: Side }>({ side: 'right' });

interface SheetProps {
  side?: Side;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Sheet({ side = 'right', children, ...props }: SheetProps) {
  const contextValue = React.useMemo(() => ({ side }), [side]);
  return (
    <SheetContext.Provider value={contextValue}>
      <SheetPrimitive.Root swipeDirection={SWIPE_DIRECTION_MAP[side]} {...props}>
        {children}
      </SheetPrimitive.Root>
    </SheetContext.Provider>
  );
}

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

function SheetOverlay({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-black/80 transition-opacity duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

const SIDE_POSITION: Record<Side, string> = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
};

const SIDE_TRANSFORM: Record<Side, string> = {
  top: '[transform:translateY(var(--drawer-swipe-movement-y))] data-[starting-style]:[transform:translateY(-100%)] data-[ending-style]:[transform:translateY(-100%)]',
  bottom:
    '[transform:translateY(var(--drawer-swipe-movement-y))] data-[starting-style]:[transform:translateY(100%)] data-[ending-style]:[transform:translateY(100%)]',
  left: '[transform:translateX(var(--drawer-swipe-movement-x))] data-[starting-style]:[transform:translateX(-100%)] data-[ending-style]:[transform:translateX(-100%)]',
  right:
    '[transform:translateX(var(--drawer-swipe-movement-x))] data-[starting-style]:[transform:translateX(100%)] data-[ending-style]:[transform:translateX(100%)]',
};

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Popup> {}

function SheetContent({ className, children, ...props }: SheetContentProps) {
  const { side } = React.useContext(SheetContext);
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Viewport className="fixed inset-0 z-50">
        <SheetPrimitive.Popup
          className={cn(
            'fixed z-50 bg-background shadow-lg',
            'transition-transform duration-300 ease-in-out',
            SIDE_POSITION[side],
            SIDE_TRANSFORM[side],
          )}
          {...props}
        >
          <SheetPrimitive.Content className={cn('gap-4 p-6', className)}>
            {children}
            <SheetPrimitive.Close className="absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          </SheetPrimitive.Content>
        </SheetPrimitive.Popup>
      </SheetPrimitive.Viewport>
    </SheetPortal>
  );
}

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

function SheetTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>) {
  return <SheetPrimitive.Title className={cn('text-lg font-semibold text-foreground', className)} {...props} />;
}

function SheetDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>) {
  return <SheetPrimitive.Description className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
