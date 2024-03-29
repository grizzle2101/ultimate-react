import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button
      key={1}
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
