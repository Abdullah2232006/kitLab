import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OrderConfirmationModal from '../components/OrderConfirmationModal';
import styles from './Cart.module.css';

export default function Cart() {
    const { 
        cart, 
        totalPrice, 
        totalItems, 
        increaseQuantity, 
        decreaseQuantity, 
        removeProduct, 
        confirmOrder 
    } = useCartContext();

    const [confirmedOrder, setConfirmedOrder] = useState(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const handleConfirmOrder = () => {
        if (cart.length === 0) return;

        const newOrder = {
            id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
            items: [...cart],
            total: totalPrice,
            totalItems: totalItems,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        };

        confirmOrder(newOrder);
        setConfirmedOrder(newOrder);
        setIsConfirmModalOpen(true);
    };

    return (
        <>
            <NavBar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Shopping Cart</h1>
                    <p className={styles.subtitle}>
                        {cart.length > 0 
                            ? `You have ${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your cart.` 
                            : 'Review and manage your selected hardware products.'}
                    </p>
                </div>

                {cart.length === 0 ? (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIconCircle}>
                            <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <h2 className={styles.emptyTitle}>Your cart is empty</h2>
                        <p className={styles.emptyText}>
                            Looks like you haven't added any products to your cart yet. Explore our collection of microcontrollers, dev kits, and sensors.
                        </p>
                        <Link to="/products" className={styles.shopBtn}>
                            Explore Products &rarr;
                        </Link>
                    </div>
                ) : (
                    <div className={styles.cartLayout}>
                        {/* Cart Items List */}
                        <div className={styles.itemsCard}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img 
                                        src={item.thumbnail || (item.images && item.images[0])} 
                                        alt={item.title} 
                                        className={styles.itemImage} 
                                    />

                                    <div className={styles.itemDetails}>
                                        <span className={styles.itemCategory}>{item.category}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <span className={styles.itemUnitPrice}>
                                            ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price} each
                                        </span>
                                    </div>

                                    <div className={styles.itemActions}>
                                        {/* Quantity Controls */}
                                        <div className={styles.quantityControls}>
                                            <button 
                                                className={styles.qtyBtn} 
                                                onClick={() => decreaseQuantity(item)}
                                                aria-label="Decrease quantity"
                                            >
                                                &minus;
                                            </button>
                                            <span className={styles.qtyValue}>{item.quantity}</span>
                                            <button 
                                                className={styles.qtyBtn} 
                                                onClick={() => increaseQuantity(item)}
                                                disabled={item.stock && item.quantity >= item.stock}
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Subtotal */}
                                        <span className={styles.itemSubtotal}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>

                                        {/* Remove Button */}
                                        <button 
                                            className={styles.removeBtn} 
                                            onClick={() => removeProduct(item)}
                                            aria-label="Remove item"
                                        >
                                            <svg className={styles.trashIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className={styles.summaryCard}>
                            <h2 className={styles.summaryTitle}>Order Summary</h2>

                            <div className={styles.summaryRow}>
                                <span>Subtotal ({totalItems} items)</span>
                                <span className={styles.summaryValue}>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span className={styles.freeTag}>Free</span>
                            </div>

                            <div className={styles.divider}></div>

                            <div className={styles.totalRow}>
                                <span>Total</span>
                                <span className={styles.totalAmount}>${totalPrice.toFixed(2)}</span>
                            </div>

                            <button 
                                className={styles.confirmBtn}
                                onClick={handleConfirmOrder}
                            >
                                Confirm Order
                            </button>

                            <Link to="/products" className={styles.continueShoppingLink}>
                                &larr; Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Order Confirmation Modal */}
            {isConfirmModalOpen && (
                <OrderConfirmationModal 
                    order={confirmedOrder} 
                    onClose={() => setIsConfirmModalOpen(false)} 
                />
            )}

            <Footer />
        </>
    );
}