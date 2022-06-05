import { Block } from "../../utils/block";
import tmplFunc from "./link.hbs";
import { Router } from "../../utils/router";
import "./link.styl";

type Props = {
  link: string;
  content: any;
};

export class Link extends Block<Props> {
  protected componentDidMount() {
    const link = this.getContent();
    link?.addEventListener("click", this.handleClick);
  }

  handleClick = (evt: MouseEvent) => {
    evt.preventDefault();
    new Router().go(this.props.link);
  };

  render() {
    return this.compile(tmplFunc, { link: this.props.link, content: this.props.content });
  }
}
