import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

function CartProvider({ children }) {
    // Cart array state
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cart")
            return savedCart ? JSON.parse(savedCart): []
        } catch (error) {
            console.log("Error loading cart from localStorage:", error);
            return []
        }
    });


    // Confirmed Orders array state
    const [orders, setOrders] = useState(() => {
        try {
            const savedOrders = localStorage.getItem("orders")
            return savedOrders ? JSON.parse(savedOrders): []
        } catch (error) {
            console.log("Error loading orders from localStorage:", error);
            return []
        }
    });


    // Update cart in local storage whenever cart state changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    // Update orders in local storage whenever orders state changes
    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);


    // Add Product to Cart
    const addProduct = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (product.stock && existingProduct && existingProduct.quantity < product.stock) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else if (product.stock === 0 || !product.stock || existingProduct?.quantity >= product.stock) {
                alert(`Only ${product.stock} units available in stock!`);
                return prevCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove Product from Cart
    const removeProduct = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    };

    // Increase Product Quantity
    const increaseQuantity = (product) => {
        setCart(prevCart => prevCart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrease Product Quantity
    const decreaseQuantity = (product) => {
        setCart(prevCart => {
            const target = prevCart.find(item => item.id === product.id);

            if (target && target.quantity <= 1) {
                return prevCart.filter(item => item.id !== product.id);
            }
            
            return prevCart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // Confirm Order
    const confirmOrder = (order) => {
        setOrders(prevOrders => [...prevOrders, order]);
        setCart([]);
    };

    // Calculate Total Price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Calculate Total Items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Calculate Order Price
    const orderPrice = orders.reduce((total, order) => total + order.price * order.quantity, 0);

    // Calculate Order Items
    const orderItems = orders.reduce((total, order) => total + order.quantity, 0);


    return(
        <CartContext.Provider value={{
            cart,
            orders,
            setOrders,
            setCart,
            addProduct,
            removeProduct,
            increaseQuantity,
            decreaseQuantity,
            confirmOrder,
            totalPrice,
            totalItems,
            orderPrice,
            orderItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCartContext () {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }

    return context;
}

export { CartContext, CartProvider, useCartContext }