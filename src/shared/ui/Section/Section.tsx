import { CSSProperties, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  ariaLabelledby: string;
  styles?: CSSProperties;
  id?: string;
  className?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  ariaLabelledby,
  styles,
  id,
  className,
}) => {
  return (
    <section
      aria-labelledby={ariaLabelledby}
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "clamp(540px, 74vh, 820px)",
        position: "relative",
        ...styles,
      }}
      id={id}
      className={className}
    >
      {children}{" "}
    </section>
  );
};

export default Section;
