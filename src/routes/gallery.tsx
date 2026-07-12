import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hidayah Institute" },
      { name: "description", content: "Life at Hidayah Institute in pictures." },
      { property: "og:title", content: "Gallery — Hidayah Institute" },
      { property: "og:description", content: "Life at Hidayah Institute in pictures." },
    ],
  }),
  component: GalleryPage,
});

const teachersDayImages = [
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-11 at 11.14.54 PM (1).jpeg", alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-11 at 11.14.54 PM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-11 at 11.20.00 PM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.34.55 AM (1).jpeg", alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.34.55 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.34.56 AM (1).jpeg", alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.34.56 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.15 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.16 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.17 AM (1).jpeg", alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.17 AM (2).jpeg", alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.17 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
  { src: "/teachers' day celebrations/WhatsApp Image 2026-07-12 at 11.40.18 AM.jpeg",     alt: "Teachers' Day celebration at Hidayah" },
];

const excursionImages = [
  { src: "/excursion-10.jpeg", alt: "Students on excursion" },
  { src: "/excursion-1.jpeg", alt: "Students on excursion — group on lawn" },
  { src: "/excursion-2.jpeg", alt: "Girls group photo at excursion venue" },
  { src: "/excursion-3.jpeg", alt: "Water park wave pool visit" },
  { src: "/excursion-4.jpeg", alt: "Students walking through tree-lined path" },
  { src: "/excursion-5.jpeg", alt: "Girls enjoying the pool at water park" },
  { src: "/excursion-6.jpeg", alt: "Selfie group — thumbs up" },
  { src: "/excursion-7.jpeg", alt: "Boys group photo at excursion" },
  { src: "/excursion-8.jpeg", alt: "Girls at amusement ride" },
  { src: "/excursion-9.png",  alt: "Students on airplane ride at amusement park" },
];

const culturalImages = [
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.19 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.20 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.21 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.22 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.56 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.34.57 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.35.04 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.35.36 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.36.06 AM.jpeg",     alt: "Cultural observance at Hidayah" },
  { src: "/cultural activities/WhatsApp Image 2026-07-12 at 11.40.14 AM.jpeg",     alt: "Cultural observance at Hidayah" },
];

const foodFestImages = [
  { src: "/food fest/WhatsApp Image 2026-07-12 at 11.35.05 AM (1).jpeg", alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-12 at 11.35.05 AM (2).jpeg", alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-12 at 11.35.05 AM (3).jpeg", alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-12 at 11.35.05 AM.jpeg",     alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-12 at 11.35.06 AM.jpeg",     alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-11 at 11.06.09 PM.jpeg",     alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-11 at 11.14.55 PM.jpeg",     alt: "Food Fest at Hidayah" },
  { src: "/food fest/WhatsApp Image 2026-07-11 at 11.14.56 PM.jpeg",     alt: "Food Fest at Hidayah" },
];

const independenceDayImages = [
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.09 AM (2).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.10 AM (1).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.07 AM (1).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.07 AM.jpeg",     alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.08 AM (1).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.08 AM (2).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.08 AM.jpeg",     alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.09 AM (1).jpeg", alt: "Independence Day celebration at Hidayah" },
  { src: "/independence day celebration/WhatsApp Image 2026-07-12 at 11.35.09 AM.jpeg",     alt: "Independence Day celebration at Hidayah" },
];

// ── Center-focus carousel ──────────────────────────────────────────────────
function CarouselSection({
  title,
  images,
  objectFit = "cover",
}: {
  title: string;
  images: { src: string; alt: string }[];
  objectFit?: "cover" | "contain";
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateActive = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerCx = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCx = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCx - containerCx);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
    rafRef.current = null;
  }, []);

  // Throttle scroll handler via requestAnimationFrame
  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(updateActive);
  }, [updateActive]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateActive();
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll, updateActive]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 space-y-5"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>

      <div className="relative overflow-visible">
        {/* Edge-fade + snap scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4 pb-4 pt-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Leading spacer — half viewport so first card can truly centre */}
          <div className="shrink-0 w-[calc(50vw-160px)] md:w-[calc(50vw-200px)]" />

          {images.map((img, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={img.src}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="snap-center shrink-0 w-80 md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden
                           border-2 border-white bg-white/5 backdrop-blur-lg
                           transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(0.88)",
                  opacity: isActive ? 1 : 0.5,
                  boxShadow: isActive
                    ? "0 25px 60px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.15)"
                    : "0 8px 20px -8px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full ${objectFit === "contain" ? "object-contain" : "object-cover"}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}

          {/* Trailing spacer */}
          <div className="shrink-0 w-[calc(50vw-160px)] md:w-[calc(50vw-200px)]" />
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400 text-xs font-medium">
          <span className="hidden sm:inline">Scroll to explore</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
function GalleryPage() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8 py-16 sm:py-24 space-y-12">

      {/* Page Header */}
      <motion.header
        className="text-center max-w-2xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          Moments at <span className="text-accent-gradient">Hidayah</span>
        </h1>
        <p className="text-slate-400">
          Capturing the heart of Hidayah—learning together, exploring the world, and
          celebrating every step of the journey.
        </p>
      </motion.header>

      <CarouselSection
        title="Heartfelt Moments: Teachers' Day Celebration"
        images={teachersDayImages}
        objectFit="contain"
      />

      <CarouselSection
        title="Escaping the Routine: The Excursion Chronicles"
        images={excursionImages}
        objectFit="cover"
      />

      <CarouselSection
        title="A Legacy of Liberty: Celebrating Our Independence"
        images={independenceDayImages}
        objectFit="cover"
      />

      <CarouselSection
        title="A Feast for the Senses: Food Fest Highlights"
        images={foodFestImages}
        objectFit="cover"
      />

      <CarouselSection
        title="Spiritual Reflections: Our Cultural Observances"
        images={culturalImages}
        objectFit="cover"
      />

    </div>
  );
}
