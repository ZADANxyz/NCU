
import React from "react";

const HERO_IMAGE = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";
const TEAM = [
  { name: "Paul Crites", role: "President", img: HERO_IMAGE },
  { name: "Maria Smith", role: "Academic Director", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&facepad=2" },
  { name: "David Lee", role: "Admissions Lead", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=400&facepad=2" },
  { name: "Sarah Johnson", role: "Student Life", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=400&h=400&facepad=2" }
];

const TeamSection = () => (
  <section className="max-w-6xl mx-auto px-4 mb-16">
    <h2 className="text-2xl md:text-3xl font-bold text-[#046BD2] text-center mb-9 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
      Meet the Team
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {TEAM.map((member) => (
        <div
          key={member.name}
          className="relative group flex flex-col items-center glass glossy bg-white/80 dark:bg-slate-900/70 rounded-2xl border border-gold/16 shadow-md hover:scale-105 transition-transform overflow-hidden"
        >
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-48 object-cover object-center"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#13192fec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 w-full text-center bg-black/40 rounded-b-2xl">
              <div className="text-base md:text-lg font-bold text-white">{member.name}</div>
              <div className="text-gold text-sm font-medium">{member.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
