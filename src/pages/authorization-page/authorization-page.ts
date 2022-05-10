import { Block } from "../../utils/Block";
import tmplFunc from "./authorization-page.hbs";
import { AuthorizationForm } from "../../modules/authorization-form";
import "./authorization-page.styl";

export class AuthorizationPage extends Block {
  protected initChildren() {
    this.children.form = new AuthorizationForm();
  }

  render() {
    return this.compile(tmplFunc, {
      form: this.children.form,
    });
  }
}
