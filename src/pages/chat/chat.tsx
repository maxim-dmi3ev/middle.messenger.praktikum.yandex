import styles from "./chat.module.styl";
import { ChatSidebar } from "./components/chat-sidebar";

export const Chat = () => {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <ChatSidebar />
      </div>
      <div className={styles.main}>Выберите чат</div>
    </div>
  );
};
