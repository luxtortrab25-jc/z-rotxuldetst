'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import * as React from "react";

export const TextHoverEffect = ({
  text,
  as = "div",
  className,
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const Tag = as;

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("flex flex-wrap", className)}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ color: "hsl(var(--primary))" }}
          animate={{
            color: hovered ? "hsl(var(--primary), 0.8)" : "hsl(var(--primary))",
          }}
          transition={{
            duration: 0.1,
            delay: i * 0.03,
            ease: "linear",
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </Tag>
  );
};
