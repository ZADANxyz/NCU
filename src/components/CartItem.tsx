
import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

type Product = {
  id: number;
  title: string;
  image: string;
  qty: number;
  price: number;
};

interface CartItemProps {
  item: Product;
  isDark: boolean;
  onQtyChange: (id: number, delta: number) => void;
  onQtyInputChange: (id: number, value: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  isDark,
  onQtyChange,
  onQtyInputChange,
  onRemove,
}) => {
  return (
    <div className="flex gap-4 items-center bg-white/40 dark:bg-black/30 rounded-xl shadow p-3">
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
          onClick={() => onRemove(item.id)}
          className="p-1 rounded hover:bg-destructive/10 text-destructive-500 focus-visible:outline-none transition"
          aria-label="Remove item"
        >
          <Trash2 size={17} />
        </button>
        {/* Quantity controls */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onQtyChange(item.id, -1)}
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
                onQtyInputChange(item.id, e.target.valueAsNumber)
              }
              className="w-12 border border-gold text-center rounded bg-white/60 dark:bg-black/40"
              style={{ margin: "0 2px" }}
            />
            <button
              onClick={() => onQtyChange(item.id, 1)}
              className="p-1 rounded focus-visible:outline-none"
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
  );
};

export default CartItem;
