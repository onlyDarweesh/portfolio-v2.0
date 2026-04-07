"use client";

import { useState, useEffect } from "react";

interface TypeAnimationProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypeAnimation({
  strings,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: TypeAnimationProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
        if (currentText.length === currentString.length) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="relative">
      {currentText}
      <span className="inline-block w-[2px] h-[1.1em] ml-0.5 bg-tokyo-blue/60 animate-pulse-slow align-text-bottom" />
    </span>
  );
}
