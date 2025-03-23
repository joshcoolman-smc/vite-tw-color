import React from "react";
import { cn } from "@/lib/utils";
import { getColorHexValue } from "@/lib/tailwind-utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the Tailwind color palettes and their shades
const colorPalettes = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
];

const colorShades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
].reverse();

// Color swatch component that uses Tailwind classes directly
const ColorSwatch: React.FC<{
  palette: string;
  shade: number;
}> = ({ palette, shade }) => {
  // Get the hex value for this color
  const hexValue = getColorHexValue(palette, shade);

  // Create the class name based on the palette and shade
  const bgColorClass = `bg-${palette}-${shade}`;

  // Handle click to copy the value
  const copyTailwindClass = () => {
    navigator.clipboard.writeText(`${palette}-${shade}`);
  };

  const copyHexValue = () => {
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "w-full h-12 rounded transition-transform hover:scale-110 focus:outline-none hover:cursor-pointer",
            bgColorClass,
            "hover:ring-2 hover:ring-white/50"
          )}
          aria-label={`${palette}-${shade} (${hexValue})`}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <code className="text-sm bg-muted px-2 py-1 rounded">{`bg-${palette}-${shade}`}</code>
            <button
              onClick={copyTailwindClass}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between gap-2">
            <code className="text-sm bg-muted px-2 py-1 rounded">
              {hexValue}
            </code>
            <button
              onClick={copyHexValue}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Copy
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const TailwindColorGrid: React.FC = () => {
  return (
    <div className="px-8 pb-8 bg-black text-white min-h-screen w-full max-w-full">
      <div className="w-full mx-auto">
        <p className="mb-6 text-gray-400">
          Click on any color to see details and copy values.
        </p>

        <div className="pb-8">
          <div className="grid grid-flow-col auto-cols-fr gap-1">
            {colorPalettes.map((palette) => (
              <div key={palette} className="flex flex-col gap-1">
                {colorShades.map((shade) => (
                  <div key={`${palette}-${shade}`} className="w-full">
                    <ColorSwatch palette={palette} shade={shade} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindColorGrid;
