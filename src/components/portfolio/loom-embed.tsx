import * as loom from '@loomhq/loom-embed';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

type LoomEmbedProps = {
  url: string;
};

export default function LoomEmbed({ url }: LoomEmbedProps) {
  const [embed, setEmbed] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const result = await loom.oembed(url);
      setEmbed(result.html);
    })().then();
  }, [url]);

  if (!embed) return <Skeleton className="w-full aspect-[462/347]" />;
  return <div dangerouslySetInnerHTML={{ __html: embed }} />;
}
