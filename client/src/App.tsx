import CodeBackground from "./Components/ui/code-background";
import { PillBase } from "./Components/ui/3d-native-bar";
import { SplineSceneBasic } from "@/Components/spline-scene-basic";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";
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
        {/* <span className="showcase-header-caption">DESIGN & DEVELOPMENT</span> */}
      </header>

      <div className="native-bar-position">
        <PillBase />
      </div>

      {/*  The Home Section */}
      <section className="landing-section home-section" id="home" aria-labelledby="home-title">
        <div className="home-copy">
          <p className="section-kicker"><span /> Hello, I'm Ho Phuc Hieu, a Software Engineer.</p>
          <h1 id="home-title">Giới thiệu về bản thân<br /><span></span></h1>
          <p className="home-description">
            Tôi là Hiếu là một lập trình viên phần mềm, tôi thích được mọi người quan tâm và yêu thương. 
            Tôi là một lập trình viên phần mềm, tôi thích tạo ra những trải nghiệm kỹ thuật số tuyệt vời và mang lại giá trị cho người dùng.
          </p>
          <div className="home-actions">
            <a className="button button-primary" href="#solution">
              Xem chi tiết về tôi <ArrowRight size={16} />
            </a>
            <a className="text-link" href="#contact">Contact <ArrowUpRight size={15} /></a>
          </div>
          <a className="scroll-hint" href="#problem">
            <span className="scroll-hint-icon"><ArrowDown size={14} /></span>
            SCROLL TO EXPLORE
          </a>
        </div>
        <div className="home-visual">
          <SplineSceneBasic />
          {/* <div className="visual-index"><span>FIG. 01</span><span>INTERACTIVE STUDY</span></div> */}
        </div>
        <div className="home-side-note" aria-hidden="true">DESIGNING THE NEXT DIGITAL MOMENT</div>
      </section>

      {/*  The Problem Section */}
      <section className="landing-section problem-section" id="Project" aria-labelledby="Project-title">
        <div className="section-inner problem-layout">
          <div className="problem-intro">
            <p className="section-kicker"><span /> THE CHALLENGE <b>01 / 03</b></p>
            <h2 id="Project-title">Project for me<br /> <em></em></h2>
            <p className="section-lead">
              Đây là dự án của tôi đã làm nhóm và cá nhân và đã đưa vào hoạt động
            </p>
          </div>
          <div className="problem-list">
            <article className="problem-item">
              <span className="item-number">01</span>
              <div><h3>Too much noise</h3><p>Visual clutter makes it harder for people to find what matters.</p></div>
              <Sparkles size={19} />
            </article>
            <article className="problem-item">
              <span className="item-number">02</span>
              <div><h3>Interactions without intention</h3><p>Motion should guide a user, not distract them from the task.</p></div>
              <Zap size={19} />
            </article>
            <article className="problem-item">
              <span className="item-number">03</span>
              <div><h3>Design and technology out of sync</h3><p>A great concept needs a reliable, fast, accessible implementation.</p></div>
              <Layers3 size={19} />
            </article>
          </div>
          <div className="section-index">01 <span>—</span> THE PROBLEM</div>
        </div>
      </section>

      {/*  The Solution Section */}
      <section className="landing-section solution-section" id="solution" aria-labelledby="solution-title">
        <div className="section-inner">
          <div className="solution-heading">
            <div>
              <p className="section-kicker"><span /> A BETTER WAY TO BUILD <b>02 / 03</b></p>
              <h2 id="solution-title">Clarity first.<br /><em>Magic follows.</em></h2>
            </div>
            <p className="section-lead">
              A considered process turns ambitious ideas into useful,
              expressive products — without compromising performance.
            </p>
          </div>
          <div className="solution-grid">
            <article className="solution-card">
              <span className="solution-icon"><Sparkles size={19} /></span>
              <span className="solution-step">01 / DISCOVER</span>
              <h3>Find the signal</h3>
              <p>Align on the people, the problem, and the one thing the experience must get right.</p>
              <span className="solution-card-bottom">STRATEGY & DIRECTION</span>
            </article>
            <article className="solution-card solution-card-featured">
              <span className="solution-icon"><Layers3 size={19} /></span>
              <span className="solution-step">02 / DESIGN</span>
              <h3>Make it feel right</h3>
              <p>Build a visual language and prototype the details before they become expensive.</p>
              <span className="solution-card-bottom">PRODUCT & INTERACTION</span>
            </article>
            <article className="solution-card">
              <span className="solution-icon"><Code2 size={19} /></span>
              <span className="solution-step">03 / BUILD</span>
              <h3>Make it real</h3>
              <p>Ship responsive, accessible interfaces with the polish and performance users expect.</p>
              <span className="solution-card-bottom">FRONTEND & MOTION</span>
            </article>
          </div>
          <div className="solution-proof"><Check size={15} /> Thoughtful by design. Reliable by default. Built for people.</div>
          <div className="section-index">02 <span>—</span> THE SOLUTION</div>
        </div>
      </section>

      {/*  The Contact Section */}
      <section className="landing-section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <div className="contact-content">
          <p className="section-kicker"><span /> HAVE A GOOD ONE? <b>03 / 03</b></p>
          <h2 id="contact-title">Let’s make<br /><em>it matter.</em></h2>
          <p className="contact-description">
            Have a product to shape, a tricky problem to untangle, or an idea
            you can’t stop thinking about? I’d love to hear about it.
          </p>
          <a className="button button-primary contact-button" href="mailto:hello@hieu.design">
            <Mail size={17} /> Start a conversation <ArrowUpRight size={16} />
          </a>
          <p className="contact-availability"><span /> AVAILABLE FOR SELECT PROJECTS</p>
        </div>
        {/* <footer className="landing-footer">
          <a className="showcase-brand" href="#home">
            <span className="showcase-brand-mark">H</span><span>HIẾU<span className="showcase-brand-period">.</span></span>
          </a>
          <span>DESIGNED WITH INTENTION · © 2026</span>
          <a href="mailto:hello@hieu.design">SAY HELLO <ArrowUpRight size={13} /></a>
        </footer> */}
        <div className="section-index">03 <span>—</span> LET’S CONNECT</div>
      </section>


      <section className="landing-section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <div className="contact-content">
          <p className="section-kicker"><span /> HAVE A GOOD ONE? <b>03 / 03</b></p>
          <h2 id="contact-title">Let’s make<br /><em>it matter.</em></h2>
          <p className="contact-description">
            Have a product to shape, a tricky problem to untangle, or an idea
            you can’t stop thinking about? I’d love to hear about it.
          </p>
          <a className="button button-primary contact-button" href="mailto:hello@hieu.design">
            <Mail size={17} /> Start a conversation <ArrowUpRight size={16} />
          </a>
          <p className="contact-availability"><span /> AVAILABLE FOR SELECT PROJECTS</p>
        </div>
        <div className="section-index">03 <span>—</span> LET’S CONNECT</div>
      </section>  

      {/* footer */}

    </main>
  );
}
