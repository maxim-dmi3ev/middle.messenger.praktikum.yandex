import tmplFunc from "./error.hbs";
import { Block } from "../../utils/block";
import "./error.styl";
import { Link } from "../../components/link";

type Props = {
  errorCode: string;
  errorText: string;
  imageSrc: string;
  goBackLink: string;
  goBackLinkText: string;
};

export class Error extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren() {
    this.children.goBackLink = new Link({
      link: this.props.goBackLink,
      content: this.props.goBackLinkText,
    });
  }

  render() {
    const { errorCode, errorText, imageSrc } = this.props;
    return this.compile(tmplFunc, {
      errorCode,
      errorText,
      imageSrc,
      goBackLink: this.children.goBackLink,
    });
  }
}
