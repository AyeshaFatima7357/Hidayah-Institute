import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

const stages = ["6th", "10th", "Inter", "Poly"];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  viewport: { once: true, amount: 0.1 },
};

function Timeline() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-400 via-lime-400 to-orange-400" />
        {stages.map((s) => (
          <div key={s} className="relative flex flex-col items-center gap-3">
            <span
              className="relative z-10 h-4 w-4 rounded-full bg-gradient-to-br from-teal-300 to-lime-300 timeline-dot"
              style={{ boxShadow: "0 0 20px rgba(45,212,191,0.7)" }}
            />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-12 sm:py-24 space-y-12 sm:space-y-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Every student, <span className="text-accent-gradient">understood</span>
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400">
          Guiding classes 6 through Intermediate and Polytechnic, with individual
          attention for every learner.
        </p>
        <div className="pt-4">
          <Timeline />
        </div>
        <div className="pt-4">
          <a
            href="https://wa.me/918978678220"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </motion.section>

      {/* Quote */}
      <motion.section {...fadeUp} className="glass-card px-6 sm:px-12 py-10 text-center home-section-lazy">
        <p className="italic text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
          “There's no greater wealth than wisdom, no greater poverty than
          ignorance, no greater heritage than culture, and no greater support
          than consultation.”
        </p>
      </motion.section>

      {/* About */}
      <motion.section {...fadeUp} className="glass-card px-6 sm:px-12 py-10 space-y-4 home-section-lazy">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          About Hidayah Institute
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Hidayah Institute has been guiding students in Hyderabad since 2024,
          working with classes 6 through Intermediate, and now Polytechnic as
          well. Every subject has its own dedicated faculty, and every student
          gets individual attention rather than being lost in a large batch.
          Over the last two years, Hidayah has maintained a 100% pass
          percentage across its students.
        </p>
      </motion.section>

      {/* Life at Hidayah */}
      <motion.section {...fadeUp} className="space-y-6 home-section-lazy">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Life at Hidayah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/life-1.jpg", "/life-2.jpg", "/life-3.jpg"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={src}
                alt={`Life at Hidayah ${i + 1}`}
                className="w-full h-auto object-contain"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 home-section-lazy">
        {[
          { big: "100%", small: "pass rate, last 2 years" },
          { big: "2024", small: "founded" },
          { big: "1:1", small: "attention, every subject" },
        ].map((s, i) => (
          <motion.div
            key={s.big}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.1 }}
            className="glass-card px-6 py-10 text-center"
          >
            <div className="text-5xl font-bold text-accent-gradient">
              {s.big}
            </div>
            <div className="mt-3 text-sm text-slate-400">{s.small}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
