// store/cartStore.js
import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
    cartItems: [],

    addToCart: (product) => {
        const items = get().cartItems;
        const existing = items.find((item) => item._id === product._id);

        if (existing) {
            set({
                cartItems: items.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            });
        } else {
            set({
                cartItems: [...items, { ...product, quantity: 1 }],
            });
        }
    },

    removeFromCart: (productId) => {
        set({
            cartItems: get().cartItems.filter((item) => item._id !== productId),
        });
    },

    clearCart: () => {
        set({ cartItems: [] });
    },

    increaseQty: (productId) => {
        const items = get().cartItems;
        set({
            cartItems: items.map((item) =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        });
    },

    decreaseQty: (productId) => {
        const items = get().cartItems;
        const item = items.find((i) => i._id === productId);
        if (item && item.quantity > 1) {
            set({
                cartItems: items.map((i) =>
                    i._id === productId ? { ...i, quantity: i.quantity - 1 } : i
                ),
            });
        } else {
            // Remove if quantity is 1
            get().removeFromCart(productId);
        }
    },
}));
