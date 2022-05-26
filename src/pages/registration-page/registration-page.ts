import tmplFunc from "./registration-page.hbs";
import { RegistrationForm } from "../../modules/registration-form";
import { Block } from "../../utils/block";
import "./registration-page.styl";

export class RegistrationPage extends Block {
  protected initChildren() {
    this.children.form = new RegistrationForm();
  }

  render() {
    return this.compile(tmplFunc, { form: this.children.form });
  }
}
