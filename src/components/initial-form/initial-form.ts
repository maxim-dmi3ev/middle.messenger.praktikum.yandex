import { Block } from "../../utils/Block";
import tmplFunc from "./initial-form.hbs";
import { Button } from "../button";
import { PseudoLink } from "../pseudo-link";
import { Input } from "../input";
import "./initial-form.styl";

type Props = {
  inputs: Input[];
  mainButtonText?: string;
  secondaryButtonText?: string;
  events: {
    submit: (evt: SubmitEvent) => void;
  };
};

export class InitialForm extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected initChildren() {
    this.children.mainButton = new Button({
      text: this.props.mainButtonText || "",
      type: "submit",
      fullWidth: true,
    });

    this.children.secondaryButton = new PseudoLink({
      text: this.props.secondaryButtonText || "",
      events: {
        click: () => this.handleNoProfileClick(),
      },
    });
  }

  handleNoProfileClick() {
    console.log("Go to Auth Page");
  }

  render() {
    const { inputs } = this.props;

    return this.compile(tmplFunc, {
      inputs,
      mainButton: this.children.mainButton,
      secondaryButton: this.children.secondaryButton,
    });
  }
}
