import tmplFunc from "./registration-form.hbs";
import { Input } from "../../components/input";
import { InitialForm } from "../../components/initial-form";
import { Block } from "../../utils/block";
import { Validator } from "../../utils/validator";
import { INPUTS_CONFIGURATIONS } from "./utils";

export class RegistrationForm extends Block {
  private validator = new Validator();

  private isSubmitting = false;

  constructor() {
    super();
    this.initValidator();
  }

  private initValidator() {
    Object.entries(INPUTS_CONFIGURATIONS).forEach(([name, { validation }]) => {
      this.validator.register(name, validation);
    });
  }

  protected componentDidMount() {
    this.initInputsValidation();
  }

  private initInputsValidation() {
    Object.entries(INPUTS_CONFIGURATIONS).forEach(([name]) => {
      (this.elements[name] as Input)
        .getInput()
        .addEventListener("blur", (evt) => this.handleFocus(evt));
    });
  }

  protected initChildren() {
    const inputs = Object.entries(INPUTS_CONFIGURATIONS).map(([inputName, configuration]) => {
      const { name, placeholder, label, type } = configuration;
      const input = new Input({ name, placeholder, label, type });
      this.elements[inputName] = input;
      return input;
    });

    this.children.form = new InitialForm({
      inputs,
      mainButtonText: "Создать профиль",
      secondaryButtonText: "Войти",
      events: {
        submit: (evt: SubmitEvent) => {
          this.handleSubmit(evt);
        },
      },
    });
  }

  private handleSubmit(evt: SubmitEvent) {
    evt.preventDefault();

    this.isSubmitting = true;

    const form = evt.target as HTMLFormElement;
    const inputsState = Object.keys(INPUTS_CONFIGURATIONS).reduce<{
      inputs: Record<string, any>;
      errors: Record<string, string[] | undefined>;
      errorsLength: number;
    }>(
      (acc, name) => {
        const { value } = form[name];
        const errors = this.validateInput(name, value, form);
        acc.inputs[name] = value;
        acc.errors[name] = errors;
        acc.errorsLength += errors?.length || 0;
        return acc;
      },
      { inputs: {}, errors: {}, errorsLength: 0 }
    );

    if (inputsState.errorsLength === 0) {
      console.log(inputsState.inputs);
    }

    this.isSubmitting = false;
  }

  private handleFocus(evt: FocusEvent) {
    if (this.isSubmitting) {
      return;
    }
    const { name, value } = evt.target as HTMLInputElement;
    this.validateInput(name, value);
  }

  private validateInput(name: string, value: string, form?: HTMLFormElement) {
    const errors = this.validator.validate(name, value) || [];

    if (form && name === "password_double") {
      if (form.password.value !== form.password_double.value) {
        errors.push("Пароли должны совпадать");
      }
    }

    this.elements[name].setProps({
      error: errors.length ? errors[0] : undefined,
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
