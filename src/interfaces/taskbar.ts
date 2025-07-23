import { WindowIds } from "../context/window-context";

export interface StartProps {
  onToggle: () => void;
  isOpened: boolean;
}
export interface BarProps {
  className?: string;
}
export interface ItemProps {
  windowId: WindowIds;
  image: string;
}
export interface TaskbarItemProps extends ItemProps {
  onToggle: () => void;
}
export interface HomeItemProps extends ItemProps {}
