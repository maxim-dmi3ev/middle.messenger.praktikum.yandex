import styles from "./not-found.module.styl";
import { ErrorView } from "src/components/error-view";
import imageUrl from "./404.svg";

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <ErrorView
        code="404"
        message="Увы, страницы с таким адресом не существует..."
        image={imageUrl}
        link="/"
        linkText="На главную"
      />
    </div>
  );
};
