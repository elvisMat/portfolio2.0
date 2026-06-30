import { useLocalStorage } from "@/hooks/use-localstorage";
import { useEventListener } from "@/hooks/useEventListener";
import React from "react";
const accents = {
  blue: "bg-blue-accent",
  green: "bg-green-accent",
  pink: "bg-pink-accent",
  purple: "bg-purple-accent",
};
const darkBaseColors = {
  blue: "bg-dark-base",
  green: "bg-green-dark-base",
  pink: "bg-pink-dark-base",
  purple: "bg-purple-dark-base",
};
const darkHighlightColors = {
  blue: "bg-dark-highlight",
  green: "bg-green-dark-highlight",
  pink: "bg-pink-dark-highlight",
  purple: "bg-purple-dark-highlight",
};
const texts = {
  blue: "text-blue-accent",
  green: "text-green-accent",
  pink: "text-pink-accent",
  purple: "text-purple-accent",
};
const hoveredAccents={
  'blue':'hover:bg-blue-accent',
  'green':'hover:bg-green-accent',
  'pink':'hover:bg-pink-accent',
  'purple':'hover:bg-purple-accent',
}
const borders={
  'blue':'border-blue-accent',
  'green':'border-green-accent',
  'pink':'border-pink-accent',
  'purple':'border-purple-accent',
}
const focusWithinRings={
  'blue':'focus-within:border-blue-accent ring-blue-accent',
  'green':'focus-within:border-green-accent ring-green-accent',
  'pink':'focus-within:border-pink-accent ring-pink-accent',
  'purple':'focus-within:border-purple-accent ring-purple-accent',
}

export function useThemeColors() {
  const { storedValue } = useLocalStorage<string>({
    key: "accentColor",
    initialValue: "blue",
  });
  const [theme, setTheme] = React.useState<string>(storedValue);
  useEventListener("app:accentColorChange", (event) => {
    const accent = event.detail.accent;
    setTheme(accent);
  });

  const accent = accents[theme as keyof typeof accents] ?? accents.blue;
  const darkBase =
    darkBaseColors[theme as keyof typeof darkBaseColors] ?? darkBaseColors.blue;
  const darkHighlight =
    darkHighlightColors[theme as keyof typeof darkHighlightColors] ??
    darkHighlightColors.blue;
  const textColor = texts[theme as keyof typeof texts] ?? texts.blue;
  const hoveredAccent = hoveredAccents[theme as keyof typeof hoveredAccents] ?? hoveredAccents.blue;
  const borderColor = borders[theme as keyof typeof borders] ?? borders.blue;
  const focusWithinRing = focusWithinRings[theme as keyof typeof focusWithinRings] ?? focusWithinRings.blue;
  return { accent, darkBase, darkHighlight, textColor, hoveredAccent, borderColor, focusWithinRing };
  //   return { accent, darkBase, darkHighlight };
}
