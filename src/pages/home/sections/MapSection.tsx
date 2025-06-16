import React from "react";

const MapSection = () => {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.8658766938783!2d-81.87354892519!3d27.122531476479988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3c9f8bb0b32b%3A0x73cf5c607ef8bc2b!2sNew%20Covenant%20University!5e0!3m2!1sen!2sus!4v1703875200000!5m2!1sen!2sus"
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