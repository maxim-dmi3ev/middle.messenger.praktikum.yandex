export type ValidationFunc = (value: any) => string | null;

export class Validator {
  static stringLengthValidation = (from: number, to: number) => (value: string) =>
    value.length < from || value.length > to ? `Длина должна быть от ${from} до ${to}` : null;

  static loginValidation = (value: string) =>
    /^[a-zA-Z][a-zA-Z0-9-_]*$/.test(value)
      ? null
      : "Логин должен начинаться с буквы и состоять только из латинских букв, цифр, _, -.";

  static passwordValidation = (value: string) =>
    /^.*[A-Z0-9].*$/.test(value)
      ? null
      : "Пароль должен состоять хотя бы из одной заглавной буквы или цифры";

  static emailValidation = (value: string) =>
    /^\b[\w.-]+@[\w.-]+\.\w{2,4}\b$/.test(value) ? null : "Невалидный email";

  static nameValidation = (value: string) =>
    /^([A-Z][a-z-]*)|([А-Я][а-я-]*)$/.test(value)
      ? null
      : "Имя должно содержать латинские или русский буквы. Первая буква должна быть заглавной";

  static phoneValidation = (value: string) =>
    /^(\+?7|8)(\d{3})(\d{6,11})$/.test(value) ? null : "Невалидный номер";

  private validations: Record<string, ValidationFunc[]> = {};

  register(field: string, validations: ValidationFunc[]) {
    if (this.validations[field]) {
      throw new Error("This field has been registered before!");
    }
    this.validations[field] = validations;
    return this;
  }

  validate(field: string, value: any) {
    const validations = this.validations[field];

    if (!validations) {
      throw new Error("No validations for such field!");
    }

    const validationResult = validations
      .map((validationFunc) => validationFunc(value))
      .filter((result) => Boolean(result)) as string[];

    return validationResult.length ? validationResult : undefined;
  }

  validateAll(fields: Record<string, any>) {
    return Object.entries(fields).reduce<Record<string, string[] | undefined>>(
      (acc, [field, value]) => {
        acc[field] = this.validate(field, value);
        return acc;
      },
      {}
    );
  }
}
