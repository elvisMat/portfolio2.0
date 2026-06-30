import { useLocalStorage } from "@/hooks/use-localstorage";
import { useDispatchCustomEvent } from "@/hooks/useDispatchCustomEvent";

import { Check } from "lucide-react";

const accentOptions = {
  blue: "#44b3f2",
  green: "#43cd8b",
  purple: "#9762df",
  pink: "#f6494c",
} as const;

const accentColors = [
  { key: "blue", value: "#44b3f2" },
  { key: "green", value: "#43cd8b" },
  { key: "purple", value: "#9762df" },
  { key: "pink", value: "#f6494c" },
] as const;

function Appearance() {
  const { setStoredValue, storedValue: accentColor } = useLocalStorage<string>({
    key: "accentColor",
    initialValue: "blue",
  });
  const dispatch = useDispatchCustomEvent();

  const selectedAccent =
    accentOptions[accentColor as keyof typeof accentOptions] ??
    accentOptions.blue;

 
  const selectedTileStyle = {
    backgroundColor: `${selectedAccent}08`,
    borderColor: `${selectedAccent}1f`,
  };

  return (
    <div className="w-full p-2 space-y-3 text-white">
      <div className="rounded-2xl bg-dark-base  p-4">
        <div className="flex py-2 items-center justify-between">
          <p className=" text-sm text-highlight">Accent Color</p>
          <div className=" grid grid-cols-4 gap-6 items-center justify-between">
            {accentColors.map((accent) => (
              <div
                key={accent.key}
                className="group rounded-2xl relative border border-transparent transition-colors duration-300"
                style={
                  accentColor === accent.key ? selectedTileStyle : undefined
                }
                onClick={() => {
                  dispatch("app:accentColorChange", { accent: accent.key });
                  setStoredValue(accent.key);
                }}
              >
                {accentColor === accent.key && (
                  <Check
                    className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white/90 drop-shadow-[0_3px_1px_rgba(0,0,0,0.45)]"
                    size={16}
                  />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className="block h-9 w-9 shrink-0 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_6px_rgba(0,0,0,0.12)]"
                    style={{ backgroundColor: accent.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
