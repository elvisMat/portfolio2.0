// Event types for custom events used in the application
export interface MaximizeEventDetail {
  appId: string;
}

export interface accentColorChangeEventDetail {
  accent: "blue" | "purple" | "pink" | "green";
}

// Custom event types for window and app events
declare global {
  interface WindowEventMap {
    "window:maximize": CustomEvent<MaximizeEventDetail>;
    "app:accentColorChange": CustomEvent<accentColorChangeEventDetail>;
  }
}
