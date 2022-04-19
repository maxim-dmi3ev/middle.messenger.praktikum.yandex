import {Component} from "../../utils/Component";
import tmplFunc from "./pseudo-link.hbs";
import "./pseudo-link.styl";

export class PseudoLink extends Component {
    render() {
        const { text = "" } = this.props;
        return tmplFunc({ text });
    }
}
