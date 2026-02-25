import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnchorTextProps = {
  children: ReactNode;
};

export default function AnchorText({ children }: AnchorTextProps) {
  return (
    <span
      className={cn(
        'leading-7 not-first:mt-6 font-body text-highlight hover:text-highlight-hover hover:underline decoration-2 underline-offset-4',
      )}
    >
      {children}
    </span>
  );
}
