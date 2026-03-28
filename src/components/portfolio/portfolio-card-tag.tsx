import type { ReactNode } from 'react';
import { AiFillApi } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaDragon, FaJava, FaTerminal } from 'react-icons/fa';
import { GiBearHead } from 'react-icons/gi';
import { GrCycle } from 'react-icons/gr';
import { HiMiniSquare3Stack3D } from 'react-icons/hi2';
import { MdLibraryBooks } from 'react-icons/md';
import { RiFunctions } from 'react-icons/ri';
import {
  SiBun,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGo,
  SiHaskell,
  SiHono,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRender,
  SiRust,
  SiSqlite,
  SiTerraform,
  SiTypescript,
  SiXstate,
} from 'react-icons/si';
import type { PortfolioItemTag } from '@/lib/portfolio';
// Import the enum values as a type-only import won't work for switch cases,
// so we import the module and use it directly
import { PortfolioItemTag as Tag } from '@/lib/portfolio';
import { BadgeChildren } from '../badge-children';
import { Badge } from '../ui/badge';

interface PortfolioCardTagProps {
  tag: PortfolioItemTag;
}

export default function PortfolioCardTag({ tag }: PortfolioCardTagProps) {
  const tagProps = getTagProps(tag);
  return <Badge {...tagProps} variant="secondary" />;
}

function getTagProps(tag: PortfolioItemTag): {
  className?: string;
  children: ReactNode;
} {
  switch (tag) {
    case Tag.GO:
      return {
        children: <BadgeChildren text="Go" iconAfter={<SiGo size={16} className="text-sky-400" />} />,
      };
    case Tag.TYPESCRIPT:
      return {
        children: <BadgeChildren text="TypeScript" iconAfter={<SiTypescript size={16} className="text-blue-600" />} />,
      };
    case Tag.CPP:
      return {
        children: <BadgeChildren text="C++" iconAfter={<SiCplusplus size={16} className="text-blue-400" />} />,
      };
    case Tag.RUST:
      return {
        children: <BadgeChildren text="Rust" iconAfter={<SiRust size={16} className="text-orange-600" />} />,
      };
    case Tag.HASKELL:
      return {
        children: <BadgeChildren text="Haskell" iconAfter={<SiHaskell size={16} className="text-purple-500" />} />,
      };
    case Tag.JAVA:
      return {
        children: <BadgeChildren text="Java" iconAfter={<FaJava size={16} className="text-orange-900" />} />,
      };
    case Tag.REACT:
      return {
        children: <BadgeChildren text="React" iconAfter={<SiReact size={16} className="text-sky-400" />} />,
      };
    case Tag.REACT_NATIVE:
      return {
        children: <BadgeChildren text="React Native" iconAfter={<SiReact size={16} className="text-sky-400" />} />,
      };
    case Tag.NEXTJS:
      return {
        children: <BadgeChildren text="Next.js" iconAfter={<SiNextdotjs size={16} className="text-black" />} />,
      };
    case Tag.REDUX:
      return {
        children: <BadgeChildren text="Redux" iconAfter={<SiRedux size={16} className="text-purple-500" />} />,
      };
    case Tag.XSTATE:
      return {
        children: <BadgeChildren text="XState" iconAfter={<SiXstate size={16} className="text-black" />} />,
      };
    case Tag.ZUSTAND:
      return {
        children: <BadgeChildren text="Zustand" iconAfter={<GiBearHead size={16} className="text-orange-900" />} />,
      };
    case Tag.NODEJS:
      return {
        children: <BadgeChildren text="Node.js" iconAfter={<SiNodedotjs size={16} className="text-green-500" />} />,
      };
    case Tag.EXPRESSJS:
      return {
        children: <BadgeChildren text="Express.js" iconAfter={<SiExpress size={16} className="text-blue-500" />} />,
      };
    case Tag.JAVA_SPRING:
      return {
        children: 'Java Spring',
        className: 'bg-green-300 hover:bg-green-500',
      };
    case Tag.MYSQL:
      return {
        children: <BadgeChildren text="MySQL" iconAfter={<SiMysql size={16} className="text-teal-600" />} />,
      };
    case Tag.POSTGRESQL:
      return {
        children: <BadgeChildren text="PostgreSQL" iconAfter={<SiPostgresql size={16} className="text-blue-800" />} />,
      };
    case Tag.FIREBASE:
      return {
        children: <BadgeChildren text="Firebase" iconAfter={<SiFirebase size={16} className="text-orange-600" />} />,
      };
    case Tag.SQLITE:
      return {
        children: <BadgeChildren text="SQLite" iconAfter={<SiSqlite size={16} className="text-blue-400" />} />,
      };
    case Tag.DOCKER:
      return {
        children: <BadgeChildren text="Docker" iconAfter={<SiDocker size={16} className="text-blue-700" />} />,
      };
    case Tag.REST_API:
      return {
        children: <BadgeChildren text="REST API" iconAfter={<AiFillApi size={16} className="text-orange-500" />} />,
      };
    case Tag.AGILE:
      return {
        children: <BadgeChildren text="Agile" iconAfter={<GrCycle size={16} className="text-emerald-500" />} />,
      };
    case Tag.FULLSTACK:
      return {
        children: <BadgeChildren text="Fullstack" iconAfter={<HiMiniSquare3Stack3D size={16} className="text-orange-500" />} />,
      };
    case Tag.FRONTEND:
      return {
        children: <BadgeChildren text="Frontend" iconAfter={<CgWebsite size={16} className="text-orange-500" />} />,
      };
    case Tag.CLI:
      return {
        children: <BadgeChildren text="CLI" iconAfter={<FaTerminal size={16} className="text-blue-500" />} />,
      };
    case Tag.INTERPRETER:
      return {
        children: <BadgeChildren text="Interpreters" iconAfter={<FaDragon size={16} className="text-red-500" strokeWidth={3} />} />,
      };
    case Tag.LIBRARY:
      return {
        children: <BadgeChildren text="Library" iconAfter={<MdLibraryBooks size={16} className="text-orange-300" />} />,
      };
    case Tag.TERRAFORM:
      return {
        children: <BadgeChildren text="Terraform" iconAfter={<SiTerraform size={16} className="text-purple-400" />} />,
      };
    case Tag.HONO:
      return {
        children: <BadgeChildren text="Hono" iconAfter={<SiHono size={16} className="text-orange-400" />} />,
      };
    case Tag.EFFECTTS:
      return {
        children: <BadgeChildren text="Effect-TS" iconAfter={<RiFunctions size={16} className="text-black-400" />} />,
      };
    case Tag.OPENTELEMETRY:
      return {
        children: <BadgeChildren text="Render" iconAfter={<SiOpentelemetry size={16} className="text-purple-400" />} />,
      };
    case Tag.RENDER:
      return {
        children: <BadgeChildren text="Render" iconAfter={<SiRender size={16} className="text-gray-400" />} />,
      };
    case Tag.BUN:
      return {
        children: <BadgeChildren text="Bun" iconAfter={<SiBun size={16} className="text-[#eab676]" />} />,
      };
  }
}
