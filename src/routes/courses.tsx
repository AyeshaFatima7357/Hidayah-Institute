import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Hidayah Institute" },
      { name: "description", content: "Courses offered at Hidayah Institute, Hyderabad." },
      { property: "og:title", content: "Courses — Hidayah Institute" },
      { property: "og:description", content: "Courses offered at Hidayah Institute, Hyderabad." },
    ],
  }),
  component: CoursesPage,
});

const WHATSAPP_URL = "https://wa.me/918978678220";

const courses = [
  {
    heading: "Classes 6 to 10",
    description:
      "Foundation-building years, with subject-wise faculty and individual doubt-clearing for every student.",
    tags: [
      "Languages (Urdu, Hindi, Telugu, English)",
      "Mathematics",
      "Physics",
      "Biology",
      "Social",
    ],
  },
  {
    heading: "Intermediate",
    description:
      "All four groups currently running: MPC, BiPC, CEC, and MEC, each with dedicated faculty for every subject.",
    tags: [
      "MPC",
      "BiPC",
      "CEC",
      "MEC",
      "Physics",
      "Chemistry",
      "Maths",
      "Biology",
      "Commerce",
      "Economics",
      "Civics",
    ],
  },
  {
    heading: "Polytechnic",
    description:
      "Newly introduced this year, extending the same individual attention to polytechnic students.",
    tags: ["Maths", "Physics", "Chemistry", "English", "Engineering basics"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

function CoursesPage() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8 py-16 sm:py-24 space-y-12">
      <motion.header
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
          What students lack at school,{" "}
          <span className="text-accent-gradient">we fulfill at</span> Hidayah Institute.
        </h1>
      </motion.header>

      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((c, idx) => (
          <motion.div
            key={c.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
            className="glass-card relative z-10 p-6 sm:p-8 flex flex-col gap-4"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white">{c.heading}</h2>
            <p className="text-slate-400 text-sm sm:text-base">{c.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="inline-block bg-white/10 rounded-full px-3 py-1 text-sm text-slate-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="glass-card relative z-10 px-6 sm:px-12 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <p className="text-slate-300 text-base sm:text-lg">
          Fees are affordable and flexible. Get in touch for details.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-medium px-6 py-3 shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}