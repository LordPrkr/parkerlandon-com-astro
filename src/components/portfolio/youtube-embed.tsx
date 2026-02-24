import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

type YoutubeEmbedProps = {
  embedUrl: string;
  className?: string;
  style?: CSSProperties;
};

export default function YoutubeEmbed({ embedUrl, className, style }: YoutubeEmbedProps) {
  return (
    <iframe
      className={cn('w-full aspect-video', className)}
      style={style}
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
