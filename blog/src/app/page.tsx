import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hi 👋</p>
        <p>
          I'm Amalia, a developer that turned into somewhat of a tech and DEI
          blogger.
        </p>
      </div>
      <div className={styles.links}></div>
    </main>
  );
}
