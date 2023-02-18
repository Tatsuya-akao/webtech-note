import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import s from "@/styles/components/layout/theme-toggle.module.scss";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        className={`${s.btn} ${resolvedTheme === "dark" && s.dark}`}
      >
        <span className={s.icons}>
          <MdLightMode />
          <MdDarkMode />
        </span>
      </button>
    </>
  );
}
