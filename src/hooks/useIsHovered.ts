import { useState } from "react";

export const useIsHovered = () => {
  const [hovered, setIsHovered] = useState(false);
  const _onMouseEnter = () => {
    setIsHovered(true);
  };
  const _onMouseLeave = () => {
    setIsHovered(false);
  };
  return { hovered, setIsHovered, _onMouseEnter, _onMouseLeave };
};
