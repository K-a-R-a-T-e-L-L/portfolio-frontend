"use client";

import { ActionIcon } from "@mantine/core";
import { IconCheck, IconCopy, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

interface ProjectLinkActionsProps {
  url: string;
  iconClassName?: string;
}

const ProjectLinkActions: React.FC<ProjectLinkActionsProps> = ({
  url,
  iconClassName,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <ActionIcon
        radius="md"
        variant="light"
        c="brandSecondaryA.3"
        onClick={handleCopy}
        title={copied ? "Copied" : "Copy link"}
        className={iconClassName}
      >
        {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
      </ActionIcon>

      <ActionIcon
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        radius="md"
        variant="light"
        c="brandSecondaryA.3"
        title="Open project"
        className={iconClassName}
      >
        <IconExternalLink size={18} />
      </ActionIcon>
    </>
  );
};

export default ProjectLinkActions;
