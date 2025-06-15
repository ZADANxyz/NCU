import React from "react";
import { ShoppingCart, X, Minus, Plus, Trash2 } from "lucide-react";

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

  // Handle quantity change
  const handleQtyChange = (id: number, delta: number) => {
    setCart((old) => {
      return old
        .map((itm) =>
          itm.id === id
            ? { ...itm, qty: itm.qty + delta }
            : itm
        )
        .filter((itm) => itm.qty > 0);
    });
  };

  // Handle direct input change
  const handleQtyInputChange = (id: number, value: number) => {
    setCart((old) => {
      return old
        .map((itm) =>
          itm.id === id
            ? { ...itm, qty: Math.max(0, Number(value)) }
            : itm
        )
        .filter((itm) => itm.qty > 0);
    });
  };

  // Remove item
  const removeFromCart = (id: number) => {
    setCart((old) => old.filter((itm) => itm.id !== id));
  };

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
          borderTopLeftRadius: "0.38rem",
          borderBottomLeftRadius: "0.38rem",
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
            borderTopLeftRadius: "0.38rem",
            borderBottomLeftRadius: "0.38rem",
            borderTopRightRadius: "0.45rem",
            borderBottomRightRadius: "0.45rem",
            borderLeft: "none",
            background:
              "linear-gradient(108deg, rgba(255,255,255,0.22) 2%,rgba(255,255,255,0.10) 22%,rgba(195,210,250,0.14) 86%,rgba(255,255,255,0.10) 97%,rgba(255,255,255,0) 100%)",
            zIndex: 2,
          }}
        />
        {/* Vertical gold line */}
        <div
          className="absolute left-0 top-[3.5%] h-[93%] w-[2.5px] pointer-events-none"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.15) 2.5%, rgba(177,149,40,0.37) 8%, rgba(177,149,40,1) 21%, rgba(177,149,40,1) 79%, rgba(177,149,40,0.37) 92%, rgba(177,149,40,0.15) 97.5%, rgba(177,149,40,0) 100%)",
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
            className="p-2 transition focus-visible:outline-none"
            onClick={onClose}
            aria-label="Close Cart"
            style={{
              background: "none",
              borderRadius: "50%",
              boxShadow: "none",
              border: "none",
            }}
            // Remove background on hover
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "none";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "none";
            }}
          >
            <X
              size={20}
              color={isDark ? "#B19528" : "#046BD2"}
              strokeWidth={2}
            />
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
                {/* Controls row: trash to the left of qty controls */}
                <div className="flex items-center gap-2">
                  {/* Trash icon now on the LEFT */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 rounded hover:bg-destructive/10 text-destructive-500 focus-visible:outline-none transition"
                    aria-label="Remove item"
                    style={{ marginRight: 0 }}
                  >
                    <Trash2 size={17} />
                  </button>
                  {/* Quantity controls */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="p-1 rounded hover:bg-gold/10 focus-visible:outline-none disabled:opacity-35"
                        disabled={item.qty <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} className="text-[#B19528]" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={(e) =>
                          handleQtyInputChange(item.id, e.target.valueAsNumber)
                        }
                        className="w-12 border border-gold text-center rounded bg-white/60 dark:bg-black/40"
                        style={{ margin: "0 2px" }}
                      />
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className={`p-1 rounded focus-visible:outline-none`}
                        style={{
                          background: "none",
                        }}
                        aria-label="Increase quantity"
                      >
                        <Plus
                          size={18}
                          className={
                            isDark
                              ? "text-[#B19528]"
                              : "text-[#046BD2]"
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div
          className="p-6 border-t border-gold/60 bg-gradient-to-t from-white/90 via-white/60 to-transparent dark:from-black/90 relative"
          style={{
            zIndex: 12,
            background: isDark
              ? "linear-gradient(120deg, rgba(30,30,36,0.98),rgba(30,30,36,0.80),rgba(38,24,12,0.34) 82%,rgba(30,30,36,0.13) 100%)"
              : "linear-gradient(120deg, rgba(255,255,255,0.95),rgba(230,240,255,0.58),rgba(240,230,190,0.24) 83%,rgba(255,255,255,0.07) 100%)",
            backdropFilter: "blur(11px) saturate(170%) brightness(1.06)",
            WebkitBackdropFilter: "blur(11px) saturate(170%) brightness(1.06)",
            borderTop: isDark
              ? "1.6px solid rgba(177,149,40,0.50)"
              : "1.8px solid rgba(4,107,210,0.16)",
            boxShadow: isDark
              ? "0 2px 18px 2px rgba(177,149,40,0.05),0 1.5px 0 0 #B1952880"
              : "0 2px 16px 1px rgba(4,107,210,0.10), 0 1px 0 0 #B19528",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            borderLeft: "none"
          }}
        >
          <div className="flex items-center justify-between text-lg font-bold pb-3">
            <span>Total</span>
            <span className="text-[#B19528]">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cart.length === 0}
            className="w-full px-5 py-2 font-semibold rounded-lg shadow-lg transition-all duration-200 disabled:opacity-30"
            style={{
              background: isDark
                ? "linear-gradient(93deg, rgba(30,30,36,0.91) 0%,rgba(177,149,40,0.20) 100%)"
                : "linear-gradient(88deg, rgba(255,255,255,0.90) 0%,rgba(4,107,210,0.16) 100%)",
              color: isDark ? "#fffbea" : "#000b30",
              border: isDark ? "1.3px solid #B19528bf" : "1.5px solid #046BD247",
              boxShadow:
                "0 3px 28px 4px rgba(4,107,210,0.11), 0 1.5px 0 0 #B19528aa",
              backdropFilter: "blur(11px) brightness(1.08)",
              WebkitBackdropFilter: "blur(11px) brightness(1.08)",
              position: "relative",
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
                  "linear-gradient(110deg,rgba(255,255,255,0.19) 0%,rgba(255,255,255,0.13) 46%,rgba(255,255,255,0.18) 94%)",
                opacity: 1,
                mixBlendMode: "screen",
              }}
              aria-hidden="true"
            />
            <span style={{ position: "relative", zIndex: 1 }}>Checkout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
