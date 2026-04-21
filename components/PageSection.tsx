import SectionHeading from "@/components/ui/SectionHeading";
import { ReactNode } from "react";

type PageSectionProps = {
  title?: string;
  children: ReactNode;
};

export default function PageSection({
  title,
  children,
}: PageSectionProps) {
  return (
    <section className="mt-8 sm:mt-10">
      {title ? <SectionHeading title={title} /> : null}
      <div className="mt-4 sm:mt-5">{children}</div>
    </section>
  );
}