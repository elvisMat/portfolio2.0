import { useState, useCallback } from "react";
import { WindowIds } from "../context/window-context";

// Define allowed window states
export type WindowState = "CLOSED" | "MAXIMIZED" | "MINIMIZED" | "NORMAL";

// Constants for easier reference
const CLOSED: WindowState = "CLOSED";
const MAXIMIZED: WindowState = "MAXIMIZED";
const NORMAL: WindowState = "NORMAL";
const MINIMIZED: WindowState = "MINIMIZED";

// Define allowed transitions from each state
type StateTransitions = {
  [K in WindowState]: Partial<Record<WindowState, () => void>>;
};

// Hook return type
interface UseWindowStateMachineReturn {
  currentState: WindowState;
  transition: (newState: WindowState) => void;
  canTransitionTo: (newState: WindowState) => boolean;
  availableTransitions: WindowState[];
}

export const useWindowStateMachine = (
  initialState: WindowState = CLOSED,
  windowId?: WindowIds,
  onTransition?: (from: WindowState, to: WindowState) => void
): UseWindowStateMachineReturn => {
  const [currentState, setCurrentState] = useState<WindowState>(initialState);

  // Define the state machine transitions
  const stateTransitions: StateTransitions = {
    [CLOSED]: {
      [MAXIMIZED]: () => console.log("Maximizing from CLOSED"),
      [MINIMIZED]: () => console.log("Minimizing from CLOSED"),
      [NORMAL]: () => console.log("Restoring from CLOSED"),
    },
    [MAXIMIZED]: {
      [MINIMIZED]: () => console.log("Minimizing from MAXIMIZED"),
      [NORMAL]: () => console.log("Restoring from MAXIMIZED"),
    },
    [MINIMIZED]: {
      [MAXIMIZED]: () => console.log("Maximizing from MINIMIZED"),
      [NORMAL]: () => console.log("Restoring from MINIMIZED"),
    },
    [NORMAL]: {
      [MAXIMIZED]: () => console.log("Maximizing from NORMAL"),
      [MINIMIZED]: () => console.log("Minimizing from NORMAL"),
      [CLOSED]: () => console.log("Closing from NORMAL"),
    },
  };

  const transition = useCallback(
    (newState: WindowState) => {
      const currentTransitions = stateTransitions[currentState];
      const transitionFn = currentTransitions?.[newState];

      if (transitionFn) {
        transitionFn();
        const previousState = currentState;
        setCurrentState(newState);
        onTransition?.(previousState, newState);
      } else {
        throw new Error(
          `Cannot transition from ${currentState} to ${newState}`
        );
      }
    },
    [currentState, onTransition]
  );

  const canTransitionTo = useCallback(
    (newState: WindowState) => {
      return Boolean(stateTransitions[currentState]?.[newState]);
    },
    [currentState]
  );

  const availableTransitions = useCallback(() => {
    return Object.keys(stateTransitions[currentState] || {}) as WindowState[];
  }, [currentState]);

  return {
    currentState,
    transition,
    canTransitionTo,
    availableTransitions: availableTransitions(),
  };
};
