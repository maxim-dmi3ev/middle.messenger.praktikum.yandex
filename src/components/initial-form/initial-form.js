import { Component } from "../../utils/Component";
import tmplFunc from "./initial-form.hbs";
import { Button } from "../button";
import { PseudoLink } from "../pseudo-link/pseudo-link";
import "./initial-form.styl";

export class InitialForm extends Component {
  render() {
    const {
      inputs,
      mainButtonText = "",
      secondaryButtonText = "",
    } = this.props;
    return tmplFunc({
      inputs,
      mainButton: Component.create(Button, {
        text: mainButtonText,
        fullWidth: true,
      }),
      secondaryButton: Component.create(PseudoLink, {
        text: secondaryButtonText,
      }),
    });
  }
}
