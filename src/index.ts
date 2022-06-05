import { AuthorizationPage } from "./pages/authorization-page";
import { RegistrationPage } from "./pages/registration-page";
import { ChatPage } from "./pages/chat-page";
import { ProfilePage } from "./pages/profile-page";
import { NotFoundErrorPage } from "./pages/not-found-error-page";
import { ServerErrorPage } from "./pages/server-error-page";
import { Router } from "./utils/router";
import { ROUTES } from "./routes";
import "./styles/index.styl";

const initApp = () => {
  new Router("#app")
    .use(ROUTES.registration, RegistrationPage)
    .use(ROUTES.authorization, AuthorizationPage)
    .use(ROUTES.chat, ChatPage)
    .use(ROUTES.profile, ProfilePage)
    .use(ROUTES.notFound, NotFoundErrorPage)
    .use(ROUTES.serverError, ServerErrorPage)
    .start();
};

initApp();
