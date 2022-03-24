import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const pizza = {
    id: 1,
    title: "Campagnola",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim praesentium quasi dolorum recusandae illum sed quam natus tenetur iusto aliquid ratione, pariatur illo, beatae non nemo minima vero? Officiis.",
    img: "/img/pizza.png",
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.price[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>

        <h3 className={styles.choose}>Choose the size:</h3>
        <div className={styles.sizes}>
          <div className={styles.sizeContainer}>
            <Image
              src="/img/size.png"
              alt=""
              width={30}
              height={30}
              objectFit="contain"
            />
            <span className={styles.choice}>Small</span>
          </div>
          <div className={styles.sizeContainer}>
            <Image
              src="/img/size.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span className={styles.choice}>Medium</span>
          </div>
          <div className={styles.sizeContainer}>
            <Image
              src="/img/size.png"
              alt=""
              width={50}
              height={50}
              objectFit="contain"
            />
            <span className={styles.choice}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ing}>
          <div className={styles.ingControl}>
            <input
              name="ing"
              className={styles.ingInput}
              id="ing1"
              type="checkbox"
            />
            <label className={styles.ingLabel} htmlFor="ing1">
              ingredient1
            </label>
          </div>
          <div className={styles.ingControl}>
            <input
              name="ing"
              className={styles.ingInput}
              id="ing1"
              type="checkbox"
            />
            <label className={styles.ingLabel} htmlFor="ing1">
              ingredient1
            </label>
          </div>
          <div className={styles.ingControl}>
            <input
              name="ing"
              className={styles.ingInput}
              id="ing1"
              type="checkbox"
            />
            <label className={styles.ingLabel} htmlFor="ing1">
              ingredient1
            </label>
          </div>
          <div className={styles.ingControl}>
            <input
              name="ing"
              className={styles.ingInput}
              id="ing1"
              type="checkbox"
            />
            <label className={styles.ingLabel} htmlFor="ing1">
              ingredient1
            </label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="quantity"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.addButton}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
