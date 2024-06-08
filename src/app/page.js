import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <h1>Hello!</h1>
        <h3>This is my 1.6 Exercise for NEXT.js</h3>
        <h6>Minor changes have been made to the layout of this page!</h6>
      </div>
    </main>
  );
}
