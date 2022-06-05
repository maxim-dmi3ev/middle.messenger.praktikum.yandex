import { Block } from "../../utils/block";
import tmplFunc from "./chat-aside-area.hbs";
import { Chat } from "../../types/chat";
import { ChatsList } from "../../components/chats-list";
import { Avatar } from "../../components/avatar";
import ProfilePhoto from "../../../static/profile-photo.png";
import { IconButton } from "../../components/icon-button";
import "./chat-aside-area.styl";
import { Link } from "../../components/link";
import { ROUTES } from "../../routes";

type Props = {
  selectedChat: number | null;
  chats: Chat[];
  onChatClick: (id: string) => void;
};

export class ChatAsideArea extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps.selectedChat !== newProps.selectedChat) {
      (this.children.chatsList as Block).setProps({
        selectedChat: newProps.selectedChat,
      });
      return true;
    }
    return false;
  }

  initChildren() {
    this.children.profileAvatar = new Link({
      link: ROUTES.profile,
      content: new Avatar({ image: ProfilePhoto }),
    });

    this.children.chatsList = new ChatsList({
      chats: this.props.chats,
      selectedChat: null,
      onChatClick: this.props.onChatClick,
    });

    this.children.createChatAction = new IconButton({ icon: "edit", size: 30 });
  }

  render() {
    return this.compile(tmplFunc, {
      profileAvatar: this.children.profileAvatar,
      chatsList: this.children.chatsList,
      createChatAction: this.children.createChatAction,
    });
  }
}
