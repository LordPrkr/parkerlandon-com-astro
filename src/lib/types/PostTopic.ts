export enum PostTopic {
  HASKELL = "haskell",
  GO = "go",
  FUNCTIONAL_PROGRAMMING = "functional programming",
  PARSERS = "parsers",
  INTERPRETERS = "interpreters",
  TESTING = "testing",
  FULLSTACK = "fullstack",
  TERRAFORM = "terraform",
  INFRASTRUCTURE = "infrastructure",
  PATTERNS = "patterns",
  UNKNOWN = "unknown",
}

const topics = {
  haskell: PostTopic.HASKELL,
  go: PostTopic.GO,
  "functional programming": PostTopic.FUNCTIONAL_PROGRAMMING,
  parsers: PostTopic.PARSERS,
  interpreters: PostTopic.INTERPRETERS,
  testing: PostTopic.TESTING,
  terraform: PostTopic.TERRAFORM,
  infrastructure: PostTopic.INFRASTRUCTURE,
  fullstack: PostTopic.FULLSTACK,
  patterns: PostTopic.PATTERNS,
} as const;

type Topic = keyof typeof topics;

export function toPostTopic(topic: string): PostTopic {
  return topics[topic as Topic] ?? PostTopic.UNKNOWN;
}
