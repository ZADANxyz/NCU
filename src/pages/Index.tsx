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

import HeroSection from "./home/sections/HeroSection";
import ServicesSection from "./home/sections/ServicesSection";
import VisionSection from "./home/sections/VisionSection";
import PortfolioSection from "./home/sections/PortfolioSection";
import TeamSection from "./home/sections/TeamSection";
import FoundingStorySection from "./home/sections/FoundingStorySection";
import SubscribeSection from "./home/sections/SubscribeSection";
import ReviewsSlider from "./home/sections/ReviewsSlider";
import ContactAndMapSection from "./home/sections/ContactAndMapSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen pt-0">
      {/* Header is injected above */}
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
      <div style={{ height: "2rem" }} />
    </div>
  );
};

export default Index;
