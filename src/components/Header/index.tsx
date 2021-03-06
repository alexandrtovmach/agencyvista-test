import * as React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

import { Button } from "../";

import * as styles from "./header.module.scss";
import avLogoSrc from "../../assets/images/avLogo.svg";

interface HeaderProps {
  companyLogoSrc: string;
  companyLink: string;
  companyName: string;
}

const Header: React.SFC<HeaderProps> = ({
  companyLogoSrc,
  companyLink,
  companyName,
}) => {
  return (
    <>
      <header className={styles.header}>
        <nav className="center">
          <Link to="/" className={classNames(styles.mainLogo, "center")}>
            <img src={avLogoSrc} alt="" />
          </Link>
          <Link to="/results" className="secondary-color-text hide-mobile">
            ⬅ Back to Results
          </Link>
        </nav>
        <img src={companyLogoSrc} alt="" className={styles.logo} />
        <div className="align-center">
          <Button className="hide-mobile" link={companyLink}>
            Contact {companyName}
          </Button>
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className={styles.avatar}
          />
        </div>
      </header>
      <div className={styles.headerCompensator} />
    </>
  );
};
export default Header;
