import { Block } from "../../utils/block";
import tmplFunc from "./input.hbs";
import "./input.styl";

export type Props = {
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  error?: string;
};

export class Input extends Block {
  constructor(props: Props) {
    super(props);
  }

  getInput() {
    return this.getContent()!.querySelector("input") as HTMLInputElement;
  }

  render() {
    const { name = "", value, label = "", placeholder = "", type = "text", error } = this.props;
    const className = error ? "input_error" : "";
    return this.compile(tmplFunc, { name, value, label, placeholder, type, error, className });
  }
}
