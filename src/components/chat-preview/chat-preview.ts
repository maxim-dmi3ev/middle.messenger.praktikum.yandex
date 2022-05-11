import { Block } from "../../utils/block";
import tmplFunc from "./chat-preview.hbs";
import { Chat } from "../../types/chat";
import { Avatar } from "../avatar";
import ChatAvatar from "../../../static/chat-avatar.svg";
import GroupChatAvatar from "../../../static/group-chat-avatar.svg";
import { cropText } from "../../utils/cropText";
import "./chat-preview.styl";

type Props = {
  isSelected: boolean;
  events: {
    click: (evt: MouseEvent) => void;
  };
} & Chat;

export class ChatPreview extends Block {
  constructor(props: Props) {
    super(props);
  }

  private getAvatarUrl() {
    const { isGroup } = this.props as Props;
    return isGroup ? GroupChatAvatar : ChatAvatar;
  }

  protected initChildren() {
    this.children.avatar = new Avatar({
      image: this.getAvatarUrl(),
    });
  }

  protected render(): DocumentFragment {
    const className = this.props.isSelected ? "chat-preview_selected" : "";

    return this.compile(tmplFunc, {
      className,
      id: this.props.id,
      avatar: this.children.avatar,
      name: cropText(this.props.name, 30),
      text: cropText(this.props.lastMessageText, 30),
      time: "10:30", // todo: remove placeholder
      unreadMessagesCount: this.props.unreadMessagesCount,
    });
  }
}
