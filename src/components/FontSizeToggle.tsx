"use client";

import { useState, useEffect } from "react";

export default function FontSizeToggle() {
  const [fontSize, setFontSize] = useState("text-base");

  useEffect(() => {
    const storedSize = localStorage.getItem("fontSize");
    if (storedSize) {
      setFontSize(storedSize);
      document.documentElement.classList.add(storedSize);
    }
  }, []);

  const changeFontSize = (size: string) => {
    document.documentElement.classList.remove(fontSize);
    document.documentElement.classList.add(size);
    localStorage.setItem("fontSize", size);
    setFontSize(size);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeFontSize("text-sm")}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
      >
        A-
      </button>
      <button
        onClick={() => changeFontSize("text-base")}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
      >
        A
      </button>
      <button
        onClick={() => changeFontSize("text-lg")}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
      >
        A+
      </button>
    </div>
  );
}
