import { Link } from "src/components/link";
import styles from './main.module.styl';

export const Main = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li><Link to="/authorization">Страница авторизации</Link></li>
        <li><Link to="/registration">Страница регистрации</Link></li>
        <li><Link to="/profile">Страница настройки пользователя</Link></li>
        <li> <Link to="/chat">Страница чата</Link></li>
        <li><Link to="/404">Страница 404</Link></li>
        <li><Link to="/500">Страница 500</Link></li>
      </ul>
    </nav>
  );
};
