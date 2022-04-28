import { Component } from "../../utils/Component";
import tmplFunc from "./base-layout.hbs";
import "./base-layout.styl";

export class BaseLayout extends Component<{ content: string }> {
  render() {
    return tmplFunc({ content: this.props.content });
  }
}
