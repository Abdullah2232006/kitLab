import { useEffect } from 'react';
import styles from './ProductModal.module.css';

function ProductModal({ product, onClose }) {
    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        // Prevent background scrolling while modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button 
                    className={styles.closeBtn} 
                    onClick={onClose} 
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <div className={styles.modalBody}>
                    {/* Image Section */}
                    <div className={styles.imageContainer}>
                        <img 
                            src={product.thumbnail || (product.images && product.images[0])} 
                            alt={product.title} 
                            className={styles.image} 
                        />
                    </div>

                    {/* Info Section */}
                    <div className={styles.infoContainer}>
                        <div className={styles.badgesContainer}>
                            <span className={`${styles.badge} ${styles.category}`}>
                                {product.category}
                            </span>
                            <span className={`${styles.badge} ${product.stock > 0 ? styles.inStock : styles.outOfStock}`}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                            </span>
                        </div>

                        <h2 className={styles.title}>{product.title}</h2>
                        
                        <div className={styles.descriptionSection}>
                            <h4 className={styles.sectionHeading}>Description</h4>
                            <p className={styles.description}>{product.description}</p>
                        </div>

                        {/* Footer Section */}
                        <div className={styles.footer}>
                            <div className={styles.priceContainer}>
                                <span className={styles.priceLabel}>Price</span>
                                <span className={styles.price}>${product.price}</span>
                            </div>
                            <button className={styles.cartBtn}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
