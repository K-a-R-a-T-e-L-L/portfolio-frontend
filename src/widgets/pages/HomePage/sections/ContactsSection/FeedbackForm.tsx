"use client";
import {
  Alert,
  Box,
  Button,
  Group,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import styles from "./ContactsSection.module.css";
import useFeedback from "./useFeedback";
import { IconAlertCircle, IconCircleCheck } from "@tabler/icons-react";
import { _Translator } from "next-intl";

interface FeedbackFormProps {
  title: string;
  placeholderName: string;
  labelName: string;
  labelMethodContact: string;
  placeholderMethodContact: string;
  contactLabel: string;
  commentLabel: string;
  commentPlaceholder: string;
  button: string;
}

const contactMethods = [
  { value: "telegram", label: "Telegram", icon: "/icons/telegram.svg" },
  { value: "whatsapp", label: "WhatsApp", icon: "/icons/whatsapp.svg" },
  { value: "phone", label: "Телефон", icon: "/icons/phone.svg" },
  { value: "email", label: "Email", icon: "/icons/email.svg" },
  { value: "vk", label: "VKontakte", icon: "/icons/vk.svg" },
  { value: "max", label: "MAX", icon: "/icons/max.svg" },
];

const methodMeta = Object.fromEntries(
  contactMethods.map((item) => [item.value, item]),
) as Record<string, (typeof contactMethods)[number]>;

const fieldClassNames = {
  label: styles.formLabel,
  input: styles.formInput,
  error: styles.formError,
  required: styles.formRequired,
};

const FeedbackForm: React.FC<FeedbackFormProps> = (props) => {
  const {
    title,
    placeholderName,
    labelName,
    labelMethodContact,
    placeholderMethodContact,
    contactLabel,
    commentLabel,
    commentPlaceholder,
    button,
  } = props;

  const {
    form,
    onSubmit,
    codeError,
    setCodeError,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  } = useFeedback();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Stack gap={10}>
        <Title
          fz={{ base: 20, md: 24 }}
          order={3}
          className={styles.template_title}
        >
          {title}
        </Title>

        <TextInput
          label={labelName}
          placeholder={placeholderName}
          withAsterisk
          classNames={fieldClassNames}
          key={form.key("name")}
          {...form.getInputProps("name")}
          maxLength={120}
        />

        <Select
          label={labelMethodContact}
          placeholder={placeholderMethodContact}
          data={contactMethods.map(({ value, label }) => ({ value, label }))}
          classNames={{
            ...fieldClassNames,
            dropdown: styles.formDropdown,
            option: styles.formOption,
          }}
          renderOption={({ option }) => {
            const meta = methodMeta[option.value];

            return (
              <Group gap={8} wrap="nowrap">
                <Box
                  component="img"
                  src={meta?.icon ?? "/icons/email.svg"}
                  alt={option.label}
                  w={16}
                  h={16}
                />
                <Text fz={14}>{option.label}</Text>
              </Group>
            );
          }}
          withAsterisk
          key={form.key("method")}
          {...form.getInputProps("method")}
        />

        <TextInput
          label={contactLabel}
          placeholder="@username / +7... / email"
          withAsterisk
          classNames={fieldClassNames}
          key={form.key("contact")}
          {...form.getInputProps("contact")}
          maxLength={500}
        />

        <Box pos="relative">
          <Textarea
            label={commentLabel}
            placeholder={commentPlaceholder}
            minRows={4}
            autosize
            withAsterisk
            classNames={fieldClassNames}
            key={form.key("comment")}
            {...form.getInputProps("comment")}
            maxLength={2000}
          />
          <span className={styles.chars}>
            {(form.values.comment || "").length} / 2000
          </span>
        </Box>
        <Button
          type="submit"
          className={styles.submitButton}
          loading={isSubmitting}
        >
          {button}
        </Button>
        {isSuccess ? (
          <Alert
            icon={<IconCircleCheck size={22} />}
            title="Готово!"
            color="teal"
            variant="light"
            withCloseButton
            onClose={() => setIsSuccess(false)}
          >
            Заявка успешно отправлена. Я свяжусь с вами в ближайшее время.
          </Alert>
        ) : null}
        {codeError == 500 ? (
          <Alert
            icon={<IconAlertCircle size={30} />}
            bd="1px solid red"
            title="Ошибка!"
            c="red"
            variant="outline"
            withCloseButton
            onClose={() => setCodeError(null)}
            color="red"
          >
            Что-то пошло не так. Пожалуйста, попробуйте позже.
          </Alert>
        ) : codeError == 400 ? (
          <Alert
            icon={<IconAlertCircle size={30} />}
            bd="1px solid red"
            title="Ошибка!"
            c="red"
            variant="outline"
            withCloseButton
            onClose={() => setCodeError(null)}
            color="red"
          >
            Проверьте правильность введнных данных.
          </Alert>
        ) : !codeError ? null : (
          <Alert
            icon={<IconAlertCircle size={30} />}
            bd="1px solid red"
            title="Ошибка!"
            c="red"
            variant="outline"
            withCloseButton
            onClose={() => setCodeError(null)}
            color="red"
          >
            Слишком много попыток. Пожалуйста, попробуйте позже.
          </Alert>
        )}
      </Stack>
    </form>
  );
};

export default FeedbackForm;
