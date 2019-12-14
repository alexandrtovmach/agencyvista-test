import * as React from "react";

import { Header } from "../../components";
import * as styles from "./layout.module.scss";

interface LayoutProps {
  companyLogoSrc: string;
  companyLink: string;
  companyName: string;
}

const Layout: React.SFC<LayoutProps> = ({
  children,
  companyLogoSrc,
  companyLink,
  companyName,
}) => {
  return (
    <div className={styles.layout}>
      <Header companyLogoSrc={companyLogoSrc} companyLink={companyLink} companyName={companyName} />
      {children}
    </div>
  );
};
export default Layout;
