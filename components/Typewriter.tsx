"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  roles: string[];
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  roles,
  prefix = "fi_",
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const currentRole = roles[roleIndex % roles.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="typewriter-container">
      {prefix && <span className="typewriter-prefix">{prefix} </span>}
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor">_</span>
    </div>
  );
}
