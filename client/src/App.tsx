import CodeBackground from "./Components/ui/code-background";
import { PillBase } from "./Components/ui/3d-native-bar";
import { SplineSceneBasic } from "@/Components/spline-scene-basic";
import "./App.css";

export default function App() {
  return (
    <main className="showcase">
      <CodeBackground className="showcase-background" />

      <header className="showcase-header">
        <a className="showcase-brand" href="#home" aria-label="Hiếu — Home">
          <span className="showcase-brand-mark">H</span>
          <span>
            HIẾU<span className="showcase-brand-period">.</span>
          </span>
        </a>
      </header>

      <div className="native-bar-position">
        <PillBase />
      </div>

      <section className="showcase-content" id="home" aria-label="Interactive 3D showcase">
        <SplineSceneBasic />
      </section>
    </main>
  );
}
