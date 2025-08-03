import React from "react";

const MapSection = () => {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13747427.553954499!2d-92.7084459946833!3d32.73107626629856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ff016e0b5cb51f3%3A0x73cd679c1f903c2b!2sNew%20Covenant%20University!5e0!3m2!1sen!2sus!4v1742009453151!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="New Covenant University Location"
        className="w-full h-96 md:h-[460px] block"
      />
    </section>
  );
};

export default MapSection;