import {Component} from "../../utils/Component";
import tmplFunc from "./profile-form.hbs";
import {PseudoLink} from "../../components/pseudo-link/pseudo-link";
import "./profile-form.styl";

export class ProfileForm extends Component {
    render() {
        return tmplFunc({
            fields: [
            {name: "Почта", value: "po4ta@gmail.com"},
            {name: "Логин", value: "Sheldon"},
            {name: "Имя", value: "Шелдон"},
            {name: "Фамилия", value: "Купер"},
            {name: "Имя в чате", value: "SheldonFromBBT"},
            {name: "Телефон", value: "+7(903) 000 00 00"},
        ],
            dataChangeAction: Component.create(PseudoLink, {text: "Изменить данные"}),
            passwordChangeAction: Component.create(PseudoLink, {text: "Изменить пароль"}),
            exitAction: Component.create(PseudoLink, {text: "Выйти", type: "danger"}),
        });
    }
}
