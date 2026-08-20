import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './OrderConfirmationModal.module.css';

function OrderConfirmationModal({ order, onClose }) {
    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!order) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* Header with Success Icon */}
                <div className={styles.header}>
                    <div className={styles.iconCircle}>
                        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h2 className={styles.title}>Order Confirmed!</h2>
                    <p className={styles.subtitle}>Thank you for your purchase. We have received your order.</p>
                    <span className={styles.orderId}>Order #{order.id} • {order.date}</span>
                </div>

                {/* Items List */}
                <div className={styles.itemsList}>
                    <h4 className={styles.itemsHeading}>Selected Products</h4>
                    {order.items.map((item) => (
                        <div key={item.id} className={styles.itemRow}>
                            <img src={item.thumbnail} alt={item.title} className={styles.itemImage} />
                            <div className={styles.itemInfo}>
                                <span className={styles.itemTitle}>{item.title}</span>
                                <span className={styles.itemMeta}>Qty: {item.quantity} × ${item.price.toFixed(2)}</span>
                            </div>
                            <span className={styles.itemSubtotal}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total Section */}
                <div className={styles.summarySection}>
                    <div className={styles.totalRow}>
                        <span>Total Amount Paid</span>
                        <span className={styles.totalPrice}>${order.total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <Link to="/products" className={styles.continueBtn} onClick={onClose}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmationModal;
