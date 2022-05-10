import { Block } from "../../utils/Block";
import tmplFunc from "./chat-page.hbs";
import "./chat-page.styl";

export class ChatPage extends Block {
  render() {
    return this.compile(tmplFunc);
  }
}
