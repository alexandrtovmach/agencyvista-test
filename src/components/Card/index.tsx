import * as React from "react";

import * as styles from "./card.module.scss";

interface CardProps {
  className?: string;
}

const Card: React.SFC<CardProps> = ({ children, className }) => {
  return (
    <section className={[styles.card, className].join(" ")}>
      {children}
    </section>
  );
};
export default Card;
