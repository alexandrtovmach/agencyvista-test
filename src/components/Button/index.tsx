import * as React from "react";
import classNames from "classnames";

import * as styles from "./button.module.scss";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
