import {Component} from "../../utils/Component";
import {BaseLayout} from "../../layout/base-layout";
import imageSrc from "../../../static/404.svg";
import {ErrorPage} from "../../modules/error-page";

export class NotFoundErrorPage extends Component {
    render() {
        return Component.create(BaseLayout, {
            content: Component.create(ErrorPage, {
                errorCode: "404",
                errorText: "Упс, похоже вы не туда попали...",
                imageSrc,
                goBackLink: "/chat",
                goBackLinkText: "Вернуться на главную",
            }),
        });
    }
}
