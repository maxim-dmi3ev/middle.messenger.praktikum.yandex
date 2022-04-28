import { Component } from "../../utils/Component";
import tmplFunc from "./button.hbs";
import "./button.styl";

export class Button extends Component<{text: string, fullWidth: boolean}> {
  render() {
    const { text, fullWidth } = this.props;
    const classNames = `${fullWidth ? "button_full-width" : ""}`;
    return tmplFunc({ text, fullWidth, classNames });
  }
}
