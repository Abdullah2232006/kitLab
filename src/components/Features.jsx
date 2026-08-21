import styles from './Features.module.css';

import makerIcon from '../assets/icons/maker.png';
import truckIcon from '../assets/icons/truck.png';
import paperIcon from '../assets/icons/paper.png';
import correctIcon from '../assets/icons/correct.png';

function Features() {
    const features = [
        {
            id: 1,
            title: "Maker Specified",
            description: "Hand-picked for quality and reliability in real DIY and robotics projects.",
            icon: makerIcon
        },
        {
            id: 2,
            title: "Fast Shipping",
            description: "Same-day dispatch on component orders placed before 3 PM.",
            icon: truckIcon
        },
        {
            id: 3,
            title: "Datasheets Included",
            description: "Full technical documentation, schematics, and pinouts provided.",
            icon: paperIcon
        },
        {
            id: 4,
            title: "Tested Hardware",
            description: "100% inspected microcontrollers and dev boards before shipping.",
            icon: correctIcon
        }
    ];

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Why Choose KitLab</h2>
                <p className={styles.subtitle}>Designed by hardware enthusiasts for makers, engineers, and students.</p>
            </div>

            <div className={styles.cardsContainer}>
                {
                    features.map((feature) => (
                        <div key={feature.id} className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Features;
