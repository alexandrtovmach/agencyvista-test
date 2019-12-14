import * as React from "react";

import * as styles from "./button.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={[styles.button, className].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
