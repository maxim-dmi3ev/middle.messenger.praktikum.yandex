import tmplFunc from "./profile-form.hbs";
import { PseudoLink } from "../../components/pseudo-link";
import { Block } from "../../utils/block";
import "./profile-form.styl";
import { Link } from "../../components/link";
import { ROUTES } from "../../routes";

export class ProfileForm extends Block {
  protected initChildren() {
    this.children.dataChangeAction = new PseudoLink({
      text: "Изменить данные",
    });
    this.children.passwordChangeAction = new PseudoLink({
      text: "Изменить пароль",
    });
    this.children.exitAction = new Link({
      link: ROUTES.authorization,
      content: new PseudoLink({
        text: "Выйти",
        type: "danger",
      }),
    });
  }

  render() {
    return this.compile(tmplFunc, {
      fields: [
        { name: "Почта", value: "po4ta@gmail.com" },
        { name: "Логин", value: "Sheldon" },
        { name: "Имя", value: "Шелдон" },
        { name: "Фамилия", value: "Купер" },
        { name: "Имя в чате", value: "SheldonFromBBT" },
        { name: "Телефон", value: "+7(903) 000 00 00" },
      ],
      dataChangeAction: this.children.dataChangeAction,
      passwordChangeAction: this.children.passwordChangeAction,
      exitAction: this.children.exitAction,
    });
  }
}
