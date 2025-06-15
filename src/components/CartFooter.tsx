
import React from "react";

interface CartFooterProps {
  isDark: boolean;
  total: number;
  hasItems: boolean;
}

const CartFooter: React.FC<CartFooterProps> = ({ isDark, total, hasItems }) => {
  // Vivid blue gradient for both modes
  const blueGradient =
    "linear-gradient(92deg, rgba(4,107,210,0.92) 0%, rgba(4,107,210,0.94) 50%, rgba(4,107,210,0.82) 100%)";

  // Use blue border and shadow in both modes
  const checkoutBtnStyle: React.CSSProperties = {
    background: blueGradient,
    color: "#fff",
    border: "1.5px solid #046BD247",
    boxShadow: "0 2px 22px 2px rgba(4,107,210,0.08), 0 1.5px 0 0 #046BD299",
    backdropFilter: "blur(4px) brightness(1.04)",
    WebkitBackdropFilter: "blur(4px) brightness(1.04)",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div
      className="p-6 border-t border-gold/60 bg-gradient-to-t from-white/90 via-white/60 to-transparent dark:from-black/90 relative"
      style={{
        zIndex: 12,
        background: isDark
          ? "linear-gradient(120deg, rgba(30,30,36,0.92),rgba(30,30,36,0.80),rgba(38,24,12,0.24) 82%,rgba(30,30,36,0.10) 100%)"
          : "linear-gradient(120deg, rgba(255,255,255,0.90),rgba(230,240,255,0.44),rgba(240,230,190,0.09) 83%,rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(8px) saturate(155%) brightness(1.04)",
        WebkitBackdropFilter: "blur(8px) saturate(155%) brightness(1.04)",
        borderTop: isDark
          ? "1.6px solid rgba(177,149,40,0.50)"
          : "1.8px solid rgba(4,107,210,0.16)",
        boxShadow: isDark
          ? "0 2px 18px 2px rgba(177,149,40,0.05),0 1.5px 0 0 #B1952880"
          : "0 2px 16px 1px rgba(4,107,210,0.09), 0 1px 0 0 #B19528",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        borderLeft: "none",
      }}
    >
      <div className="flex items-center justify-between text-lg font-bold pb-3">
        <span>Total</span>
        <span className="text-[#B19528]">${total.toFixed(2)}</span>
      </div>
      <button
        disabled={!hasItems}
        className="relative w-full px-5 py-2 font-semibold rounded-lg shadow-lg transition-all duration-200 disabled:opacity-30"
        style={checkoutBtnStyle}
      >
        {/* Lighter, subtle glass gloss, centered */}
        <span
          style={{
            position: "absolute",
            left: "20%",
            top: 0,
            width: "60%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            background:
              "linear-gradient(105deg,rgba(255,255,255,0.13) 0%,rgba(255,255,255,0.10) 54%,rgba(255,255,255,0.17) 98%)",
            opacity: 0.18,
            mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />
        <span style={{ position: "relative", zIndex: 1 }}>
          Checkout
        </span>
      </button>
    </div>
  );
};

export default CartFooter;
