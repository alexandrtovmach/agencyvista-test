import * as React from "react";
import classNames from "classnames";

import { Button } from "../";
import * as styles from "./companyOverview.module.scss";

interface CompanyOverviewProps {
  name: string;
  logoSrc?: string;
  date?: string;
  city?: string;
  link?: string;
  descriprion?: string;
}

const CompanyOverview: React.SFC<CompanyOverviewProps> = ({
  name,
  logoSrc,
  date,
  city,
  link,
  descriprion,
}) => {
  return (
    <>
      <img
        src={logoSrc || "https://via.placeholder.com/350x350"}
        alt=""
        className={classNames(styles.companyLogo, "m-4")}
      />
      <h1 className="mb-1 text-normal title">{name}</h1>
      <p className="secondary-color-text text-center mb-1 paragraph">
        {`${date} · ${city}`}
      </p>
      <p className="secondary-color-text text-center mb-3">{descriprion}</p>
      <Button link={link}>Contact {name}</Button>
    </>
  );
};
export default CompanyOverview;
