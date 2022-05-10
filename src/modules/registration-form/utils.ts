import { Validator } from "../../utils/Validator";

export const INPUTS_CONFIGURATIONS = {
  email: {
    name: "email",
    placeholder: "Введите почту",
    label: "Почта",
    type: "text" as const,
    validation: [Validator.emailValidation],
  },
  login: {
    name: "login",
    placeholder: "Введите логин",
    label: "Логин",
    type: "text" as const,
    validation: [Validator.stringLengthValidation(3, 20), Validator.loginValidation],
  },
  first_name: {
    name: "first_name",
    placeholder: "Введите имя",
    label: "Имя",
    type: "text" as const,
    validation: [Validator.nameValidation],
  },
  second_name: {
    name: "second_name",
    placeholder: "Введите фамилию",
    label: "Фамилия",
    type: "text" as const,
    validation: [Validator.nameValidation],
  },
  phone: {
    name: "phone",
    placeholder: "Введите телефон",
    label: "Телефон",
    type: "text" as const,
    validation: [Validator.phoneValidation],
  },
  password: {
    name: "password",
    placeholder: "Введите пароль",
    label: "Пароль",
    type: "password" as const,
    validation: [Validator.stringLengthValidation(8, 40), Validator.passwordValidation],
  },
  password_double: {
    name: "password_double",
    placeholder: "Введите пароль",
    label: "Пароль (еще раз)",
    type: "password" as const,
    validation: [Validator.stringLengthValidation(8, 40), Validator.passwordValidation],
  },
};
