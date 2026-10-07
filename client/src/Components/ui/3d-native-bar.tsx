import { type CSSProperties, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Progress", id: "progress" },
  { label: "Contact", id: "contact" },
];

const COLLAPSED_WIDTH = 132;
const EXPANDED_WIDTH = 420;
const NAV_HEIGHT = 56;

const glassHighlight: CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: "inherit",
  background:
    "linear-gradient(135deg, rgba(255,255,255,.42), rgba(255,255,255,.08) 42%, rgba(255,255,255,.01) 72%)",
  pointerEvents: "none",
};

export function PillBase() {
  const [activeSection, setActiveSection] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === "undefined" ? EXPANDED_WIDTH : window.innerWidth,
  );
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pillWidth = useSpring(COLLAPSED_WIDTH, {
    stiffness: 320,
    damping: 30,
    mass: 0.8,
  });

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -15% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const width = expanded
      ? Math.min(EXPANDED_WIDTH, Math.max(COLLAPSED_WIDTH, viewportWidth - 32))
      : COLLAPSED_WIDTH;
    pillWidth.set(width);
  }, [expanded, pillWidth, viewportWidth]);

  const open = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setExpanded(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setExpanded(false), 260);
  };

  const selectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setExpanded(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const activeItem = NAV_ITEMS.find((item) => item.id === activeSection) ?? NAV_ITEMS[0];

  return (
    <motion.nav
      aria-label="Main navigation"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocusCapture={open}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
      className="native-nav"
      style={{
        position: "relative",
        display: "flex",
        width: pillWidth,
        height: NAV_HEIGHT,
        alignItems: "center",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.62)",
        borderRadius: 999,
        background:
          "linear-gradient(145deg, rgba(250,251,255,.91), rgba(209,214,229,.88))",
        boxShadow:
          "0 12px 34px rgba(0,0,0,.28), 0 3px 8px rgba(0,0,0,.18), inset 0 1px 1px rgba(255,255,255,.95), inset 0 -1px 2px rgba(34,39,57,.15)",
        color: "#171923",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        willChange: "width",
      }}
    >
      <div style={glassHighlight} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 1,
          right: 16,
          left: 16,
          height: 1,
          borderRadius: 999,
          background: "rgba(255,255,255,.92)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: expanded ? "space-evenly" : "center",
          gap: expanded ? 2 : 0,
          padding: expanded ? "0 8px" : "0 12px",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => selectSection(item.id)}
                    style={{
                      appearance: "none",
                      border: isActive
                        ? "1px solid rgba(255,255,255,.8)"
                        : "1px solid transparent",
                      borderRadius: 999,
                      padding: "10px 15px",
                      background: isActive
                        ? "linear-gradient(180deg, rgba(255,255,255,.86), rgba(255,255,255,.54))"
                        : "transparent",
                      boxShadow: isActive
                        ? "0 2px 7px rgba(45,49,67,.12), inset 0 1px 0 #fff"
                        : "none",
                      color: isActive ? "#171923" : "#555a69",
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 550,
                      letterSpacing: ".01em",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.button
              key="collapsed"
              type="button"
              aria-expanded={expanded}
              onClick={open}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16 }}
              style={{
                appearance: "none",
                border: "1px solid rgba(255,255,255,.72)",
                borderRadius: 999,
                padding: "9px 18px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.54))",
                boxShadow:
                  "0 2px 7px rgba(45,49,67,.12), inset 0 1px 0 #fff",
                color: "#171923",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".01em",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {activeItem.label}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
