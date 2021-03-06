import { Block } from "../../utils/block";
import tmplFunc from "./pseudo-link.hbs";
import "./pseudo-link.styl";

type Props = {
  text?: string;
  type?: "prime" | "danger";
  events?: {
    click: (evt: MouseEvent) => void;
  };
};

export class PseudoLink extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { text = "", type = "prime" } = this.props;
    const classNames = `pseudo-link_${type}`;

    return this.compile(tmplFunc, { text, classNames });
  }
}
