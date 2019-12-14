import * as React from "react";

import * as styles from "./header.module.scss";

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = ({}) => {
  return (
    <div className={styles.header}>
      <h1>{name}</h1>
      <p>Boom</p>
    </div>
  );
};
export default Header;
