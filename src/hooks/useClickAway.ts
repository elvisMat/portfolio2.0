// this hook is used to detect clicks outside of a specific element, inludes bounds check.
import { useEffect, useRef } from "react";

type AnyEvent = MouseEvent | TouchEvent;

export function useClickAway<T extends HTMLElement = HTMLElement>(
  onClickAway: (event: AnyEvent) => void,
  shouldIgnore?: (x: number, y: number, event: AnyEvent) => boolean
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: AnyEvent) {
      const { x, y } =
        "touches" in event && event.touches.length
          ? {
              x: event.touches[0].clientX,
              y: event.touches[0].clientY,
            }
          : {
              x: (event as MouseEvent).clientX,
              y: (event as MouseEvent).clientY,
            };

      if (shouldIgnore?.(x, y, event)) {
        return;
      }

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
  }, [onClickAway, shouldIgnore]);

  return ref;
}
