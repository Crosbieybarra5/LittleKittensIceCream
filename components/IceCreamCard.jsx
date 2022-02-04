import styles from '../styles/IceCreamCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const IceCreamCard = ({iceCream}) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${iceCream}`} passHref>
            <Image src="/img/icecream.png" alt="" width="500" height="500" objectFit='contain'/>
            </Link>
            <h1 className={styles.title}>Havana Brown</h1>
            <span className={styles.price}>$2.99/scoop</span>
            <p className={styles.desc}>
                This is our signature chocolate. Contains nuts.
            </p>
        </div>
    )
}

export default IceCreamCard;

