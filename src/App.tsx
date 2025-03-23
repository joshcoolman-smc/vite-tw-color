import "./App.css";
import { TailwindColorGrid, ColorFlyoutMenu } from "./features/color-grid";

function App() {
  return (
    <>
      <div className="flex items-center justify-between p-8 bg-black text-white">
        <h1 className="text-3xl font-bold">Tailwind Color Explorer</h1>
        <ColorFlyoutMenu />
      </div>
      <TailwindColorGrid />
    </>
  );
}

export default App;
