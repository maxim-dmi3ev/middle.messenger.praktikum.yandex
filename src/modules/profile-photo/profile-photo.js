import {Component} from "../../utils/Component";
import tmplFunc from "./profile-photo.hbs";
import "./profile-photo.styl";

export class ProfilePhoto extends Component {
    render() {
        const { photoUrl, caption } = this.props;
        return tmplFunc({ caption, photoUrl, });
    }
}
