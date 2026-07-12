import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="sticky top-4 z-50 mx-4 sm:mx-8">
      <nav className="glass-card !transition-none hover:!transform-none hover:!bg-white/5 hover:!border-white/10 hover:!shadow-[0_25px_50px_-12px_rgb(0_0_0/0.5)] flex items-center justify-between px-4 sm:px-6 py-3 rounded-full">
        <Link to="/" className="text-white font-semibold tracking-tight text-base sm:text-lg">
          Hidayah <span className="text-accent-gradient">Institute</span>
        </Link>
        <ul className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative px-3 py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {l.label}
                  {active && (
                    <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-lime-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/90 p-1.5 rounded-full hover:bg-white/10 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden menu-pop mt-2 glass-card !transition-none hover:!transform-none hover:!bg-white/5 hover:!border-white/10 rounded-2xl p-2">
          <ul className="flex flex-col">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block px-4 py-3 rounded-xl text-sm transition-colors ${
                      active
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-4 sm:mx-8 mt-auto mb-4">
      <div className="glass-card flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-4 rounded-full">
        <span className="text-white text-sm font-medium">Hidayah Institute</span>
        <span className="text-slate-400 text-xs sm:text-sm">Founded 2024, Hyderabad</span>
      </div>
    </footer>
  );
}

function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0B1120]"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute w-full h-full blur-[6px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient 1 — deep teal core, fades to transparent at edges */}
          <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#042f2e" stopOpacity="0" />
            <stop offset="20%"  stopColor="#0f766e" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="80%"  stopColor="#0f766e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0" />
          </linearGradient>

          {/* Gradient 2 — vivid cyan, fades harder at both ends */}
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#042f2e" stopOpacity="0" />
            <stop offset="15%"  stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="48%"  stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="82%"  stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0" />
          </linearGradient>

          {/* Gradient 3 — seafoam green, crosses over ribbons 1 & 2 */}
          <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#042f2e" stopOpacity="0" />
            <stop offset="22%"  stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="52%"  stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="78%"  stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0" />
          </linearGradient>

          {/* Gradient 4 — near-white cyan highlight, thin streak */}
          <linearGradient id="grad4" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#042f2e" stopOpacity="0" />
            <stop offset="28%"  stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="50%"  stopColor="#cffafe" stopOpacity="1" />
            <stop offset="72%"  stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#042f2e" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter — soft drop-shadow around each ribbon */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/*
          Ribbon 1 — wide teal band
          Starts wide at bottom-left (~y900–1100),
          PINCHES inward at mid-screen (x~450–550, y~550–650),
          fans back out top-right (~y200–400)
        */}
        <path
          className="svg-ribbon-1"
          d="
            M -80 1100
            C 100 980, 280 780, 460 640
            C 580 550, 700 540, 860 420
            C 960 360, 1050 300, 1100 220
            L 1100 340
            C 1020 400, 920 460, 800 530
            C 650 620, 530 650, 420 740
            C 260 860, 120 1020, -80 1200
            Z
          "
          fill="url(#grad1)"
          opacity="0.85"
          style={{ mixBlendMode: "screen" }}
          filter="url(#glow)"
        />

        {/*
          Ribbon 2 — cyan band
          Starts HIGHER than ribbon 1 at left (~y700–900),
          CROSSES OVER ribbon 1 at mid (x~480, y~580),
          exits LOWER than ribbon 1 at top-right (~y300–480)
        */}
        <path
          className="svg-ribbon-2"
          d="
            M -80 880
            C 80 780, 240 660, 400 590
            C 500 540, 600 560, 720 530
            C 880 490, 1000 400, 1100 350
            L 1100 440
            C 980 490, 860 570, 700 610
            C 580 640, 480 640, 380 690
            C 220 760, 80 880, -80 1000
            Z
          "
          fill="url(#grad2)"
          opacity="0.80"
          style={{ mixBlendMode: "screen" }}
          filter="url(#glow)"
        />

        {/*
          Ribbon 3 — seafoam green, widest
          Starts BELOW both at left (~y1000–1250),
          arcs UP aggressively mid-screen crossing both,
          lands BETWEEN them at top-right (~y260–440)
        */}
        <path
          className="svg-ribbon-3"
          d="
            M -80 1280
            C 60 1120, 200 900, 380 760
            C 500 670, 640 620, 800 570
            C 920 530, 1020 460, 1100 400
            L 1100 520
            C 1000 570, 880 630, 740 670
            C 580 720, 440 760, 320 870
            C 180 990, 60 1160, -80 1400
            Z
          "
          fill="url(#grad3)"
          opacity="0.80"
          style={{ mixBlendMode: "screen" }}
          filter="url(#glow)"
        />

        {/*
          Ribbon 4 — thin crisp highlight streak
          Threads THROUGH the pinch point of ribbons 1 & 2,
          the intersection zone glows brightest due to screen blend
        */}
        <path
          className="svg-ribbon-4"
          d="
            M -80 960
            C 120 860, 300 720, 460 630
            C 560 570, 660 555, 780 510
            C 900 468, 1010 400, 1100 355
            L 1100 395
            C 1000 438, 890 504, 770 546
            C 650 588, 548 606, 446 668
            C 290 760, 110 900, -80 1010
            Z
          "
          fill="url(#grad4)"
          opacity="0.90"
          style={{ mixBlendMode: "screen" }}
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B0F19] text-white font-sans overflow-x-hidden">
      <AuroraBackground />
      <Nav />
      <main className="relative z-10 flex-1">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}