import { Component } from "../../utils/Component";
import tmplFunc from "./chat-page.hbs";
import "./chat-page.styl";

export class ChatPage extends Component {
  render() {
    return tmplFunc();
  }
}
