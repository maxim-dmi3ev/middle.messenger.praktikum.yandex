import { Block } from "../../utils/block";
import tmplFunc from "./profile-page.hbs";
import { ProfilePhoto } from "../../modules/profile-photo";
import photoUrl from "../../../static/profile-photo.png";
import { ProfileForm } from "../../modules/profile-form";
import "./profile-page.styl";

export class ProfilePage extends Block {
  protected initChildren() {
    this.children.photo = new ProfilePhoto({
      caption: "Шелдон Купер",
      photoUrl,
    });
    this.children.form = new ProfileForm({});
  }

  render() {
    return this.compile(tmplFunc, {
      photo: this.children.photo,
      form: this.children.form,
    });
  }
}
