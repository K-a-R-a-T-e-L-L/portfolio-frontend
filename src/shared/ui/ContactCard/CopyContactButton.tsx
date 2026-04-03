"use client";
import { ActionIcon } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

interface CopyContactButtonProps {
  url: string;
}

const CopyContactButton: React.FC<CopyContactButtonProps> = ({ url }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 1500);
    } catch (error) {
      setIsCopy(false);
    }
  };

  return (
    <ActionIcon
      color={
        isCopy
          ? "var(--mantine-color-brandPrimary-4)"
          : "var(--mantine-color-brandPrimary-2)"
      }
      opacity={isCopy ? 1 : 0.6}
      p={2}
      radius="sm"
      variant="subtle"
      size="sm"
      onClick={handleCopy}
    >
      {isCopy ? <IconCheck /> : <IconCopy />}
    </ActionIcon>
  );
};

export default CopyContactButton;
