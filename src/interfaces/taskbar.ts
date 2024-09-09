export interface StartProps {
  onToggle: () => void;
  isOpened: boolean;
}
export interface BarProps {
  className?: string;
}
export interface ItemProps {
  title: string;
  image: string;
}
export interface TaskbarItemProps extends ItemProps {}
export interface HomeItemProps extends ItemProps {}
