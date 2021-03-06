import { Block } from "../../utils/block";
import tmplFunc from "./chats-list.hbs";
import { Chat } from "../../types/chat";
import { ChatPreview } from "../chat-preview";

type Props = {
  selectedChat: string | null;
  chats: Chat[];
  onChatClick: (id: string) => void;
};

export class ChatsList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (oldProps.selectedChat !== newProps.selectedChat) {
      (this.children.chats as ChatPreview[]).forEach((chat) => {
        chat.setProps({
          isSelected: newProps.selectedChat === chat.props.id,
        });
      });
      return true;
    }
    return false;
  }

  protected initChildren() {
    this.children.chats = this.props.chats.map(
      (chat) =>
        new ChatPreview({
          ...chat,
          isSelected: this.props.selectedChat === chat.id,
          events: {
            click: (evt: MouseEvent) => this.handleChatClick(evt),
          },
        })
    );
  }

  handleChatClick(evt: MouseEvent) {
    const { id } = (evt.currentTarget as HTMLElement).dataset;
    if (id) {
      this.props.onChatClick(id);
    }
  }

  protected render(): DocumentFragment {
    return this.compile(tmplFunc, {
      chats: this.children.chats,
    });
  }
}
