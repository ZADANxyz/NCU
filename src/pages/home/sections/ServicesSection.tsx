
import React from "react";
import { GraduationCap, Book, Users, Globe } from "lucide-react";

const SERVICES = [
  {
    label: "Accredited Degrees",
    icon: GraduationCap,
    desc: "Earn bachelor’s, master’s, and doctoral degrees tailored to your calling."
  },
  {
    label: "Bible Training",
    icon: Book,
    desc: "In-depth scriptural studies, discipleship courses, and ministry equipping."
  },
  {
    label: "Student Portal",
    icon: Users,
    desc: "Access coursework, grades, resources, and community instantly."
  },
  {
    label: "Global Community",
    icon: Globe,
    desc: "Connect & grow with students and alumni around the world."
  }
];

const ServicesSection = () => (
  <section className="max-w-5xl mx-auto mb-14 z-10 relative px-3">
    <div className="glass glossy rounded-2xl shadow-lg py-8 px-2 md:px-8">
      <h2 className="text-3xl font-bold text-center text-[#046BD2] mb-5">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {SERVICES.map(({ label, icon: Icon, desc }) => (
          <div key={label}
            className="flex flex-col items-center px-5 py-7 rounded-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur glass glossy border border-gold/40 shadow-md hover:scale-105 transition-transform"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#046BD2] mb-3 shadow-lg">
              <Icon size={28} className="text-white" />
            </span>
            <h3 className="text-lg font-bold text-[#046BD2] mb-1">{label}</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 text-center">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
