import "./App.css";
import {
  TailwindColorGrid,
  ColorFlyoutMenu,
  PaletteProvider,
  usePalette,
} from "./features/color-grid";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PreviewContainer from "@/components/previews/PreviewContainer";
import LoginCard from "@/components/previews/LoginCard";
import ProfileCard from "@/components/previews/ProfileCard";
import SettingsCard from "@/components/previews/SettingsCard";

type AccentMode =
  | "triadic"
  | "analogous"
  | "complementary"
  | "monochromatic"
  | "custom";

function AccentModeSelector() {
  const { accentMode, setAccentMode } = usePalette();

  return (
    <Select
      value={accentMode}
      onValueChange={(value: AccentMode) => setAccentMode(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Accent Mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="triadic">Triadic</SelectItem>
        <SelectItem value="analogous">Analogous</SelectItem>
        <SelectItem value="complementary">Complementary</SelectItem>
        <SelectItem value="monochromatic">Monochromatic</SelectItem>
        <SelectItem value="custom">Custom</SelectItem>
      </SelectContent>
    </Select>
  );
}

function App() {
  return (
    <PaletteProvider>
      <div className="flex items-center justify-between p-8 bg-black text-white">
        <h1 className="text-3xl font-bold">Tailwind Color Explorer</h1>
        <div className="flex gap-4">
          <ColorFlyoutMenu />
          <AccentModeSelector />
        </div>
      </div>
      <TailwindColorGrid />
      <PreviewContainer>
        <LoginCard />
        <ProfileCard />
        <SettingsCard />
      </PreviewContainer>
    </PaletteProvider>
  );
}

export default App;
