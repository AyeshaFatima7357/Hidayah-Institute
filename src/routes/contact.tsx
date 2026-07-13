import { createFileRoute } from "@tanstack/react-router";
import { User, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useSkipAnimations } from "../hooks/use-reduced-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hidayah Institute" },
      { name: "description", content: "Get in touch with Hidayah Institute, Hyderabad." },
      { property: "og:title", content: "Contact — Hidayah Institute" },
      { property: "og:description", content: "Get in touch with Hidayah Institute, Hyderabad." },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_URL = "https://wa.me/918978678220";
const MAPS_URL =
  "https://www.google.com/maps/place/MADARSA+Al+HIDAYAH/@17.3658119,78.4915637,19.13z/data=!4m6!3m5!1s0x3bcb99003234eb45:0x61b90d51fd5f16db!8m2!3d17.3655136!4d78.4926068!16s%2Fg%2F11vzm08zn6";
const MAP_EMBED =
  "https://maps.google.com/maps?q=17.3655136,78.4926068&t=&z=17&ie=UTF8&iwloc=&output=embed";

function Detail({
  icon, label, children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-teal-300">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}

function ContactPage() {
  const skip = useSkipAnimations();

  const slideIn = (delay = 0) => skip ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8 py-16 sm:py-24 space-y-12">
      <motion.header
        className="text-center"
        {...(skip ? {} : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        })}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          Get in <span className="text-accent-gradient">touch</span>
        </h1>
      </motion.header>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <motion.div
          {...slideIn(0)}
          className="glass-card p-6 sm:p-10 flex flex-col gap-8"
        >
          <Detail icon={<User size={20} />} label="Founder of Hidayah Institute">
            <span className="text-slate-300">Mr. Mahmood Uddin Khan</span>
          </Detail>
          <Detail icon={<Phone size={20} />} label="Phone / WhatsApp">
            <div className="flex items-center gap-3">
              <a href="tel:+918978678220" className="text-white font-medium hover:text-teal-300 transition">
                +91 89786 78220
              </a>
              <span className="text-xs text-slate-500">Call</span>
            </div>
          </Detail>
          <Detail icon={<MapPin size={20} />} label="Address">
            <span className="text-slate-300">
              Bagh-e-Jahara, near Dynamic Model High School, Hyderabad, 500024
            </span>
          </Detail>
          <Detail icon={<Clock size={20} />} label="Timings">
            <span className="text-slate-300">Evening, 6:00 PM to 9:30 PM</span>
          </Detail>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-white font-medium px-6 py-3 shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div {...slideIn(0.05)} className="flex flex-col gap-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="Hidayah Institute location"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] sm:h-[440px] border-0"
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="self-start inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium px-4 py-2 transition"
          >
            <ExternalLink size={16} />
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </div>
  );
}
