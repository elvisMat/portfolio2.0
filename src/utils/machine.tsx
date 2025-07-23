// Define allowed window states
type WindowState = "NEW" | "MAXIMIZED" | "MINIMIZED";

// Constants for easier reference (optional but nice)
const NEW: WindowState = "NEW";
const MAXIMIZED: WindowState = "MAXIMIZED";
const MINIMIZED: WindowState = "MINIMIZED";

// Interface for current window state
interface IWindowStateMachine {
  currentState: WindowState;
}

const windowState: IWindowStateMachine = {
  currentState: NEW,
};

// Define allowed transitions from each state
type StateTransitions = {
  [K in WindowState]: Partial<Record<WindowState, () => void>>;
};

// Create the state machine object
const machine: StateTransitions & {
  transition: (newState: WindowState) => void;
} = {
  [NEW]: {
    [MAXIMIZED]: () => console.log("Maximizing from NEW"),
    [MINIMIZED]: () => console.log("Minimizing from NEW"),
  },
  [MAXIMIZED]: {
    [MINIMIZED]: () => console.log("Minimizing from MAXIMIZED"),
  },
  [MINIMIZED]: {
    [MAXIMIZED]: () => console.log("Maximizing from MINIMIZED"),
  },
  transition(newState: WindowState) {
    const currentTransitions = this[windowState.currentState];
    const transitionFn = currentTransitions?.[newState];
    if (transitionFn) {
      transitionFn();
      windowState.currentState = newState;
    } else {
      throw new Error(
        `Cannot transition from ${windowState.currentState} to ${newState}`
      );
    }
  },
};
