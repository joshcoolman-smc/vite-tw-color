import React from "react";
import { cn } from "@/lib/utils";
import { getColorHexValue } from "@/lib/tailwind-utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

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

// Color swatch component for the flyout menu
const ColorSwatch: React.FC<{
  palette: string;
  shade: number;
  onClick?: () => void;
}> = ({ palette, shade, onClick }) => {
  // Get the hex value for this color
  const hexValue = getColorHexValue(palette, shade);

  // Create the class name based on the palette and shade
  const bgColorClass = `bg-${palette}-${shade}`;

  // Dynamically apply the background color using inline style as a fallback
  const bgStyle = { backgroundColor: hexValue };

  return (
    <div
      className={cn(
        "w-5 h-5 transition-transform hover:scale-110 cursor-pointer",
        bgColorClass,
        "hover:ring-1 hover:ring-white/50"
      )}
      style={bgStyle}
      onClick={onClick}
      title={`${palette}-${shade} (${hexValue})`}
      aria-label={`${palette}-${shade} (${hexValue})`}
      role="button"
      tabIndex={0}
    />
  );
};

const ColorFlyoutMenu: React.FC = () => {
  const handleColorSelect = (palette: string, shade: number) => {
    // This will be implemented later for actual color selection
    console.log(`Selected color: ${palette}-${shade}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Color Picker
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-3 bg-black border-gray-800"
        align="end"
        sideOffset={8}
      >
        <div className="space-y-2">
          <h3 className="text-sm font-medium mb-2 text-white">Pick a color</h3>
          <div className="grid grid-cols-22 gap-[2px]">
            {colorPalettes.map((palette) => (
              <div key={palette} className="flex flex-col gap-[2px]">
                {colorShades.map((shade) => (
                  <ColorSwatch
                    key={`${palette}-${shade}`}
                    palette={palette}
                    shade={shade}
                    onClick={() => handleColorSelect(palette, shade)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorFlyoutMenu;
