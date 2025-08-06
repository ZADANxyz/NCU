
import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import CartItem from "./CartItem";
import CartAuth from "./CartAuth";
import CheckoutForm from "./CheckoutForm";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const CartDrawer: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [userEmail, setUserEmail] = useState('');
  const [authComplete, setAuthComplete] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const glassBg = "rgba(255,255,255,0.87)";
  const glassBgDark = "rgba(13, 25, 49, 0.82)";

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

  const handleQtyChange = (id: number, delta: number) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + delta);
    }
  };

  const handleQtyInputChange = (id: number, value: number) => {
    updateQuantity(id, Math.max(0, Number(value)));
  };

  const handleCheckout = () => {
    if (!authComplete && !userEmail) {
      return;
    }
    setShowCheckout(true);
  };

  const canProceedToCheckout = () => {
    return cart.length > 0 && (authComplete || userEmail);
  };

  if (showCheckout) {
    return (
      <div
        className={`fixed inset-0 z-[100] flex justify-center items-start pt-8 transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClose}
        />
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
          <CheckoutForm
            email={userEmail}
            total={total}
            cartItems={cart}
            onClose={() => setShowCheckout(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-end transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close Cart"
      />
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
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 relative" style={{ zIndex: 12 }}>
          {cart.length === 0 ? (
            <div className="text-center py-10 space-y-4">
              <div className="text-gray-500">Your cart is empty.</div>
              <div className="text-sm text-gray-400">
                Please{" "}
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = '/store';
                  }}
                  className="text-[#B19528] hover:underline font-medium"
                >
                  visit our store
                </button>
                {" "}to add items to your cart for purchase.
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  qty: item.quantity,
                  price: item.price
                }}
                isDark={isDark}
                onQtyChange={handleQtyChange}
                onQtyInputChange={handleQtyInputChange}
                onRemove={removeFromCart}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-4 space-y-4" style={{ zIndex: 12 }}>
            <CartAuth
              isDark={isDark}
              onEmailSet={setUserEmail}
              onAuthComplete={() => setAuthComplete(true)}
            />
            
            <div className="flex items-center justify-between p-4 bg-white/40 dark:bg-black/30 rounded-xl border border-gold/40">
              <span className="text-lg font-semibold text-[#B19528]">
                Total: ${total.toFixed(2)}
              </span>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={!canProceedToCheckout()}
              className="w-full h-12 text-base font-semibold"
            >
              {!canProceedToCheckout() 
                ? "Complete authentication to continue"
                : "Checkout"
              }
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
