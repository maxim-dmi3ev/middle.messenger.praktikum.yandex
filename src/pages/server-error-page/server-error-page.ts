import tmplFunc from "./server-error-page.hbs";
import imageSrc from "../../../static/500.svg";
import { Error } from "../../modules/error";
import { Block } from "../../utils/block";
import "./server-error-page.styl";

export class ServerErrorPage extends Block {
  protected initChildren() {
    this.children.content = new Error({
      errorCode: "500",
      errorText: "Упс, что-то пошло не так... Уже фиксим",
      imageSrc,
      goBackLink: "/chat",
      goBackLinkText: "Вернуться на главную",
    });
  }

  render() {
    return this.compile(tmplFunc, {
      content: this.children.content,
    });
  }
}
