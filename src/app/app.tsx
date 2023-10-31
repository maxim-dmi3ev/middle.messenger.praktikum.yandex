import { Authorization } from "src/pages/authorization";
import { Registration } from "src/pages/registration";
import { Profile } from "src/pages/profile";
import { Chat } from "../pages/chat";
import { NotFound } from "../pages/not-found";
import { ServerError } from "../pages/server-error";
import { Main } from "../pages/main";

const ROUTES: Record<string, JSX.Element> = {
  "/authorization": <Authorization />,
  "/registration": <Registration />,
  "/profile": <Profile />,
  "/chat": <Chat />,
  "/404": <NotFound />,
  "/500": <ServerError />,
  "/": <Main />,
};

export const App = () => {
  const route = ROUTES[location.pathname];

  if (!route) {
    return <NotFound />;
  }

  return route;
};
