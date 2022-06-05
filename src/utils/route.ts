import { Block, BlockConstructor } from "./block";
import { renderDOM } from "./renderDOM";

type Props = { rootQuery: string };

export class Route {
  private pathname: string;

  private View: BlockConstructor;

  private props: Props;

  private block: Block | null = null;

  constructor(pathname: string, view: BlockConstructor, props: Props) {
    this.pathname = pathname;
    this.View = view;
    this.props = props;
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  render() {
    if (!this.block) {
      this.block = new this.View({});
      renderDOM(this.props.rootQuery, this.block);
      return;
    }
    this.block.show();
  }

  match(pathname: string) {
    return this.pathname === pathname;
  }
}
