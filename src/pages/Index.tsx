import React, { useRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Mail, Book, Users, GraduationCap, Globe, Youtube, User, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Replace with your uploaded image path
const HERO_IMAGE = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";

// TEAM PHOTOS - replace with real images as needed
const TEAM = [
  { name: "Paul Crites", role: "Founder & President", img: HERO_IMAGE },
  { name: "Maria Smith", role: "Academic Coordinator", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&facepad=2" },
  { name: "David Lee", role: "Admissions Lead", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=400&h=400&facepad=2" },
  { name: "Sarah Johnson", role: "Student Advisor", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=facearea&w=400&h=400&facepad=2" }
];

// PORTFOLIO/FEATURED WORK
const PORTFOLIO = [
  {
    title: "Mobile-Ready Learning Portal",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    desc: "Interactive online courses accessible anywhere, anytime."
  },
  {
    title: "Personal Academic Coaching",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    desc: "One-on-one mentorship and support for every student."
  },
  {
    title: "Ministry Partnerships",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    desc: "Collaborations and custom programs for churches and ministries."
  },
  {
    title: "Resource Library",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    desc: "Thousands of digital and print resources for lifelong learning."
  }
];

// SERVICES
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

// REVIEWS
const REVIEWS = [
  {
    name: "Sarah P.",
    stars: 5,
    comment: "NCU helped me grow spiritually and academically. The faculty truly cares!"
  },
  {
    name: "James M.",
    stars: 5,
    comment: "Flexible classes fit my ministry schedule and gave me amazing tools."
  },
  {
    name: "Priya D.",
    stars: 4,
    comment: "The online learning portal is so easy to use. Highly recommend!"
  }
];

// ========== SECTION COMPONENTS ==========

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[470px] pb-8">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="NCU Students"
          className="object-cover w-full h-full rounded-none"
          style={{ minHeight: 320, maxHeight: 600, objectPosition: "center 27%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-transparent dark:from-[#13213C]/80 dark:via-[#09162D33] dark:to-transparent" />
      </div>
      {/* Main lead */}
      <div className="relative z-10 mt-10 flex flex-col items-center px-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#046BD2] drop-shadow-lg text-center mb-4">
          Welcome to North Carolina University
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium golden mb-4 text-center max-w-2xl">
          Empowering the Next Generation of World-Changing Leaders.
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-7 max-w-2xl font-medium">
          Discover your calling. Grow your gifts. Serve your community.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button
            className="glass glossy px-8 py-3 text-lg font-bold shadow-lg border border-[#046BD2]/25 hover:scale-105 bg-[#046BD2] text-white"
            style={{ background: "linear-gradient(96deg, #046BD2 80%, #0A2965 100%)" }}
            size="lg"
          >
            Apply Now
          </Button>
          <Button
            className="glass glossy px-8 py-3 text-lg font-bold shadow-lg border border-gold hover:scale-105 text-[#046BD2]"
            variant="outline"
            size="lg"
          >
            Explore Programs
          </Button>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto mb-14 z-10 relative px-3">
      <div className="glass glossy rounded-2xl shadow-lg py-8 px-2 md:px-8">
        <h2 className="text-3xl font-bold text-center text-[#046BD2] mb-5">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SERVICES.map(({ label, icon: Icon, desc }, ix) => (
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
}

function VisionSection() {
  return (
    <section className="flex flex-col items-center justify-center my-12 px-5">
      <div className="glass glossy rounded-2xl shadow-lg py-8 md:px-20 px-6 max-w-3xl">
        <h2 className="text-2xl font-bold golden mb-3 text-center">Our Vision</h2>
        <p className="text-lg text-center text-muted-foreground">
          At NCU, we believe every student holds unrealized potential and a calling to impact their world.
          Our mission: to equip servant leaders through transformative education grounded in faith, innovation, and care.
        </p>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="max-w-5xl mx-auto pt-2 pb-14 px-4">
      <h2 className="text-3xl font-bold text-[#046BD2] mb-6 text-center">Featured Work</h2>
      <Carousel>
        <CarouselContent>
          {PORTFOLIO.map((item, ix) => (
            <CarouselItem
              key={item.title}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
            >
              <div className="glass glossy rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <h3 className="font-semibold text-lg text-[#046BD2] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-[#046BD2] text-center mb-8">Meet the Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
        {TEAM.map((member, i) => (
          <div
            key={member.name}
            className="relative group flex flex-col items-center bg-white/70 dark:bg-slate-900/60 rounded-2xl glass glossy shadow-lg border border-gold/30 hover:scale-105 transition-transform overflow-hidden"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-48 object-cover object-center"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#13192f88] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-3 w-full text-center bg-black/40 rounded-b-2xl">
                <div className="text-lg font-bold text-white">{member.name}</div>
                <div className="text-gold font-medium">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FoundingStorySection() {
  return (
    <section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 mb-16">
      <div className="flex-1 order-2 md:order-1">
        <h2 className="text-2xl font-bold golden mb-3">Founding Story</h2>
        <p className="text-base md:text-lg text-muted-foreground">
          NCU was founded by Paul Crites out of a vision to create a faith-driven university empowering students for profound impact both locally and globally. From a single classroom, we’ve grown into a vibrant global community, always putting personal connection and spiritual growth first.
        </p>
      </div>
      <div className="flex-1 order-1 md:order-2 flex justify-center">
        <img
          src={HERO_IMAGE}
          alt="Paul Crites"
          className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-gold"
        />
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col items-center glass glossy rounded-2xl shadow-lg mb-16">
      <h2 className="text-2xl font-bold mb-3 text-[#046BD2]">Subscribe for Updates</h2>
      <p className="text-base text-center text-muted-foreground mb-5">Get news, event updates, and scholarships.</p>
      <form className="flex w-full max-w-xl gap-3 mb-5">
        <input
          type="email"
          required
          className="flex-1 rounded-lg px-5 py-3 border border-gold text-base bg-white/80 dark:bg-slate-900/60 shadow focus:ring-2 focus:ring-[#046BD2] focus:outline-none"
          placeholder="Your email address"
        />
        <Button
          className="px-6 py-3 font-bold glass glossy bg-[#046BD2] text-white border border-[#046BD2]/20 shadow hover:scale-105"
          style={{ background: "linear-gradient(98deg, #046BD2 90%, #0A2965 100%)" }}
          type="submit"
        >
          <Mail size={19} className="mr-2" /> Subscribe
        </Button>
      </form>
      <div className="flex gap-5">
        <a href="https://www.youtube.com/@paulcrites" target="_blank" rel="noopener noreferrer"
          className="text-[#B19528] hover:text-[#046BD2] transition-colors text-2xl"
          aria-label="YouTube"
        >
          <Youtube size={32} />
        </a>
        {/* Add other social links here as needed */}
      </div>
    </section>
  );
}

function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<any>(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5000);
    return () => clearTimeout(timer.current);
  }, [index]);

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <div className="glass glossy rounded-2xl shadow-lg py-10 px-5 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#046BD2] mb-5 text-center">
          What Our Students Say
        </h2>
        <div className="transition-all duration-500 ease-in-out w-full flex flex-col items-center">
          <div key={REVIEWS[index].name} className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < REVIEWS[index].stars ? "text-[#B19528]" : "text-gray-300"
                  )}
                  strokeWidth={i < REVIEWS[index].stars ? 2.8 : 2}
                  fill={i < REVIEWS[index].stars ? "#B19528" : "none"}
                />
              ))}
            </div>
            <p className="text-lg font-medium text-center max-w-md mb-2">{REVIEWS[index].comment}</p>
            <span className="text-base golden font-semibold">{REVIEWS[index].name}</span>
          </div>
        </div>
        <div className="flex mt-4 gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-3 h-3 rounded-full border border-gold transition-all",
                i === index ? "bg-gold" : "bg-white/80"
              )}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactAndMapSection() {
  return (
    <section className="max-w-5xl mx-auto px-3 pb-12 grid md:grid-cols-2 gap-8 items-stretch">
      {/* Contact Form */}
      <div className="glass glossy rounded-2xl border-2 border-gold p-6 shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold golden mb-3">Contact Us</h2>
        {/* HubSpot Embed (replace src with your actual HubSpot form if available) */}
        <iframe
          title="HubSpot Contact Form"
          src="https://share.hsforms.com/1oUAlH-nASPWnfaAn-rq2eQe6gmn"
          width="100%"
          height="400"
          frameBorder="0"
          className="w-full rounded-lg border-none"
          style={{ background: "transparent", minHeight: 350 }}
        />
      </div>
      {/* Google Map */}
      <div className="glass glossy rounded-2xl border-2 border-gold p-4 shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-[#046BD2] mb-3">Our Location</h2>
        <iframe
          title="NCU on Google Maps"
          src="https://www.google.com/maps?ll=33.181838,-82.101223&z=4&t=m&hl=en&gl=US&mapclient=embed&cid=8344439604829502507"
          width="100%"
          height="360"
          allowFullScreen
          loading="lazy"
          className="rounded-lg border border-gold"
        />
      </div>
    </section>
  );
}

// =================== PAGE ====================

const Index = () => {
  return (
    <div className="bg-background min-h-screen pt-0">
      {/* Header is injected above */}
      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <VisionSection />
        <PortfolioSection />
        <TeamSection />
        <FoundingStorySection />
        <SubscribeSection />
        <ReviewsSlider />
        <ContactAndMapSection />
      </main>
      {/* Footer should be included separately as per app structure and not in this component */}
      <div style={{ height: "2rem" }} />
    </div>
  );
};

export default Index;
