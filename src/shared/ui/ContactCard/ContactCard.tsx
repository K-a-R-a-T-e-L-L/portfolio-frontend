import { ActionIcon, Card, Group, Stack, Text } from "@mantine/core";
import styles from "./ContactCard.module.css";
import { IconBrandTelegram, IconCopy, IconProps } from "@tabler/icons-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import CopyContactButton from "./CopyContactButton";

interface ContactCardProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  name: string;
  link: string;
  copyText: string;
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
  const { Icon, name, link, copyText } = props;

  return (
    <Card p={0} radius="sm">
      <Stack p={0} pl={3} bg="var(--mantine-color-brandPrimary-9)" gap={0}>
        <Group className={styles.text_top} p="5 10" justify="space-between">
          <Group gap={5}>
            <Icon stroke={1} size={17} />
            <Text fz={{ base: 12, md: 11 }}>{name}</Text>
          </Group>
          <CopyContactButton url={copyText}/>
        </Group>
        <Group
          className={styles.text_bottom}
          p="5 10"
          justify="space-between"
          h={32}
        >
          <Text fz={{ base: 11, md: 12 }}>
            <Link
              className={styles.link}
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={name}
            >
              {link}
            </Link>
          </Text>
        </Group>
      </Stack>
    </Card>
  );
};

export default ContactCard;
