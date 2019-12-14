import * as React from "react";
import { Link } from "gatsby";

import { Button } from "../";

import * as styles from "./header.module.scss";
import avLogoSrc from "../../assets/images/avLogo.svg";
import logoSrc from "../../assets/images/logo.png";

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = ({}) => {
  return (
    <>
      <header className={styles.header}>
        <nav className="center">
          <Link to="/" className={[styles.mainLogo, "center"].join(" ")}>
            <img src={avLogoSrc} alt=""/>
          </Link>
          <Link to="/results" className="secondary-text hide-mobile">
            ⬅ Back to Results
          </Link>
        </nav>
        <img src={logoSrc} alt="" className={styles.logo} />
        <div className="vertical-center">
          <Button className="hide-mobile">Contact Ogilvy</Button>
          <img src="https://source.unsplash.com/random" alt="" className={styles.avatar} />
        </div>
      </header>
      <div className={styles.headerCompensator}></div>
    </>
  );
};
export default Header;
