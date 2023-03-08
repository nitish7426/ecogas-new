import React, { useEffect, useState } from "react";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "system";
  });

  const buttons = [
    {
      text: "system",
      icon: <BiDesktop size={25} />,
    },
    {
      text: "light",
      icon: <BiSun size={25} />,
    },
    {
      text: "dark",
      icon: <BiMoon size={25} />,
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      });
  }, [theme]);
  return (
    <div className="w-fit py-2 px-3 rounded-md mx-auto space-x-2 bg-slate-100 dark:bg-slate-800 leading-none h-fit">
      {buttons.map(({ text, icon }) => (
        <button
          className={`hover:text-cyan-500 ${theme === text && "text-cyan-500"}`}
          key={text}
          onClick={() => setTheme(text)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default DarkMode;
