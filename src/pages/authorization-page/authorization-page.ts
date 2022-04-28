import { Component } from "../../utils/Component";
import tmplFunc from "./authorization-page.hbs";
import { AuthorizationForm } from "../../modules/authorization-form";
import "./authorization-page.styl";

export class AuthorizationPage extends Component {
  render() {
    return tmplFunc({ form: Component.create(AuthorizationForm, {}) });
  }
}
