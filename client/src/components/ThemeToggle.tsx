import React from "react"

enum Color {
    dark = "dark",
    light = "light",
    auto = "auto",
}

type ThemeColor = keyof typeof Color

interface ThemeProps {
    color: ThemeColor,
}

export function getStoredTheme() {
  return localStorage.getItem('theme') as ThemeColor; // ThemeColor || null
};

export const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const getCurrTheme = () => {
    return document.documentElement.getAttribute('data-bs-theme') as ThemeColor;
};

export function setStoredTheme(color: ThemeColor) {
  return localStorage.setItem('theme', color);
};

export function setTheme(color: ThemeColor) {
    document.documentElement.setAttribute('data-bs-theme', color);
};

const ThemeButton = () => {
  const toggleTheme = () => {
    const currTheme = getCurrTheme();
    const storedTheme = getStoredTheme();
    const newTheme = currTheme === "dark" ? "light": "dark";
    console.log("Theme toggle clicked.")
    console.log(`Current theme is ${currTheme}. Stored theme is ${storedTheme}. New theme will be ${newTheme}.`)
    setStoredTheme(newTheme);
    setTheme(newTheme);
  }

  return (
    <div id="theme-toggler">
      <button type="button" onClick={toggleTheme}>
        Theme
      </button>
    </div>
  )
};

export default ThemeButton

/* vim: set ft=typescriptreact : */
