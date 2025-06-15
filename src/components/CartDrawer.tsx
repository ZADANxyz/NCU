
import React from "react";
import { ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  title: string;
  image: string;
  qty: number;
  price: number;
};

const demoCart: Product[] = [
  {
    id: 1,
    title: "NCU Sweatshirt",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&q=80",
    qty: 1,
    price: 59.99,
  },
  {
    id: 2,
    title: "NCU Mug",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80",
    qty: 2,
    price: 14.99,
  },
];

const CartDrawer: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [cart, setCart] = React.useState(demoCart);

  // Sum
  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  // Glass/gloss class logic for CartDrawer
  // Make sure to match header's curve and gloss
  const borderRadius = "0 0 0 0.45rem/0 0 0 0.45rem"; // top-right/bottom-right rounded to match header (left side straight)
  const glassBg =
    "rgba(255,255,255,0.87)"; // default Apple-glass (light)
  const glassBgDark =
    "rgba(13, 25, 49, 0.82)"; // bluish glass (dark)

  // For SSR and theme glass color
  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-end transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close Cart"
      />
      {/* GLASSY Panel */}
      <aside
        className={`relative h-full w-full max-w-[480px] sm:max-w-[70vw] flex flex-col animate-none
          ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
        style={{
          background: isDark ? glassBgDark : glassBg,
          backdropFilter: "blur(22px) saturate(165%)",
          WebkitBackdropFilter: "blur(22px) saturate(165%)",
          borderTopRightRadius: "0.45rem",
          borderBottomRightRadius: "0.45rem",
          boxShadow:
            "0 4px 24px 6px rgba(0,0,0,0.14), 0 2px 8px rgba(177,149,40,0.06)",
          borderLeft: "1.5px solid #B19528",
          overflow: "hidden",
        }}
      >
        {/* Glossy overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 glossy"
          style={{
            borderTopRightRadius: "0.45rem",
            borderBottomRightRadius: "0.45rem",
            borderLeft: "none",
            // Matches glossy pseudo of header, but vertical stretch
            background:
              "linear-gradient(108deg, rgba(255,255,255,0.22) 2%,rgba(255,255,255,0.10) 22%,rgba(195,210,250,0.14) 86%,rgba(255,255,255,0.10) 97%,rgba(255,255,255,0) 100%)",
            zIndex: 2,
          }}
        />
        {/* Vertical gold line, faded tips, at left edge of glass */}
        <div
          className="absolute left-0 top-[3.5%] h-[93%] w-[2.5px] pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.22) 6%,rgba(177,149,40,0.35) 19%,rgba(177,149,40,1) 33%,rgba(177,149,40,1) 67%, rgba(177,149,40,0.35) 81%, rgba(177,149,40,0.22) 94%,rgba(177,149,40,0) 100%)",
            boxShadow:
              "0 0px 10px 1px rgba(177,149,40,0.08), 0 0.5px 0 0 rgba(177,149,40,0.10)",
            borderRadius: "2px",
            zIndex: 11,
            opacity: 1,
          }}
        />
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2 border-b border-gold/70 bg-white/30 dark:bg-black/20 backdrop-blur-sm relative" style={{ zIndex: 12 }}>
          <span className="text-lg font-semibold text-[#B19528]">Your Cart</span>
          <button
            className="rounded-full p-2 bg-white/50 hover:bg-gold/30 transition"
            onClick={onClose}
            aria-label="Close Cart"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <line x1="3" y1="3" x2="17" y2="17" stroke="#046BD2" strokeWidth="2" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="#046BD2" strokeWidth="2" />
            </svg>
          </button>
        </div>
        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 relative" style={{ zIndex: 12 }}>
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center bg-white/40 dark:bg-black/30 rounded-xl shadow p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg border border-gold/40 shadow"
                />
                <div className="flex-1">
                  <div className="font-medium text-[#046BD2]">{item.title}</div>
                  <div className="text-[#B19528] font-semibold">${item.price.toFixed(2)}</div>
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={(e) =>
                      setCart((old) =>
                        old.map((itm) =>
                          itm.id === item.id
                            ? { ...itm, qty: Math.max(1, Number(e.target.value)) }
                            : itm
                        )
                      )
                    }
                    className="w-12 border border-gold text-center rounded mb-1 bg-white/60 dark:bg-black/40"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-gold/60 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-black/80 relative" style={{ zIndex: 12 }}>
          <div className="flex items-center justify-between text-lg font-bold pb-3">
            <span>Total</span>
            <span className="text-[#B19528]">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cart.length === 0}
            className="w-full px-5 py-2 font-semibold rounded-lg bg-[#046BD2] hover:bg-[#0357a7] text-white shadow-lg transition-all duration-200 disabled:opacity-30"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;

