"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProp {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProp) => {
  return (
    <Button variant="link" className="w-full font-normal" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
