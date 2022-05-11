import { Block } from "../../utils/block";
import tmplFunc from "./icon.hbs";

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export class Icon extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, size = 24, color = "#fff" } = this.props;

    return this.compile(tmplFunc, { name, size, color });
  }
}
