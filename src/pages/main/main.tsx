import { Flex } from "src/components/flex";
import { Link } from "src/components/link";

export const Main = () => {
	return (
		<div style={{ padding: '25px' }}>
			<Flex direction="column" gap="20px" align="center">
				<Link to="/authorization">Страница авторизации</Link>
				<Link to="/registration">Страница регистрации</Link>
				<Link to="/profile">Страница настройки пользователя</Link>
				<Link to="/chat">Страница чата</Link>
				<Link to="/404">Страница 404</Link>
				<Link to="/500">Страница 500</Link>
			</Flex>
		</div>
	);
};
