
import React from "react";

interface CartFooterProps {
  isDark: boolean;
  total: number;
  hasItems: boolean;
}

const CartFooter: React.FC<CartFooterProps> = ({ isDark, total, hasItems }) => {
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
        style={{
          background: isDark
            ? "linear-gradient(93deg, rgba(30,30,36,0.93) 0%,rgba(177,149,40,0.13) 100%)"
            : "linear-gradient(88deg, rgba(255,255,255,0.85) 0%,rgba(4,107,210,0.07) 100%)",
          color: isDark ? "#fffbea" : "#000b30",
          border: isDark ? "1.3px solid #B19528bf" : "1.5px solid #046BD247",
          boxShadow:
            "0 3px 22px 4px rgba(4,107,210,0.08), 0 1.5px 0 0 #B19528aa",
          backdropFilter: "blur(7px) brightness(1.06)",
          WebkitBackdropFilter: "blur(7px) brightness(1.06)",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            borderRadius: "inherit",
            background:
              "linear-gradient(110deg,rgba(255,255,255,0.11) 0%,rgba(255,255,255,0.09) 46%,rgba(255,255,255,0.13) 94%)",
            opacity: 0.8,
            mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />
        <span style={{ position: "relative", zIndex: 1 }}>Checkout</span>
      </button>
    </div>
  );
};

export default CartFooter;
