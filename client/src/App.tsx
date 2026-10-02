import CodeBackground from "./Components/ui/code-background";
import { PillBase } from "./Components/ui/3d-native-bar";
import "./App.css";

export default function DemoOne() {
  return (
    <main className="showcase">
      <CodeBackground className="showcase-background" />

      <header className="showcase-header">
        <a className="showcase-brand" href="#home" aria-label="Hiếu — Home">
          <span className="showcase-brand-mark">H</span>
          <span>HIẾU<span className="showcase-brand-period">.</span></span>
        </a>
      </header>

      <div className="native-bar-position">
        <PillBase />
      </div>

      <section className="showcase-hero" id="home" aria-labelledby="hero-title">
        <p className="showcase-eyebrow">
          <span className="showcase-status-dot" />
          CREATIVE DEVELOPER <span className="showcase-eyebrow-divider">/</span> 2026
        </p>
        <h1 id="hero-title">
          Code, in
          <br />
          <span>motion.</span>
        </h1>
        <p className="showcase-description">
          A little interaction can turn a simple interface into an experience.
        </p>
        {/* <div className="showcase-scroll-cue" aria-hidden="true">
          <span />
          MOVE YOUR CURSOR
        </div> */}
      </section>

      {/* <div className="showcase-coordinate" aria-hidden="true">
        <span>INTERACTIVE CANVAS</span>
        <span>01 — 04</span>
      </div> */}
    </main>
  );
}
