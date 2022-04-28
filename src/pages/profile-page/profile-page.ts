import { Component } from "../../utils/Component";
import tmplFunc from "./profile-page.hbs";
import { BaseLayout } from "../../layout/base-layout";
import { ProfilePhoto } from "../../modules/profile-photo";
import photoUrl from "../../../static/profile-photo.png";
import { ProfileForm } from "../../modules/profile-form";
import "./profile-page.styl";

export class ProfilePage extends Component {
  render() {
    return Component.create(BaseLayout, {
      content: tmplFunc({
        photo: Component.create(ProfilePhoto, {
          caption: "Шелдон Купер",
          photoUrl,
        }),
        form: Component.create(ProfileForm, {}),
      }),
    });
  }
}
