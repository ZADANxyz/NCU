
// Contact tab block styled with gold border and glass, as on ncu.education front page

import React from "react";

const ContactTabBlock = () => {
  return (
    <div className="glass glossy rounded-xl border-2 border-gold shadow-lg px-6 py-7 w-full max-w-md bg-white/90 dark:bg-[#232232]/80">
      <h3 className="text-xl md:text-2xl font-bold golden mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Get in Touch
      </h3>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1 text-[#2E2E2E]">Name</label>
          <input type="text" id="name" name="name" className="w-full border border-gold/60 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold/80" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1 text-[#2E2E2E]">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gold/60 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold/80" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1 text-[#2E2E2E]">Your Message</label>
          <textarea id="message" name="message" className="w-full border border-gold/60 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold/80" rows={3} required />
        </div>
        <button
          type="submit"
          className="block bg-[#B19528] hover:bg-[#947f23] text-white font-bold rounded-md py-2 px-6 mt-2 shadow-gold transition"
        >
          Send
        </button>
      </form>
      {/* Exact below-text from https://ncu.education under contact form */}
      <div className="text-xs text-[#444] mt-3 leading-snug font-medium text-center">
        We’re here to answer your questions. Reach out today and let’s connect!
      </div>
    </div>
  );
};

export default ContactTabBlock;

