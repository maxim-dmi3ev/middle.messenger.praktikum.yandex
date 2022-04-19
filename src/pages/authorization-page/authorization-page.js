import {Component} from "../../utils/Component";
import tmplFunc from "./authorization-page.hbs";
import "./authorization-page.styl";
import { AuthorizationForm } from "../../modules/authorization-form";

export class AuthorizationPage extends Component {
    render() {
        return tmplFunc({ form: Component.create(AuthorizationForm) });
    }
}
