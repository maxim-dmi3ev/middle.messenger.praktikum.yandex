import { Block } from "../../utils/block";
import tmplFunc from "./icon-button.hbs";
import { Icon } from "../icon";
import "./icon-button.styl";

type Props = {
  icon: string;
  size?: number;
  color?: string;
  type?: "button" | "submit" | "reset";
};

export class IconButton extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  initChildren() {
    this.children.icon = new Icon({
      name: this.props.icon,
      size: this.props.size,
      color: this.props.color,
    });
  }

  render() {
    return this.compile(tmplFunc, {
      icon: this.children.icon,
      type: this.props.type || "button",
    });
  }
}
