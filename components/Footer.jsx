import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit='contain' layout='fill' alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        JUST WHAT YOU DIDN'T THINK YOU WANTED TO TRY.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find a location near you</h1>
                    <p className={styles.text}>
                        1122 Street Road 
                        <br/> Florida, 33511
                        <br/> (850) 951-5293
                    </p>
                    <p className={styles.text}>
                        4001 Street Avenure 
                        <br/> Florida, 33511
                        <br/> (561) 951-4638
                    </p>
                    <p className={styles.text}>
                        1122 Street Drive 
                        <br/> Florida, 33511
                        <br/> (813) 951-9842
                    </p>
                    <p className={styles.text}>
                        1122 Street Street
                        <br/> Florida, 33511
                        <br/> (786) 951-5205
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Working Hours</h1>
                    <p className={styles.text}>
                        Mon - Fri
                        <br/> 11:00am - 11pm
                    </p>
                    <p className={styles.text}>
                        Sat
                        <br/> 12pm - 9pm
                        Closed Sundays!
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;