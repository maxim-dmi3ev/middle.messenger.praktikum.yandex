import {Component} from "../../utils/Component";
import tmplFunc from "./registration-form.hbs";
import {Input} from "../../components/input";
import {InitialForm} from "../../components/initial-form";

export class RegistrationForm extends Component {
    render() {
        return tmplFunc({
            form: Component.create(InitialForm, {
                inputs: [
                    Component.create(Input,{ name: "email", placeholder: "Введите почту", label: "Почта" }),
                    Component.create(Input,{ name: "login", placeholder: "Введите логин", label: "Логин" }),
                    Component.create(Input,{ name: "first_name", placeholder: "Введите имя", label: "Имя" }),
                    Component.create(Input,{ name: "second_name", placeholder: "Введите фамилию", label: "Фамилия" }),
                    Component.create(Input,{ name: "phone", placeholder: "Введите телефон", label: "Телефон" }),
                    Component.create(Input, { name: "password", placeholder: "Введите пароль", label: "Пароль", type: "password" }),
                    Component.create(Input, { name: "password_double", placeholder: "Введите пароль", label: "Пароль (еще раз)", type: "password" }),
                ],
                mainButtonText: "Создать профиль",
                secondaryButtonText: "Войти",
            }),
        });
    }
}
