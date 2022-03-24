import Image from "next/image";
import {} from "react";
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
  const productList = [
    {
      id: 1,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 2,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 3,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 4,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 5,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 6,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 7,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
    {
      id: 8,
      title: "Campagnola",
      price: 19.9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      img: "/img/pizza.png",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.infoHeader}>The best pizza in town</h1>
        <p className={styles.infoDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cum
          mollitia nisi incidunt, non, ullam facilis doloribus fugit dolorem
          ducimus quis, amet laudantium ab quisquam ipsum culpa assumenda?
          Quaerat, consequatur.
        </p>
      </div>
      <div className={styles.productsWrapper}>
        {productList.map((item) => (
          <div key={item.id} className={styles.product}>
            <div className={styles.imgContainer}>
              <Image src={item.img} layout="fill" alt="" objectFit="contain" />
            </div>
            <h3 className={styles.productTitle}>{item.title}</h3>
            <span className={styles.productPrice}>${item.price}</span>
            <p className={styles.productDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
