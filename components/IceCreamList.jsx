import styles from '../styles/IceCreamList.module.css';
import IceCreamCard from './IceCreamCard';

const IceCreamList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Best Ice Cream</h1>
            <p className={styles.desc}>
                We make our signature ice cream using cat's milk. An alternative to dairy containing little to no lactose at all, giving the ice cream its tangy flavor. You can select any of our finest flavors.
            </p>
            <div className={styles.wrapper}>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
                <IceCreamCard/>
            </div>
        </div>
    )
}

export default IceCreamList;