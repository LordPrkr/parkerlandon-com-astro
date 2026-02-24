import type { PageMetadata } from './PageMetadata';
import type { PostTopic } from './PostTopic';

export interface PostMetadata extends PageMetadata {
  topics: PostTopic[];
  postnum: string;
  slug: string;
  url: string;
}
