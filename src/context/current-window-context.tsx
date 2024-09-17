import { createContext } from "react";
import { IWindowContext } from "./default-window-context";


export const CurrentWindowContext = createContext<IWindowContext | null>(null);