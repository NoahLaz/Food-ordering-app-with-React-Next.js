import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const pizza = {
    id: 1,
    title: "Campagnola",
    price: 19.9,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim praesentium quasi dolorum recusandae illum sed quam natus tenetur iusto aliquid ratione, pariatur illo, beatae non nemo minima vero? Officiis.",
    img: "/img/pizza.png",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.cartTable}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody style={{ margin: "15px 0" }}>
            <tr>
              <td className={styles.data}>
                <Image
                  src={pizza.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </td>
              <td className={styles.data}>{pizza.title}</td>
              <td className={styles.data}>ing1,ing2</td>
              <td className={styles.data}>${pizza.price}</td>
              <td className={styles.data}>2</td>
              <td className={styles.data}>{pizza.price * 2}</td>
            </tr>
            <tr>
              <td className={styles.data}>
                <Image
                  src={pizza.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </td>
              <td className={styles.data}>{pizza.title}</td>
              <td className={styles.data}>ing1,ing2</td>
              <td className={styles.data}>${pizza.price}</td>
              <td className={styles.data}>2</td>
              <td className={styles.data}>{pizza.price * 2}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3>CART TOTAL</h3>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <button className={styles.checkout}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
