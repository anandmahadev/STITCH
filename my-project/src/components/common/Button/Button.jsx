import styles from "./Button.module.css";

export default function Button({ children = "Click", onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
