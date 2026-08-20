import styles from './Hero.module.css'

function Hero() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>BUILD YOUR NEXT BIG IDEA</h1>
                    <p className={styles.heroDescription}>From Arduino starter packs to advanced ESP32 bundles and sensor arrays — high-quality hardware delivered straight to your workbench.</p>
                    <button className={styles.heroButton}>Order Now</button>
                    {/* #TODO: Add Order Now Button Functionality */}
                </div>
            </div>
        </>
    )
}

export default Hero;