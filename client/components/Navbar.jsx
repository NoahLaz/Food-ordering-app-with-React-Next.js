import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            className={styles.img}
            src="/img/telephone.png"
            width={30}
            height={30}
            alt=""
          />
        </div>
        <div className={styles.callText}>
          <span className={styles.text}>ORDER NOW!</span>
          <span className={styles.number}>06 74 98 54 21</span>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.links}>
          <li className={styles.link}>Homepage</li>
          <li className={styles.link}>Products</li>
          <li className={styles.link}>Menu</li>
          <li className={styles.logo}>Logo</li>
          <li className={styles.link}>Events</li>
          <li className={styles.link}>Blog</li>
          <li className={styles.link}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" width={30} height={30} alt="" />
          <span className={styles.notif}>2</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
