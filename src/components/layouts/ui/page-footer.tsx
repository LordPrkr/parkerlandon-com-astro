import type { ComponentType } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const ICON_LINKS = [
  { Icon: Github, href: 'https://github.com/LordPrkr' },
  { Icon: Twitter, href: 'https://twitter.com/LordPrkr' },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/parkerlandon',
  },
  { Icon: FaYoutube, href: 'https://www.youtube.com/@prkrlndn' },
];

export default function PageFooter() {
  return (
    <footer className="flex flex-row items-center justify-between w-full h-[vh-8] pt-16">
      <h4 className="font-body text-muted-foreground">Parker Landon &copy; {new Date().getFullYear()}</h4>
      <div className="flex flex-row items-center justify-center gap-1.5">
        {ICON_LINKS.map(({ Icon, href }) => (
          <IconLink Icon={Icon} href={href} key={href} />
        ))}
      </div>
    </footer>
  );
}

type IconLinkProps = {
  Icon: ComponentType<{ className?: string }>;
  href: string;
};

function IconLink({ Icon, href }: IconLinkProps) {
  return (
    <a href={href} target="_blank">
      <Icon className="h-7 w-auto text-muted-foreground hover:text-foreground" />
    </a>
  );
}
