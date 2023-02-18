import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import s from "@/styles/components/blog/one-off/theme-switch.module.scss";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  console.log("theme: ", theme);
  console.log("resolvedTheme: ", resolvedTheme);

  return (
    <div className={s.component}>
      <span className={s.demo}>Live Demo</span>
      <div className={s.wrap}>
        <p className={s.theme}>Current theme: {resolvedTheme}</p>
        <button
          className={s.btn}
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          <span>Toggle Theme</span>
        </button>
      </div>
    </div>
  );
}
