"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ logo = "fikri." }: { logo?: string }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading" className={hide ? "hide" : ""}>
      <div className="load-text">{logo}</div>
      <div className="load-bar-wrap">
        <div className="load-bar-fill"></div>
      </div>
      <div className="load-pct">LOADING</div>
    </div>
  );
}
