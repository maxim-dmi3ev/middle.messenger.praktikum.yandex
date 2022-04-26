import { Component } from "../../utils/Component";
import templateFunc from "./input.hbs";
import "./input.styl";

export class Input extends Component {
  render() {
    const {
      name = "",
      label = "",
      placeholder = "",
      type = "text",
    } = this.props;
    return templateFunc({ name, label, placeholder, type });
  }
}
