
import React from "react";

const ContactAndMapSection = () => (
  <section className="max-w-5xl mx-auto px-3 pb-12 grid md:grid-cols-2 gap-8 items-stretch">
    <div className="glass glossy rounded-2xl border-2 border-gold p-6 shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold golden mb-3">Contact Us</h2>
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

export default ContactAndMapSection;
