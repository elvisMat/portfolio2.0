import * as React from "react";
import { cn } from "../../lib/utils";
import { LucideIcon, SearchIcon } from "lucide-react";
import { useThemeColors } from "@/hooks/useColorScheme";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    const {borderColor,focusWithinRing, textColor}=useThemeColors()
    return (
      <div
        className={cn(
          `flex h-10 w-full items-center rounded-md border bg-background px-3 py-2 focus-within:ring-[1.5px]`,
          className,
          borderColor,
          focusWithinRing
        )}
      >
        {Icon ? (
          <Icon className={cn("h-4 w-4 mr-2 flex-shrink-0", textColor)} />
        ) : (
          <SearchIcon className={cn("h-4 w-4 mr-2 flex-shrink-0", textColor)} />
        )}
       
        <input
          type={type}
          className={cn(
            "flex w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
