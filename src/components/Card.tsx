import { CardInterface } from "../types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({
  //   body,
  title,
  image,
  description,
  subtitle,
  link,
}: // body,
CardInterface) => {
  return (
    <article className={"stack-lg ${styles.card}"}>
      {image && <img src={image} alt="Random Image" className={styles.image} />}
      <div className="stack-sm">
        <h6 className={styles.title}>{title}</h6>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.description}>{description}</p>
      <Link to="/ArticlePage">
        <p className={styles.link}>{link}</p>
      </Link>
    </article>
  );
};
export default Card;
