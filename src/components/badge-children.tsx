interface BadgeChildrenProps {
  text: string;
  iconAfter: React.ReactNode;
}

export function BadgeChildren({ text, iconAfter }: BadgeChildrenProps) {
  return (
    <span className="inline-flex items-center justify-center gap-1">
      {text}
      {iconAfter}
    </span>
  );
}
