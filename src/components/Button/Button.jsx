import styles from "./Button.module.css";

function Button({
  children,
  className = "primary",
  ariaLabel = "",
  btnType = "",
}) {
  return (
    <button className={styles[className]} aria-label={ariaLabel} type={btnType}>
      {children}
    </button>
  );
}

export default Button;
