import { AuthorizationPage } from "./pages/authorization-page";
import { RegistrationPage } from "./pages/registration-page";
import { ChatPage } from "./pages/chat-page";
import { ProfilePage } from "./pages/profile-page";
import { NotFoundErrorPage } from "./pages/not-found-error-page";
import { ServerErrorPage } from "./pages/server-error-page";
import { renderDOM } from "./utils/renderDOM";
import "./styles/index.styl";

const routes = {
  "/authorization": AuthorizationPage,
  "/registration": RegistrationPage,
  "/chat": ChatPage,
  "/profile": ProfilePage,
  "/404": NotFoundErrorPage,
  "/500": ServerErrorPage,
};

const initApp = () => {
  const pageRoute = window.location.pathname.toLowerCase();

  const Route =
    pageRoute === "/" ? ChatPage : routes[pageRoute as keyof typeof routes] || NotFoundErrorPage;

  renderDOM("#app", new Route());
};

initApp();
