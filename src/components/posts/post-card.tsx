import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { PostMetadata } from '@/lib/types/PostMetadata';
import AnchorText from '../typography/anchor-text';
import { Button } from '../ui/button';
import PostCardTopic from './post-card-topic';

type PostCardProps = {
  post: PostMetadata;
};

export default function PostCard({ post }: PostCardProps) {
  const href = `/posts/${post.slug}`;
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center gap-4 justify-center p-5">
        <div className="flex flex-col gap-2.5">
          <CardTitle>
            <a href={href}>
              <AnchorText>{post.title}</AnchorText>
            </a>
          </CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-1 items-center -mx-2">
        {post.topics.map((topic) => (
          <PostCardTopic key={topic} topic={topic} />
        ))}
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button variant="link" size="link" render={<a href={href} />}>
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
