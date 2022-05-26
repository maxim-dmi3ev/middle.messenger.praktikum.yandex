import { Block } from "../../utils/block";
import tmplFunc from "./avatar.hbs";
import ChatAvatar from "../../../static/chat-avatar.svg";
import "./avatar.styl";

type Props = {
  image?: string;
};

export class Avatar extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(tmplFunc, {
      image: this.props.image || ChatAvatar,
    });
  }
}
