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
    <div
      className={`min-h-screen ${isDarkMode ? "dark-mode" : "light-mode"} mx-10 my-5`}
    >
      <header className="flex justify-between items-center mb-16 mt--10">
        <nav className="hidden sm:flex space-x-6 text-lg font-medium">
          <a href="#" className="text-green-500">
            Home
          </a>
          <a href="#">Gallery</a>
          <a href="#">Shop</a>
        </nav>

        <button
          id="toggle-mode"
          className="p-2 text-xl"
          aria-label="Toggle Light/Dark Mode"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </header>

      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/5 backdrop-filter backdrop-blur-lg shadow p-4 py-6 z-10">
        <div className="flex justify-around text-lg font-medium">
          <a href="#" className="text-green-500">
            Home
          </a>
          <a href="#">Gallery</a>
          <a href="#">Shop</a>
        </div>
      </nav>
      <section className="text-center mb-20">
        <h1 className="text-4xl font-black text-gray-800">
          Unklab <span className="text-green-500">Duality</span>
        </h1>
        <p className="text-lg text-gray-500">#UnleashTheDuality</p>
      </section>

      <section className="flex justify-center flex-col sm:flex-row items-center gap-8 mb-16">
        <div className="w-48 h-48 mr-14">
          <Image src="/Plus.png" alt="Plus Icon" width={420} height={420} />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad min ...
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          FAQs
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="font-medium text-gray-800 cursor-pointer">
              What is the purpose of this community?
            </summary>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="font-medium text-gray-800 cursor-pointer">
              Is it only for UNKLAB Computer Science students?
            </summary>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
