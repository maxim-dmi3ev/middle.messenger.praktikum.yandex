import { Block } from "../../utils/block";
import tmplFunc from "./button.hbs";
import "./button.styl";

type Props = {
  text: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
};

export class Button extends Block<Props> {
  constructor(props: Props) {
    super({ type: "button", ...props });
  }

  render() {
    const { text, fullWidth, type } = this.props;
    const classNames = `${fullWidth ? "button_full-width" : ""}`;
    return this.compile(tmplFunc, { text, type, fullWidth, classNames });
  }
}
