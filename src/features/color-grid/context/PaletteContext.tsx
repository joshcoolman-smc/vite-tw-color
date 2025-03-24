import React, { createContext, useContext, useState, useMemo } from "react";

type AccentMode =
  | "triadic"
  | "analogous"
  | "complementary"
  | "monochromatic"
  | "custom";

interface ColorSelection {
  id: string;
  palette: string;
  shade: number;
  hexValue: string;
}

interface PaletteContextType {
  palette: ColorSelection[];
  addColor: (color: ColorSelection) => void;
  removeColor: (id: string) => void;
  accentMode: AccentMode;
  setAccentMode: (mode: AccentMode) => void;
  getAccentColor: (baseColor: string) => string;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState<ColorSelection[]>([]);
  const [accentMode, setAccentMode] = useState<AccentMode>("complementary");

  const addColor = (color: ColorSelection) => {
    setPalette((prev) => [...prev, color]);
  };

  const removeColor = (id: string) => {
    setPalette((prev) => prev.filter((c) => c.id !== id));
  };

  const getAccentColor = (baseColor: string) => {
    // TODO: Implement color calculation logic based on accentMode
    return baseColor; // Placeholder
  };

  const value = useMemo(
    () => ({
      palette,
      addColor,
      removeColor,
      accentMode,
      setAccentMode,
      getAccentColor,
    }),
    [palette, accentMode]
  );

  return (
    <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>
  );
}

export function usePalette() {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error("usePalette must be used within a PaletteProvider");
  }
  return context;
}
