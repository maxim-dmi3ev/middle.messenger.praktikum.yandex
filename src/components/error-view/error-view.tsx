import styles from "./error-view.module.styl";
import { Link } from "src/components/link";

type TErrorViewProps = {
  code: string;
  message: string;
  image: string;
  link: string;
  linkText: string;
};

export const ErrorView = ({
  code,
  message,
  image,
  link,
  linkText,
}: TErrorViewProps) => {
  return (
    <div className={styles.error}>
      <div className={styles.code}>{code}</div>
      <div className={styles.message}>{message}</div>
      <div className={styles.image}>
        <img src={image} alt="image" />
      </div>
      <Link to={link}>{linkText}</Link>
    </div>
  );
};
