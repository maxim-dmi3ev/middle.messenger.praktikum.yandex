import {Component} from "../../utils/Component";
import tmplFunc from "./authorization-form.hbs";
import {Input} from "../../components/input";
import {InitialForm} from "../../components/initial-form";

export class AuthorizationForm extends Component {
    render() {
        return tmplFunc({
            form: Component.create(InitialForm, {
                inputs: [
                    Component.create(Input,{ name: "login", placeholder: "Введите логин", label: "Логин" }),
                    Component.create(Input, { name: "password", placeholder: "Введите пароль", label: "Пароль", type: "password" }),
                ],
                mainButtonText: "Войти",
                secondaryButtonText: "Нет профиля?",
            }),
        });
    }
}
