
import React from "react";

interface ContactApplyBlockProps {
  isDark: boolean;
  glassyButtonBase: string;
  goldButtonHover: React.CSSProperties;
  blueButtonHover: React.CSSProperties;
}

const APPLY_LINK = "/apply";

const ContactApplyBlock: React.FC<ContactApplyBlockProps> = ({
  isDark,
  glassyButtonBase,
  goldButtonHover,
  blueButtonHover,
}) => {
  return (
    <div className="w-full max-w-md flex flex-col items-center mt-7 rounded-[0.38rem] font-roboto">
      <a
        href={APPLY_LINK}
        className={
          glassyButtonBase +
          (isDark
            ? " text-gold bg-gold/10 border-2 border-gold"
            : " text-blue-800 bg-blue-100/10 border-2 border-blue-700")
        }
        style={isDark ? goldButtonHover : blueButtonHover}
      >
        <span className="relative z-20" style={{ position: "relative", color: isDark ? "#B19528" : undefined }}>
          Apply Today!
        </span>
        <span
          className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
          aria-hidden="true"
          style={isDark
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
              }}
        ></span>
      </a>
      <div
        className="text-[12.5px] md:text-[13.5px] font-medium text-center mt-3 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs font-roboto transition-colors text-[#444] dark:text-white"
        style={{
          transition: "color 0.2s",
        }}
      >
        We&apos;re here to help—reach out and let&apos;s connect!
      </div>
    </div>
  );
};

export default ContactApplyBlock;
