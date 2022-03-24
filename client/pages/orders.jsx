import styles from "../styles/Orders.module.css";
import Image from "next/image";

const orders = () => {
  const order = {
    id: "15457898741",
    customer: "John doe",
    total: 19.9,
    address: "address",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.cartTable}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableData}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableData}>
              <td className={styles.data}>{order.id}</td>
              <td className={styles.data}>{order.customer}</td>
              <td className={styles.data}>{order.address}</td>
              <td className={styles.data}>${order.total}</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tracking}>
          <div className={styles.deliveryState}>
            <Image
              src="/img/paid.png"
              height={40}
              width={40}
              objectFit="contain"
              alt=""
            />
            <span className={styles.trackingTitle}>Payment</span>
            <Image
              src="/img/checked.png"
              alt=""
              height={20}
              width={20}
              objectFit="contain"
            />
          </div>
          <div className={styles.deliveryState} style={{}}>
            <Image
              src="/img/bake.png"
              height={40}
              width={40}
              objectFit="contain"
              alt=""
            />
            <span className={styles.trackingTitle}>Preparing</span>
          </div>
          <div className={styles.deliveryState} style={{ opacity: "50%" }}>
            <Image
              src="/img/bike.png"
              height={40}
              width={40}
              objectFit="contain"
              alt=""
            />
            <span className={styles.trackingTitle}>On the way</span>
          </div>
          <div className={styles.deliveryState} style={{ opacity: "50%" }}>
            <Image
              src="/img/delivered.png"
              height={40}
              width={40}
              objectFit="contain"
              alt=""
            />
            <span className={styles.trackingTitle}>Delivered</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3>ORDER TOTAL</h3>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <p>
            <span>Subtotal: </span>${102}
          </p>
          <button disabled className={styles.checkout}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default orders;
