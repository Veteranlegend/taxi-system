"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ScrollSaveLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollSaveLink({ href, className, children }: ScrollSaveLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("homeScrollY", String(window.scrollY));
    router.push(href);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
