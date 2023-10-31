import styles from "./server-error.module.styl";
import { ErrorView } from "../../components/error-view";
import imageUrl from "./500.svg";

export const ServerError = () => {
  return (
    <div className={styles.root}>
      <ErrorView
        code="500"
        message="Что-то пошло не так..."
        image={imageUrl}
        link="/"
        linkText="Назад"
      />
    </div>
  );
};
