import type { ComponentPropsWithoutRef } from 'react';
import AnchorText from './typography/anchor-text';

export default function MdxAnchor({ href, children, ...rest }: ComponentPropsWithoutRef<'a'>) {
  if (href && (href.startsWith('/') || href.startsWith('#'))) {
    return (
      <a href={href} {...rest}>
        <AnchorText>{children}</AnchorText>
      </a>
    );
  }
  return (
    <a href={href} target="_blank" {...rest}>
      <AnchorText>{children}</AnchorText>
    </a>
  );
}
