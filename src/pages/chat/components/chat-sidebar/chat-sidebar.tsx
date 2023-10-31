import styles from "./chat-sidebar.module.styl";
import { Flex } from "src/components/flex";
import { Link } from "src/components/link";
import photoUrl from "./photo.png";

export const ChatSidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Flex gap="20px" align="center">
          <Link to="/chat">Создать чат</Link>
          <Link to="/profile">
            <div className={styles.profile}>
              <img src={photoUrl} alt="photo" />
            </div>
          </Link>
        </Flex>
      </div>
      <div style={{ padding: "30px", textAlign: "center" }}>
        Пока здесь пусто
      </div>
    </div>
  );
};
