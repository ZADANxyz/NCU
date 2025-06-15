
import React from "react";
import { Phone } from "lucide-react";

interface ContactPhoneButtonProps {
  isDark: boolean;
  glassyButtonBase: string;
  goldButtonHover: React.CSSProperties;
  blueButtonHover: React.CSSProperties;
}

const ContactPhoneButton: React.FC<ContactPhoneButtonProps> = ({
  isDark,
  glassyButtonBase,
  goldButtonHover,
  blueButtonHover,
}) => {
  return (
    <div className="flex justify-center mb-7">
      <a
        href="tel:+16159482212"
        className={
          glassyButtonBase +
          (
            isDark
              ? " text-gold bg-gold/10 border-2 border-gold"
              : " text-blue-800 bg-blue-100/10 border-2 border-blue-700"
          ) +
          " !font-bold !text-[1.55rem] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-gold active:text-blue-900"
        }
        style={isDark ? goldButtonHover : blueButtonHover}
      >
        <span className="inline-flex items-center justify-center">
          <Phone
            size={40}
            className={
              "inline-block mr-2 " +
              (isDark ? "text-gold" : "text-blue-700") +
              " group-hover:text-gold"
            }
            aria-hidden="true"
          />
          <span
            className="font-bold"
            style={{
              fontSize: "1.41rem",
              color: isDark ? "#B19528" : "#1e3a8a",
              display: "inline-block",
              verticalAlign: "middle",
              letterSpacing: "0.01em",
            }}
          >
            (615) 948-2212
          </span>
        </span>
        <span
          className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
          aria-hidden="true"
          style={{
            ...(isDark
              ? {
                  zIndex: 3,
                  background:
                    "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                  borderRadius: "inherit",
                }
              : {
                  zIndex: 3,
                  background:
                    "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                  borderRadius: "inherit",
                }),
          }}
        ></span>
      </a>
    </div>
  );
};

export default ContactPhoneButton;
