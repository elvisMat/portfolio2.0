import { useState, useCallback, useContext } from "react";
import { WindowContext, WindowIds } from "../context/window-context";
// Define allowed window states
export type WindowState = "CLOSED" | "OPEN" | "MINIMIZED";

const CLOSED: WindowState = "CLOSED";
const OPEN: WindowState = "OPEN";
const MIN: WindowState = "MINIMIZED";

// Define allowed transitions from each state
type StateTransitions = {
  [K in WindowState]: Partial<Record<WindowState, () => void>>;
};
interface UseWindowStateMachineReturn {
  currentState: WindowState;
  transition: (newState: WindowState) => void;
  canTransitionTo: (newState: WindowState) => boolean;
  availableTransitions: WindowState[];
}

export const useWindowStateMachine = (
  initialState: WindowState = CLOSED,
  windowId: WindowIds,
  onTransition?: (from: WindowState, to: WindowState) => void
): UseWindowStateMachineReturn => {
  const [currentState, setCurrentState] = useState<WindowState>(initialState);

  const appContext = useContext(WindowContext);

  // Define the state machine transitions
  const stateTransitions: StateTransitions = {
    [CLOSED]: {
      [OPEN]: () => {
        //console.log("Opening from CLOSED");
      },
    },
    [OPEN]: {
      [CLOSED]: () => {
        let app = appContext?.windowConfig![windowId];
        if (!app) {
          throw new Error("App not found in context");
        }
        //remove app fron window config
        appContext?.closeWindow(windowId);
      },
      [MIN]: () => {},
    },
    [MIN]: {
      [OPEN]: () => {},
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
