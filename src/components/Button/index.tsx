import * as React from "react";
import classNames from "classnames";

import * as styles from "./button.module.scss";
import { Link } from "gatsby";

interface ButtonProps {
  link?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  onClick,
  link,
  className,
}) => {
  if (link) {
    if (/(http(s):)|mailto?/.test(link)) {
      return (
        <a href={link} className={classNames(styles.button, className)} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      );
    } else {
      return (
        <Link className={classNames(styles.button, className)} to={link}>
          {children}
        </Link>
      );
    }
  } else {
    return (
      <button
        className={classNames(styles.button, className)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};
export default Button;
