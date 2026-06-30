import { useCallback } from "react";

export function useDispatchCustomEvent() {
  const dispatch = useCallback(
    <K extends keyof WindowEventMap>(
      eventName: K,
      // Extracts the inner type of CustomEvent<DetailType>
      detail: WindowEventMap[K] extends CustomEvent<infer D> ? D : never
    ) => {
      const event = new CustomEvent(eventName, { detail });
      window.dispatchEvent(event);
    },
    []
  );

  return dispatch;
}
