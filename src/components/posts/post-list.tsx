import type { PostMetadata } from "@/lib/types/PostMetadata";
import PostCard from "./post-card";

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="max-w-4xl space-y-8">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
