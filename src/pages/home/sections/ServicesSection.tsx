
import React from "react";
import { GraduationCap, BookOpen, Book, Briefcase } from "lucide-react";

const SERVICES = [
  {
    label: "Ministry Degrees",
    icon: GraduationCap,
    desc: "Start or finish your accredited Christian degree—Bachelor, Master’s, and Doctorate—all 100% online."
  },
  {
    label: "Christian Counseling",
    icon: Briefcase,
    desc: "Designed for those called to serve others with wisdom, faith, and compassion. Prepare for private practice or ministry care."
  },
  {
    label: "Leadership & Marketplace",
    icon: BookOpen,
    desc: "Develop the leadership gifts and practical skills for impactful career, business, or nonprofit ministry."
  },
  {
    label: "Bible & Theology Studies",
    icon: Book,
    desc: "Deepen your understanding of scripture with flexible online courses and Bible certificates."
  }
];

const ServicesSection = () => (
  <section className="max-w-6xl mx-auto px-3 md:px-7 py-10 mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-[#046BD2] mb-8 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
      {SERVICES.map(({ label, icon: Icon, desc }) => (
        <div
          key={label}
          className="flex flex-col items-center px-7 py-9 rounded-xl glass glossy border border-gold/25 bg-white/80 dark:bg-slate-900/70 shadow-md hover:shadow-lg transition"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#046BD2] mb-4 shadow-lg">
            <Icon size={32} className="text-white" strokeWidth={2.1} />
          </span>
          <h3 className="text-base md:text-lg font-bold text-[#046BD2] mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</h3>
          <p className="text-sm md:text-base text-[#393939] dark:text-gray-200 text-center font-medium" style={{ fontWeight: 400 }}>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
