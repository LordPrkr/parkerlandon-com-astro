import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface TypographyProps {
  children?: ReactNode;
  className?: string;
}

export function TypographyH1({ children }: TypographyProps) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>;
}

export function TypographyH2({ children }: TypographyProps) {
  return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-heading font-medium tracking-tight first:mt-0">{children}</h2>;
}

export function TypographyH3({ children, className }: TypographyProps) {
  return <h3 className={cn('scroll-m-20 text-2xl font-medium font-heading tracking-tight mt-8', className)}>{children}</h3>;
}

export function TypographyH4({ children, className }: TypographyProps) {
  return <h4 className={cn('scroll-m-20 text-xl font-medium font-heading tracking-tight mt-8', className)}>{children}</h4>;
}

export function TypographyP({ children }: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-4 font-body">{children}</p>;
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic font-body">{children}</blockquote>;
}

export function TypographyUL({ children }: TypographyProps) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2 font-body">{children}</ul>;
}

export function TypographyOL({ children }: TypographyProps) {
  return <ul className="my-6 ml-6 list-decimal [&>li]:mt-2 font-body">{children}</ul>;
}

export function TypographyLead({ children }: TypographyProps) {
  return <p className="text-xl text-muted-foreground font-body">{children}</p>;
}
