/** @jsxImportSource @emotion/react */
import { jsx, css, Global, ClassNames } from "@emotion/react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      css={{ padding: "0 20px", marginBottom: "20px" }}
      className={className}
    >
      {children}
    </section>
  );
};

export default Section;
