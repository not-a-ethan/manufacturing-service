import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <span className={styles.container}>
      <div className={styles.buffer}></div>

      <h1 className={styles.header}>Ethan's Manufacturing</h1>
      <p>Get your creations 3D printed!</p>

      
    </span>
  );
};