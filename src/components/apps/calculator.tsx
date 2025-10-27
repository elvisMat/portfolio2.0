import React, { useState } from "react";
import { SkipBackIcon as Backspace } from "lucide-react";
import { cn } from "../../lib/utils";
import { useWindowStateMachine } from "../../hooks/useWindowState";
import AppWindow from "../window/window";
import { WindowContext } from "../../context/window-context";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const appContext = React.useContext(WindowContext);
    if (!appContext) return null;
  const calculatorContext = appContext?.allWindowConfig!["calculator"];
  if (!calculatorContext) return null;
  const handleButtonClick = (value: string) => {
    setDisplay((prev) => {
      if (prev === "0" && value !== ".") {
        return value;
      } else {
        return prev + value;
      }
    });
  };

  const { currentState, transition } = useWindowStateMachine(
      "OPEN",
      "calculator"
    );
  const handleClear = () => {
    setDisplay("0");
  };

  const handleBackspace = () => {
    setDisplay((prev) => {
      if (prev.length === 1) {
        return "0";
      } else {
        return prev.slice(0, -1);
      }
    });
  };

  const handleCalculate = () => {
    try {
      // This is a simplified calculation handler
      // A real calculator would need more complex logic
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const btnClass =
    "bg-[#1e2a2a] text-primary-accent w-[55px] h-[36px] rounded-md flex justify-center items-center";
  return (
    <AppWindow
      defaultState={currentState}
      {...calculatorContext}
      transitionTo={transition}
    >
  
    <div className="flex justify-center items-center bg-dark-highlight">
      <div className="w-full max-w-xs">
        <div className="bg-dark-base pt-20 p-4 rounded-lg">
          <div className="h-16 mb-4 rounded-xl bg-dark-highlight pl-3 pr-5 flex items-end justify-end text-white text-3xl overflow-hidden">
            {display}
          </div>

          <div className="grid grid-cols-5 gap-1">
            {/* First row */}
            <button
              onClick={handleBackspace}
              className={cn(btnClass, "bg-[#ff7f7f] ")}
            >
              <Backspace size={20} />
            </button>
            <button onClick={() => handleButtonClick("(")} className={btnClass}>
              (
            </button>
            <button onClick={() => handleButtonClick(")")} className={btnClass}>
              )
            </button>

            <button onClick={() => handleButtonClick("%")} className={btnClass}>
              mod
            </button>
            <button
              onClick={() => handleButtonClick("Math.PI")}
              className={btnClass}
            >
              π
            </button>

            {/* Second row */}
            <button onClick={() => handleButtonClick("7")} className={btnClass}>
              7
            </button>
            <button onClick={() => handleButtonClick("8")} className={btnClass}>
              8
            </button>
            <button onClick={() => handleButtonClick("9")} className={btnClass}>
              9
            </button>
            <button onClick={() => handleButtonClick("/")} className={btnClass}>
              ÷
            </button>
            <button
              onClick={() => handleButtonClick("Math.sqrt(")}
              className={btnClass}
            >
              √
            </button>

            {/* Third row */}
            <button onClick={() => handleButtonClick("4")} className={btnClass}>
              4
            </button>
            <button onClick={() => handleButtonClick("5")} className={btnClass}>
              5
            </button>
            <button onClick={() => handleButtonClick("6")} className={btnClass}>
              6
            </button>
            <button onClick={() => handleButtonClick("*")} className={btnClass}>
              ×
            </button>
            <button
              onClick={() => handleButtonClick("Math.pow(, 2)")}
              className={btnClass}
            >
              x²
            </button>
            {/* Fourth row */}
            <button onClick={() => handleButtonClick("1")} className={btnClass}>
              1
            </button>
            <button onClick={() => handleButtonClick("2")} className={btnClass}>
              2
            </button>
            <button onClick={() => handleButtonClick("3")} className={btnClass}>
              3
            </button>
            <button onClick={() => handleButtonClick("-")} className={btnClass}>
              -
            </button>
            <div className="row-span-2">
              <button
                onClick={handleCalculate}
                className="bg-[#c1f0d9] text-black p-4 rounded-md h-full w-full flex items-center justify-center text-xl"
              >
                =
              </button>
            </div>

            {/* Fifth row */}
            <button onClick={() => handleButtonClick("0")} className={btnClass}>
              0
            </button>
            <button onClick={() => handleButtonClick(".")} className={btnClass}>
              .
            </button>
            <button onClick={() => handleButtonClick("%")} className={btnClass}>
              %
            </button>
            <button onClick={() => handleButtonClick("+")} className={btnClass}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    </AppWindow>
  );
}
