import { Component } from "../../utils/Component";
import { BaseLayout } from "../../layout/base-layout";
import imageSrc from "../../../static/500.svg";
import { ErrorPage } from "../../modules/error-page";

export class ServerErrorPage extends Component {
  render() {
    return Component.create(BaseLayout, {
      content: Component.create(ErrorPage, {
        errorCode: "500",
        errorText: "Упс, что-то пошло не так... Уже фиксим",
        imageSrc,
        goBackLink: "/chat",
        goBackLinkText: "Вернуться на главную",
      }),
    });
  }
}
