import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-heading font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-highlight text-primary-foreground hover:bg-highlight-hover',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-highlight-secondary text-secondary-foreground hover:bg-highlight-secondary-hover',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-highlight underline-offset-4 hover:underline hover:text-highlight-hover decoration-2',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-2',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        link: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  render?: React.ReactElement<{ className?: string }>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, render, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  if (render) {
    return React.cloneElement(render, {
      ...props,
      className: cn(classes, render.props.className),
      ref,
    } as React.Attributes & { className?: string; ref?: typeof ref });
  }
  return <button className={classes} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
