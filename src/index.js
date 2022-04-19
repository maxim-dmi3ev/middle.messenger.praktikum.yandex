import { AuthorizationPage } from "./pages/authorization-page";
import { RegistrationPage } from "./pages/registration-page";
import { ChatPage } from "./pages/chat-page";
import { ProfilePage } from "./pages/profile-page";
import { NotFoundErrorPage } from "./pages/not-found-error-page";
import { ServerErrorPage } from "./pages/server-error-page";
import { Component } from "./utils/Component";
import "./styles";

const routes = {
  "/authorization": AuthorizationPage,
  "/registration": RegistrationPage,
  "/chat": ChatPage,
  "/profile": ProfilePage,
  "/404": NotFoundErrorPage,
  "/500": ServerErrorPage,
};

const initApp = () => {
  const { pathname } = location;
  const currentRoute = routes[pathname.toLowerCase()] || NotFoundErrorPage;

  document.getElementById("app").innerHTML = Component.create(currentRoute);
};

initApp();
