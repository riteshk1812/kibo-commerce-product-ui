import { createContext, useEffect, useMemo, useState } from "react";
import { useCustomFetch } from '../hooks/useCustomFetch';
import { PRODUCT_URI } from '../Helpers/action_url';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const { products, isLoading, error } = useCustomFetch(PRODUCT_URI);

    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem("cart");
            return saved ? JSON.parse(saved) : []
        } catch {
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems]);

    const handleAddToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    const handleRemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const value = useMemo(() => ({
        products,
        isLoading,
        error,
        cartItems,
        handleAddToCart,
        handleRemoveFromCart
    }), [products, isLoading, error, cartItems]);

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
