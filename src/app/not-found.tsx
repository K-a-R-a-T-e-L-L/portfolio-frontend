import RootProvider from "@/processes/providers/RootProvider";
import NotFoundPage from "@/widgets/pages/NotFoundPage/NotFoundPage";
export default function RootNotFound() {
  return (
    <RootProvider locale="ru">
      <NotFoundPage locale="ru" homeHref="/ru" />
    </RootProvider>
  );
}
