import * as React from "react";
import classNames from "classnames";
import { Line } from "rc-progress";

import * as styles from "./card.module.scss";

interface CardProps {
  className?: string;
  name: string;
  id: string;
  lines: any[];
  icon?: string;
  description?: string;
  params?: any[];
}

const Card: React.SFC<CardProps> = ({
  className,
  name,
  params,
  lines,
  icon,
  description
}) => {
  return (
    <section
      className={classNames(styles.card, "column", "align-center", className)}
    >
      <div className={classNames(styles.info, "column", "align-center")}>
        <img src={icon} className="mb-1" alt={name} />
        <h3 className="mb-1 text-uppercase text-normal">{name}</h3>
        <p className="secondary-color-text text-center mb-2">{description}</p>
      </div>
      <div className={styles.lines}>
        {lines &&
          lines.map((line, i) => (
            <div key={`card-line--${i}`}>
              <Line
                percent={params && params[line.id]}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="var(--main-color)"
                trailColor="var(--secondary-light-color)"
              />
              <p
                className={
                  params && params[line.id]
                    ? "main-color-text mt-h mb-1"
                    : "secondary-color-text mt-h mb-1"
                }
              >
                {line.name}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};
export default Card;
