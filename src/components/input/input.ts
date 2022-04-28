import { Component } from "../../utils/Component";
import templateFunc from "./input.hbs";
import "./input.styl";

export class Input extends Component<{
  name?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
}> {
  render() {
    const { name = "", label = "", placeholder = "", type = "text" } = this.props;
    return templateFunc({ name, label, placeholder, type });
  }
}
