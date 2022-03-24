import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.item}>
          <h2 className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
        </div>
        <div className={styles.item}>
          <h3 className={styles.infoHeader}>Find our restaurants</h3>
          <div className={styles.wrapper}>
            <span>4512 street name 47</span>
            <span>City, 78410</span>
            <span>05 05050505</span>
          </div>
          <div className={styles.wrapper}>
            <span>4512 street name 47</span>
            <span>City, 78410</span>
            <span>05 05050505</span>
          </div>
          <div className={styles.wrapper}>
            <span>4512 street name 47</span>
            <span>City, 78410</span>
            <span>05 05050505</span>
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.infoHeader}>Working hours</h3>
          <div className={styles.wrapper}>
            <span>Monday to Friday</span>
            <span>9:00 - 22:00</span>
          </div>
          <div className={styles.wrapper}>
            <span>Saturday to Sunday</span>
            <span>12:00 - 00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
