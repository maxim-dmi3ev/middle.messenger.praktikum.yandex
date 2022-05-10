import { Block } from "../../utils/Block";
import tmplFunc from "./chat-messaging-area.hbs";
import { Chat } from "../../types/chat";
import { Avatar } from "../../components/avatar";
import { IconButton } from "../../components/icon-button";
import { MessageInput } from "../../components/message-input";
import "./chat-messaging-area.styl";

type Props = {
  chat?: Chat;
};

export class ChatMessagingArea extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren() {
    this.children.avatar = new Avatar({ image: this.props.chat?.image });
    this.children.settings = new IconButton({ icon: "more_vert", size: 33 });
    this.children.messageInput = new MessageInput({
      events: {
        submit: (evt: SubmitEvent) => {
          this.handleSubmit(evt);
        },
      },
    });
  }

  private handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const message = form.message.value;

    if (message) {
      console.log({ message });
    }
  }

  render() {
    return this.compile(tmplFunc, {
      isChatSelected: Boolean(this.props.chat),
      name: this.props.chat?.name,
      avatar: this.children.avatar,
      settings: this.children.settings,
      messageInput: this.children.messageInput,
    });
  }
}
