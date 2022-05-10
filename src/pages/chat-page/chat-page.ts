import { Block } from "../../utils/Block";
import tmplFunc from "./chat-page.hbs";
import { ChatAsideArea } from "../../modules/chat-aside-area";
import "./chat-page.styl";
import { ChatMessagingArea } from "../../modules/chat-messaging-area";

const dummyChats = [
  {
    id: "1",
    name: "Chat #1",
    image: "",
    unreadMessagesCount: 30,
    lastMessageTime: 1652180341257,
    lastMessageText: "Ты это видел?",
    isGroup: false,
  },
  {
    id: "2",
    name: "Chat #2",
    image: "",
    unreadMessagesCount: 1,
    lastMessageTime: 1652180341257,
    lastMessageText: "Не",
    isGroup: false,
  },
  {
    id: "3",
    name: "Chat #3",
    image: "",
    unreadMessagesCount: 0,
    lastMessageTime: 1652180341257,
    lastMessageText:
      "Какое-то длинное сообщение с кучей кууууучей куууууучччччччей слоооооов!!!!!!!!!!!!!!!!!!",
    isGroup: true,
  },
  {
    id: "4",
    name: "Some long chat name, that will not fit into small chat box",
    image: "",
    unreadMessagesCount: 100,
    lastMessageTime: 1652180341257,
    lastMessageText: "no comments, man",
    isGroup: false,
  },
];

export class ChatPage extends Block {
  protected initChildren() {
    this.children.aside = new ChatAsideArea({
      chats: dummyChats,
      selectedChat: null,
      onChatClick: (id: string) => this.handleChatClick(id),
    });

    this.children.main = new ChatMessagingArea({});
  }

  handleChatClick(chatId: string) {
    (this.children.aside as Block).setProps({
      selectedChat: chatId,
    });
    (this.children.main as Block).setProps({
      chat: dummyChats.find(({ id }) => id === chatId),
    });
  }

  render() {
    return this.compile(tmplFunc, {
      aside: this.children.aside,
      main: this.children.main,
    });
  }
}
