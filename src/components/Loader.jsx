import React, { useEffect, useRef } from "react";

import logo from "../assets/logo.png";

export default function Loader({ visible = true }) {
  const outerState = visible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const contentState = visible
    ? "translate-y-0 scale-100 opacity-100"
    : "translate-y-6 scale-95 opacity-0";

  const orbRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      if (!orbRef.current || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      orbRef.current.style.transform = `translate(${dx * 8}px, ${
        dy * -8
      }px) rotate(${dx * 6}deg)`;
      cardRef.current.style.transform = `translate(${dx * 4}px, ${dy * -4}px)`;
    }

    function reset() {
      if (!orbRef.current || !cardRef.current) return;
      orbRef.current.style.transform = "";
      cardRef.current.style.transform = "";
    }

    const mq =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq || !mq.matches) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseleave", reset);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Keyframes */
        @keyframes bg-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes spin-clock { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
        @keyframes spin-anticlock { 0% { transform: rotate(0deg);} 100% { transform: rotate(-360deg);} }
        @keyframes float-soft { 0% { transform: translateY(0);} 50% { transform: translateY(-8px);} 100% { transform: translateY(0);} }
        @keyframes logo-life { 0% { transform: translate(-4%, -4%) scale(1.02) rotate(-0.6deg); } 25% { transform: translate(6%, -2%) scale(1.06) rotate(0.8deg);} 50% { transform: translate(4%, 6%) scale(1.03) rotate(-0.3deg);} 75% { transform: translate(-2%, 4%) scale(1.05) rotate(0.4deg);} 100% { transform: translate(-4%, -4%) scale(1.02) rotate(-0.6deg);} }
        @keyframes rim-breathe { 0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.12); } 50% { box-shadow: 0 0 52px 10px rgba(14,165,233,0.06); } 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.12); } }
        @keyframes star-twinkle { 0% { opacity: 0.2; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.12); } 100% { opacity: 0.2; transform: scale(0.9); } }
        @keyframes comet-sweep { 0% { transform: translateX(-80%) translateY(20%) rotate(-12deg); opacity: 0; } 10% { opacity: 1; } 60% { transform: translateX(30%) translateY(-40%) rotate(8deg); opacity: 1; } 100% { transform: translateX(120%) translateY(-120%) rotate(25deg); opacity: 0; } }
        @keyframes scanline { 0% { transform: translateY(-120%); opacity: 0; } 10% { opacity: 0.12; } 50% { transform: translateY(120%); opacity: 0.18; } 100% { transform: translateY(320%); opacity: 0; } }
        @keyframes progress-sweep { 0% { transform: translateX(-110%); } 100% { transform: translateX(110%); } }

        /* Utilities — all set to 10s durations for faster motion */
        .bg-gradient { background: linear-gradient(120deg,#0ea5e9 0%, #7c3aed 45%, #f472b6 100%); background-size: 300% 300%; animation: bg-shift 10s ease-in-out infinite; }
        .ring-clock { animation: spin-clock 10s linear infinite; transform-origin: center; }
        .ring-anticlock { animation: spin-anticlock 10s linear infinite; transform-origin: center; }
        .float-soft { animation: float-soft 10s ease-in-out infinite; }
        .logo-life { animation: logo-life 10s ease-in-out infinite; will-change: transform, filter; }
        .rim-breathe { animation: rim-breathe 10s ease-in-out infinite; }
        .star { animation: star-twinkle 10s ease-in-out infinite; }
        .comet { animation: comet-sweep 10s ease-in-out infinite; filter: blur(6px) drop-shadow(0 18px 30px rgba(14,165,233,0.08)); }
        .scanline { animation: scanline 10s linear infinite; mix-blend-mode: overlay; opacity: 0.08; background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0)); height: 28%; width: 150%; transform: translateY(-120%); }
        .progress-sweep { animation: progress-sweep 10s linear infinite; opacity: 0.85; filter: blur(0.2px); }
        .particle { animation: float-soft 10s ease-in-out infinite; }
        .clip-circle { -webkit-clip-path: circle(50% at 50% 50%); clip-path: circle(50% at 50% 50%); }

        @media (prefers-reduced-motion: reduce) {
          .bg-gradient, .ring-clock, .ring-anticlock, .float-soft, .logo-life, .rim-breathe, .star, .comet, .scanline, .progress-sweep, .particle {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-out ${outerState}`}
        aria-hidden={!visible}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 ${
            visible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <div className="absolute inset-0 bg-white/98" />
        </div>

        {/* main content wrapper */}
        <div
          ref={cardRef}
          className={`relative z-50 w-full max-w-lg p-6 ${contentState} transition-all duration-700 ease-out`}
          aria-hidden={!visible}
        >
          <div
            className="relative w-72 h-72 rounded-3xl overflow-visible flex items-center justify-center"
            style={{ backdropFilter: "blur(6px) saturate(1.05)" }}
          >
            <div
              className="absolute inset-0 rounded-3xl bg-gradient opacity-95"
              style={{ filter: "contrast(1.03) saturate(1.02)" }}
            />

            {/* starfield */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              {[...Array(16)].map((_, i) => {
                const left = `${Math.random() * 100}%`;
                const top = `${Math.random() * 100}%`;
                const size = Math.random() * 2.6 + 0.6;
                const delay = `${(Math.random() * 6).toFixed(2)}s`;
                return (
                  <div
                    key={i}
                    className="star"
                    style={{
                      position: "absolute",
                      left,
                      top,
                      width: size,
                      height: size,
                      borderRadius: "50%",
                      background: "white",
                      opacity: 0.18,
                      transform: "translateZ(0)",
                      animationDelay: delay,
                      boxShadow: "0 0 10px rgba(255,255,255,0.06)",
                    }}
                  />
                );
              })}
            </div>

            {/* outer ring */}
            <svg
              className="absolute w-96 h-96 -z-10 ring-anticlock opacity-40"
              viewBox="0 0 220 220"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gOuter2" x1="0" x2="1">
                  <stop offset="0" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
                <filter
                  id="gGlow2"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g
                fill="none"
                stroke="url(#gOuter2)"
                strokeWidth="3"
                filter="url(#gGlow2)"
              >
                <circle cx="110" cy="110" r="80" strokeOpacity="0.18" />
                <path
                  d="M40 110 A70 70 0 0 1 180 110"
                  strokeWidth="5"
                  strokeDasharray="9 8"
                  strokeOpacity="0.9"
                />
              </g>
            </svg>

            {/* inner ring */}
            <svg
              className="absolute w-64 h-64 -z-5 ring-clock opacity-75"
              viewBox="0 0 160 160"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gInner2" x1="0" x2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#gInner2)" strokeWidth="2">
                <circle cx="80" cy="80" r="66" strokeDasharray="4 8" />
              </g>
            </svg>

            {/* comet */}
            <div
              style={{
                position: "absolute",
                left: "-40%",
                top: "60%",
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <div
                className="comet"
                style={{
                  width: 220,
                  height: 28,
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(14,165,233,0.0), rgba(14,165,233,0.24), rgba(124,58,237,0.02))",
                }}
              />
            </div>

            {/* scanline */}
            <div
              style={{
                position: "absolute",
                left: "-25%",
                top: "-40%",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <div className="scanline" />
            </div>

            {/* logo orb (reduced image size) */}
            <div
              ref={orbRef}
              className="relative w-48 h-48 rounded-full clip-circle rim-breathe"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.06))",
                boxShadow:
                  "0 30px 80px rgba(15,23,42,0.2), inset 0 -8px 26px rgba(0,0,0,0.12)",
                overflow: "hidden",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.06), transparent 24%), radial-gradient(circle at 70% 70%, rgba(14,165,233,0.06), transparent 28%)",
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* logo is slightly smaller (95%) so it sits comfortably in the orb */}
              <img
                src={logo}
                alt="logo"
                className="absolute inset-0 w-[95%] h-[95%] object-cover logo-life"
                style={{
                  transformOrigin: "50% 50%",
                  display: "block",
                  zIndex: 1,
                  left: "2.5%",
                  top: "2.5%",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 14,
                  top: 12,
                  width: 56,
                  height: 18,
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.98), rgba(255,255,255,0.28))",
                  transform: "rotate(-22deg)",
                  mixBlendMode: "screen",
                  opacity: 0.96,
                  pointerEvents: "none",
                  zIndex: 4,
                }}
              />

              {/* satellites */}
              <div
                style={{
                  position: "absolute",
                  right: -12,
                  bottom: -10,
                  zIndex: 4,
                }}
              >
                <div
                  className="particle"
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background: "linear-gradient(180deg,#7c3aed,#06b6d4)",
                    boxShadow: "0 8px 18px rgba(124,58,237,0.18)",
                  }}
                />
              </div>
              <div
                style={{ position: "absolute", left: -16, top: -12, zIndex: 4 }}
              >
                <div
                  className="particle"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "linear-gradient(180deg,#fff,#7c3aed)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
                  }}
                />
              </div>
            </div>

            {/* decorative left blob */}
            <div
              style={{
                position: "absolute",
                left: "-8%",
                top: "10%",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="blobA" x1="0" x2="1">
                    <stop offset="0" stopColor="#7c3aed" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  fill="url(#blobA)"
                  className="float-soft"
                />
              </svg>
            </div>

            {/* right blob */}
            <div
              style={{
                position: "absolute",
                right: "-10%",
                bottom: "6%",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="blobB" x1="0" x2="1">
                    <stop offset="0" stopColor="#f472b6" stopOpacity="0.12" />
                    <stop offset="1" stopColor="#7c3aed" stopOpacity="0.06" />
                  </linearGradient>
                </defs>
                <rect
                  x="4"
                  y="12"
                  rx="26"
                  ry="26"
                  width="92"
                  height="76"
                  fill="url(#blobB)"
                  className="float-soft"
                  style={{ animationDelay: "0.4s" }}
                />
              </svg>
            </div>
          </div>

          {/* label & progress */}
          <div className="mt-6 flex flex-col items-center z-50">
            <p className="text-gray-700 text-sm tracking-wide select-none">
              Loading…
            </p>
            <div
              className="mt-3 w-56 h-2 rounded-full overflow-hidden"
              aria-hidden="true"
              style={{ background: "rgba(0,0,0,0.06)", position: "relative" }}
            >
              <div
                style={{
                  width: "22%",
                  height: "100%",
                  borderRadius: 999,
                  background: "linear-gradient(90deg,#fff,#ffffff80)",
                }}
              />
              <div
                className="progress-sweep"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "28%",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.6), rgba(255,255,255,0.12))",
                }}
              />
            </div>
          </div>

          {/* lower particle row */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-12 pointer-events-none z-40">
            {[...Array(7)].map((_, i) => {
              const sizes = [4, 3, 6, 5, 4, 3, 5];
              const left = `${6 + i * 13}%`;
              const delay = `${(i % 4) * 0.35}s`;
              const bg =
                i % 2 === 0
                  ? "linear-gradient(180deg,#7c3aed,#6366f1)"
                  : "linear-gradient(180deg,#06b6d4,#7c3aed)";
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left,
                    width: sizes[i],
                    height: sizes[i],
                    borderRadius: 999,
                    opacity: 0.95,
                    animationDelay: delay,
                  }}
                  className="particle"
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "999px",
                      background: bg,
                      boxShadow: "0 6px 14px rgba(124,58,237,0.12)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
