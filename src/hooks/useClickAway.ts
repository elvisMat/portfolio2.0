import { useEffect, useRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export function useClickAway<T extends HTMLElement = HTMLElement>(
  onClickAway: (event: AnyEvent) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: AnyEvent) {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) {
        onClickAway(event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClickAway]);

  return ref;
}
