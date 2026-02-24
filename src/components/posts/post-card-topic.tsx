import { PostTopic } from "@/lib/types/PostTopic";
import { Badge } from "../ui/badge";
import { SiGo, SiHaskell, SiTerraform } from "react-icons/si";
import { TbLambda } from "react-icons/tb";
import { HiBeaker, HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaDragon, FaTree } from "react-icons/fa";
import { MdSettingsSystemDaydream, MdPattern } from "react-icons/md";
import { BadgeChildren } from "../badge-children";

interface PostCardTagProps {
  topic: PostTopic;
}

export default function PostCardTopic({ topic }: PostCardTagProps) {
  const topicProps = getTopicProps(topic);
  return <Badge {...topicProps} variant="secondary" />;
}

function getTopicProps(tag: PostTopic) {
  switch (tag) {
    case PostTopic.HASKELL:
      return {
        children: (
          <BadgeChildren
            text="Haskell"
            iconAfter={<SiHaskell size={16} className="text-purple-500" />}
          />
        ),
      };
    case PostTopic.FUNCTIONAL_PROGRAMMING:
      return {
        children: (
          <BadgeChildren
            text="Functional Programming"
            iconAfter={
              <TbLambda size={16} className="text-sky-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.PARSERS:
      return {
        children: (
          <BadgeChildren
            text="Parsers"
            iconAfter={
              <FaTree size={16} className="text-emerald-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.INTERPRETERS:
      return {
        children: (
          <BadgeChildren
            text="Interpreters"
            iconAfter={
              <FaDragon size={16} className="text-red-500" strokeWidth={3} />
            }
          />
        ),
      };
    case PostTopic.TESTING:
      return {
        children: (
          <BadgeChildren
            text="Testing"
            iconAfter={<HiBeaker size={16} className="text-emerald-600" />}
          />
        ),
      };
    case PostTopic.FULLSTACK:
      return {
        children: (
          <BadgeChildren
            text="Fullstack"
            iconAfter={
              <HiMiniSquare3Stack3D size={16} className="text-orange-500" />
            }
          />
        ),
      };
    case PostTopic.TERRAFORM:
      return {
        children: (
          <BadgeChildren
            text="Terraform"
            iconAfter={<SiTerraform size={16} className="text-purple-400" />}
          />
        ),
      };
    case PostTopic.INFRASTRUCTURE:
      return {
        children: (
          <BadgeChildren
            text="Infrastructure"
            iconAfter={
              <MdSettingsSystemDaydream size={16} className="text-amber-500" />
            }
          />
        ),
      };
    case PostTopic.GO:
      return {
        children: (
          <BadgeChildren
            text="Go"
            iconAfter={<SiGo size={16} className="text-sky-400" />}
          />
        ),
      };
    case PostTopic.PATTERNS:
      return {
        children: (
          <BadgeChildren
            text="Patterns"
            iconAfter={<MdPattern size={16} className="text-orange-400" />}
          />
        ),
      };
    case PostTopic.UNKNOWN:
      return {
        children: "SET A POST TOPIC",
        className: "bg-red-900",
      };
  }
}
