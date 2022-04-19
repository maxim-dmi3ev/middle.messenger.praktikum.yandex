import {Component} from "../../utils/Component";
import {BaseLayout} from "../../layout/base-layout";
import tmplFunc from "./error-page.hbs";
import "./error-page.styl";

export class ErrorPage extends Component {
    render() {
        const { errorCode, errorText, imageSrc, goBackLink, goBackLinkText, } = this.props;
        return Component.create(BaseLayout, {
            content: tmplFunc({ errorCode, errorText, imageSrc, goBackLink, goBackLinkText }),
        });
    }
}
