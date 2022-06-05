import { Block } from "../../utils/block";
import tmplFunc from "./authorization-form.hbs";
import { Input } from "../../components/input";
import { InitialForm } from "../../components/initial-form";
import { Validator } from "../../utils/validator";
import { Router } from "../../utils/router";
import { ROUTES } from "../../routes";

export class AuthorizationForm extends Block {
  private validator = new Validator();

  private isSubmitting = false;

  constructor() {
    super({});

    this.validator
      .register("login", [Validator.stringLengthValidation(3, 20), Validator.loginValidation])
      .register("password", [
        Validator.stringLengthValidation(8, 40),
        Validator.passwordValidation,
      ]);
  }

  protected componentDidMount() {
    this.initInputsValidation();
  }

  protected initChildren() {
    this.elements.login = new Input({
      name: "login",
      placeholder: "Введите логин",
      label: "Логин",
    });

    this.elements.password = new Input({
      name: "password",
      placeholder: "Введите пароль",
      label: "Пароль",
      type: "password",
    });

    this.children.form = new InitialForm({
      inputs: [this.elements.login as Input, this.elements.password as Input],
      mainButtonText: "Войти",
      secondaryButtonText: "Нет профиля?",
      onSecondaryButtonClick: this.handleSecondaryButtonClick,
      events: {
        submit: (evt: SubmitEvent) => {
          this.handleSubmit(evt);
        },
      },
    });
  }

  private handleSecondaryButtonClick() {
    new Router().go(ROUTES.registration);
  }

  private handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();

    const target = evt.target as HTMLFormElement;
    const loginElement = target.elements[0] as HTMLInputElement;
    const passwordElement = target.elements[1] as HTMLInputElement;

    this.isSubmitting = true;

    const loginErrors = this.validateInput(loginElement.name, loginElement.value);
    const passwordErrors = this.validateInput(passwordElement.name, passwordElement.value);

    if (!loginErrors && !passwordErrors) {
      console.log({ login: loginElement.value, password: passwordElement.value });
      new Router().go(ROUTES.chat);
    }

    this.isSubmitting = false;
  }

  private initInputsValidation() {
    (this.elements.login as Input)
      .getInput()
      .addEventListener("blur", (evt) => this.handleFocus(evt));
    (this.elements.password as Input)
      .getInput()
      .addEventListener("blur", (evt) => this.handleFocus(evt));
  }

  private handleFocus(evt: FocusEvent) {
    if (this.isSubmitting) return;
    const { name, value } = evt.target as HTMLInputElement;
    this.validateInput(name, value);
  }

  private validateInput(name: string, value: string) {
    const errors = this.validator.validate(name, value);

    this.elements[name].setProps({
      error: errors ? errors[0] : undefined,
      value,
    });

    this.initInputsValidation();

    return errors;
  }

  render() {
    return this.compile(tmplFunc, {
      form: this.children.form,
    });
  }
}
