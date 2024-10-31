import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex *:basis-1/2 gap-8 xl:gap-16 flex-col md:flex-row">
      {children}
    </section>
  );
};

export default Section;
