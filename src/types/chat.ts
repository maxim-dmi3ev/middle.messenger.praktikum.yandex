export type Chat = {
  id: string;
  name: string;
  image: string;
  unreadMessagesCount: number;
  lastMessageTime: number;
  lastMessageText: string;
  isGroup: boolean;
};
