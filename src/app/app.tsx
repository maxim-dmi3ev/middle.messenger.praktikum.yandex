import { Authorization } from "src/pages/authorization";
import { Registration } from "src/pages/registration";
import { Profile } from "src/pages/profile";

const ROUTES: Record<string, JSX.Element> = {
	'/authorization': <Authorization />,
	'/registration': <Registration />,
	'/profile': <Profile />
};

export const App = () => {
	return ROUTES[location.pathname] || <div>404</div>;
};
