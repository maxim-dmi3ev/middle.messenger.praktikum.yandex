import tmplFunc from "./not-found-error-page.hbs";
import imageSrc from "../../../static/404.svg";
import { Error } from "../../modules/error";
import { Block } from "../../utils/block";
import { ROUTES } from "../../routes";
import "./not-found-error-page.styl";

export class NotFoundErrorPage extends Block {
  protected initChildren() {
    this.children.content = new Error({
      errorCode: "404",
      errorText: "Упс, похоже вы не туда попали...",
      imageSrc,
      goBackLink: ROUTES.chat,
      goBackLinkText: "Вернуться на главную",
    });
  }

  render() {
    return this.compile(tmplFunc, {
      content: this.children.content,
    });
  }
}
