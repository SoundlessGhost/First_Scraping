"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // এটাকে তুমি utility হিসেবে রাখছো ধরে নিচ্ছি

// ✅ AnimatedSpan Component
export const AnimatedSpan = ({ children, delay = 0, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ✅ TypingAnimation Component
export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as = "span",
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const MotionComponent = motion(as);
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

// ✅ Terminal Component
export const Terminal = ({ children, className }) => {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};
