import { Block } from "../../utils/block";
import tmplFunc from "./message-input.hbs";
import { IconButton } from "../icon-button";
import "./message-input.styl";

type Props = {
  events: {
    submit: (evt: SubmitEvent) => void;
  };
};

export class MessageInput extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren() {
    this.children.button = new IconButton({
      icon: "send",
      size: 35,
      color: "#0B8579",
      type: "submit",
    });
  }

  render() {
    return this.compile(tmplFunc, {
      button: this.children.button,
    });
  }
}
