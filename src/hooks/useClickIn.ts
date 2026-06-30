// this hook is used to detect clicks inside a specific element.
import { useEffect, useRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export function useClickIn<T extends HTMLElement = HTMLElement>(
  onClickIn: (event: AnyEvent) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickInside(event: AnyEvent) {
      const el = ref.current;
      if (el && el.contains(event.target as Node)) {
        onClickIn(event);
      }
    }

    document.addEventListener("mousedown", handleClickInside);
    document.addEventListener("touchstart", handleClickInside);

    return () => {
      document.removeEventListener("mousedown", handleClickInside);
      document.removeEventListener("touchstart", handleClickInside);
    };
  }, [onClickIn]);

  return ref;
}
