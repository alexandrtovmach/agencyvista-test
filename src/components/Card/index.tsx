import * as React from "react";
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

const Card: React.SFC<CardProps> = ({ className, name, params, lines }) => {
  return (
    <section className={[styles.card, className].join(" ")}>
      <h2>{name}</h2>
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
            <p className={params && params[line.id]? "main-color-text": "secondary-color-text"}>{line.name}</p>
          </div>
        ))}
    </section>
  );
};
export default Card;
