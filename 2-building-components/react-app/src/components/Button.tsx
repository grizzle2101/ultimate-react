import { ReactNode } from "react";

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
      className={color ? "btn btn-" + color : "btn btn-primary"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
