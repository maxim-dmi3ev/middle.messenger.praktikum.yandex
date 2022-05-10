import tmplFunc from "./profile-photo.hbs";
import { Block } from "../../utils/Block";
import "./profile-photo.styl";

type Props = {
  photoUrl: string;
  caption: string;
};

export class ProfilePhoto extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { photoUrl, caption } = this.props;
    return this.compile(tmplFunc, { caption, photoUrl });
  }
}
