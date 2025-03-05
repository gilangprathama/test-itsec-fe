import React from "react";
import { cn } from "../lib/utils";

type CapsuleVariant = "be" | "fe" | "design";

const variantStyles: Record<CapsuleVariant, string> = {
  be: "bg-green-100 text-green-700",
  fe: "bg-purple-100 text-purple-700",
  design: "bg-gray-100 text-gray-700",
};

interface CapsuleProps {
  variant: CapsuleVariant;
}

function Capsule({ variant }: CapsuleProps) {
  const text = variant === "be" ? "Backend" : variant === "fe" ? "Frontend" : "Design";

  return (
    <span className={cn("px-2 py-1 rounded-[6px] text-xs font-semibold", variantStyles[variant])}>
      {text}
    </span>
  );
}

export default Capsule;
