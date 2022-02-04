import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const iceCream = {
        id: 1,
        img: "/img/icecream.png",
        name: "Havana Brown",
        price: [2.99, 4.99, 6.99],
        desc: "lorem"
    };


    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={iceCream.img} objectFit="contain" layout='fill' alt="" />
            </div>
            </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{iceCream.name}</h1>
            <span className={styles.price}>${iceCream.price[size]}</span>
            <p className={styles.desc}>{iceCream.desc}</p>
            <h3 className={styles.choose}>Choose your size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/img/size.png" layout='fill' alt=""/>
                    <span className={styles.number}>Kitten</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/img/size.png" layout='fill' alt=""/>
                    <span className={styles.number}>Normal</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/img/size.png" layout='fill' alt=""/>
                    <span className={styles.number}>Chonky</span>
                </div>
            </div>
            <h3 className={styles.choose}> Pick Your Toppings!</h3>
            <div className={styles.toppings}>
                <div className={styles.option}>
                    <input 
                        type="checkbox" 
                        id="sprinkles" 
                        name="sprinkles" 
                        className={styles.checkbox}
                    />
                    <label htmlFor="sprinkles">Sprinkles</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox" 
                        id="hotfudge" 
                        name="hotfudge" 
                        className={styles.checkbox}
                    />
                    <label htmlFor="hotfudge">Hot Fudge</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox" 
                        id="whippedcream" 
                        name="whippedcream" 
                        className={styles.checkbox}
                    />
                    <label htmlFor="whippedcream">Whipped Cream</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox" 
                        id="fruit" 
                        name="fruit" 
                        className={styles.checkbox}
                    />
                    <label htmlFor="fruit">Fruit</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox" 
                        id="nuts" 
                        name="nuts" 
                        className={styles.checkbox}
                    />
                    <label htmlFor="nuts">Nuts</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>;
    
};

export default Product;