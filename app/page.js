import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.sentence}>너의 생일 축하해 예원 !</p>
        <br />
        <p className={styles.date}>2024. 10. 07</p>
      </div>
    </div>
  );
}
