import { Component } from "../../utils/Component";
import tmplFunc from "./pseudo-link.hbs";
import "./pseudo-link.styl";

export class PseudoLink extends Component<{
  text?: string;
  type?: "prime" | "danger";
}> {
  render() {
    const { text = "", type = "prime" } = this.props;
    const classNames = `pseudo-link_${type}`;
    return tmplFunc({ text, classNames });
  }
}
