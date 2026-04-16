"use client";

import { ActionIcon, Box, Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconDownload, IconFileTypePdf } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import styles from "./FileCard.module.css";

interface FileCardProps {
  name: string;
  mb: string;
  href?: string;
}

const FileCard: React.FC<FileCardProps> = (props) => {
  const { name, mb, href = "/resume_ru.pdf" } = props;
  const [isActive, setIsActive] = useState(false);

  const openFile = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!isActive) return;

    const timeout = setTimeout(() => setIsActive(false), 1000);
    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <Card
      className={styles.card}
      p="md"
      radius="lg"
      w="100%"
      role="link"
      tabIndex={0}
      onClick={openFile}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFile();
        }
      }}
    >
      <Stack gap={10}>
        <Group justify="space-between" wrap="nowrap" gap={12}>
          <Group wrap="nowrap" gap={10} className={styles.fileInfo}>
            <Box className={styles.iconWrap}>
              <IconFileTypePdf size={34} />
            </Box>
            <Title fz={{ base: 15, md: 18 }} order={4} className={styles.fileName}>
              {name}
            </Title>
          </Group>
          <Text fz={{ base: 12, md: 13 }} className={styles.fileSize}>
            {mb}
          </Text>
        </Group>

        <Group wrap="nowrap" w="100%" gap={8} align="center">
          <Box className={`${styles.line} ${isActive ? styles.line_active : ""}`}></Box>
          <ActionIcon
            component="a"
            href={href}
            download
            size="xl"
            radius="sm"
            variant="subtle"
            color="brandPrimary.7"
            aria-label={`Скачать ${name}`}
            className={styles.download}
            onClick={(event) => {
              event.stopPropagation();
              setIsActive(true);
            }}
          >
            <IconDownload size="30" stroke={2} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
};

export default FileCard;
