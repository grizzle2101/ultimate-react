import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import styles from "./ExpandableText.module.css";

export interface ExpandableTextProps {
  children: ReactNode;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p className={isExpanded ? styles.expanded : styles.collapsed}>
        {children}
      </p>
      <Button onClick={toggleText}>{isExpanded ? "Less" : "More"}</Button>
    </>
  );
};

export default ExpandableText;
