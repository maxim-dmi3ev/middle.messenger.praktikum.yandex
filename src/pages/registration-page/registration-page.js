import {Component} from "../../utils/Component";
import tmplFunc from "./registration-page.hbs";
import {RegistrationForm} from "../../modules/registration-form";
import "./registration-page.styl";

export class RegistrationPage extends Component {
    render() {
        return tmplFunc({ form: Component.create(RegistrationForm) });
    }
}
