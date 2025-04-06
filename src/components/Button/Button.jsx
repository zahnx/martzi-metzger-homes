import styles from "./Button.module.css";

function Button({ children, className = "primary" }) {
  return <button className={styles[className]}>{children}</button>;
}

export default Button;
