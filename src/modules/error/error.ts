import tmplFunc from "./error.hbs";
import { Block } from "../../utils/block";
import "./error.styl";

type Props = {
  errorCode: string;
  errorText: string;
  imageSrc: string;
  goBackLink: string;
  goBackLinkText: string;
};

export class Error extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { errorCode, errorText, imageSrc, goBackLink, goBackLinkText } = this.props;
    return this.compile(tmplFunc, {
      errorCode,
      errorText,
      imageSrc,
      goBackLink,
      goBackLinkText,
    });
  }
}
