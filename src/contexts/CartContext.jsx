import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    // Add Product to Cart
    const addProduct = (product) => {
        const existingProduct = cart.find(item => item.id === product.id)

        if (existingProduct) {
            setCart(prevCart => prevCart.map(
                item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            ))
        } else {
            setCart(prevCart => [...prevCart, {...product, quantity: 1}])
        }
    }

    // Remove Product from Cart
    const removeProduct = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    }

    // Increase Product Quantity
    const increaseQuantity = (product) => {
        setCart(prevCart => prevCart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    // Decrease Product Quantity
    const decreaseQuantity = (product) => {
        setCart(prevCart => prevCart.map(
            item => item.id === product.id ? {...item, quantity: item.quantity - 1} : item
        ))
    }

    // Confirm Order
    const confirmOrder = (order) => {
        setOrders(prevOrders => [...prevOrders, order])
        setCart([])
    }

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}