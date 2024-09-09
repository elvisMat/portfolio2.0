import * as React from "react"
import { cn } from "../../lib/utils"
import { LucideIcon, SearchIcon } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div className={cn(
        "flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-primary-accent focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}>
        {Icon ? (
          <Icon className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
        ) :
          <SearchIcon className="h-4 w-4 text-primary-accent mr-2 flex-shrink-0" />

        }
        <input
          type={type}
          className={cn(
            "flex w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }