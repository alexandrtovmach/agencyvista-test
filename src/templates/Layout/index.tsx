import * as React from "react";

import { Header } from "../../components";
import * as styles from "./layout.module.scss";
import "./reset.scss";

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
