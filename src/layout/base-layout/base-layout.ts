import { Block } from "../../utils/Block";
import tmplFunc from "./base-layout.hbs";
import "./base-layout.styl";

type Props = { content: Block };

export class BaseLayout extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(tmplFunc, { content: this.props.content });
  }
}
