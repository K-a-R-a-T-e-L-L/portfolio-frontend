import { Link } from "@/shared/lib/i18n/navigation";
import styles from "./Brand.module.css";
import { Image } from "@mantine/core";
import { MEDIA } from "@/shared/lib/media";
import { Locale } from "@/shared/lib/i18n/routing";

const Brand = ({ locale }: { locale: Locale }) => {
  return (
    <Link href="#hero-section" locale={locale} className={styles.brand}>
      <Image src={MEDIA.images.logo.src} w={50} h={50} />
      <span className={styles.brand__text}>
        <span className={styles.brand__focus}>P</span>ortfolio
      </span>
    </Link>
  );
};

export default Brand;
