"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById("toggle-mode");
    const handleToggle = () => {
      document.body.classList.toggle("light-mode");
      document.body.classList.toggle("dark-mode");
      setIsDarkMode((prevMode) => !prevMode);
    };

    toggleButton.addEventListener("click", handleToggle);

    return () => {
      toggleButton.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]"></ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            id="toggle-mode"
            className="absolute top-10 right-10 p-2"
            aria-label="Toggle Light/Dark Mode"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
