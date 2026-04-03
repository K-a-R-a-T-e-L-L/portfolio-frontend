import { useForm } from "@mantine/form";
import { useState } from "react";

const useFeedback = () => {
  const [codeError, setCodeError] = useState<number | null>(null);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      method: "telegram",
      contact: "",
      comment: "",
      consent: true,
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Введите имя (минимум 2 символа)" : null,
      method: (value) => (!value ? "Выберите способ связи" : null),
      contact: (value) =>
        value.trim().length < 3 ? "Укажите контактные данные" : null,
      comment: (value) =>
        value.trim().length < 5
          ? "Добавьте комментарий (минимум 5 символов)"
          : null,
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/feedback`
      : "http://localhost:4000/api/feedback";

    try {
      const res = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        setCodeError(res.status);
        return;
      }

      setCodeError(null);
    } catch (error) {
      setCodeError(500);
    }

    form.reset();
  });

  return { form, onSubmit, codeError, setCodeError };
};

export default useFeedback;
