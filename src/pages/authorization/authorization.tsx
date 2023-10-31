import { Flex } from "src/components/flex";
import { Input } from "src/components/input";
import styles from './authorization.module.styl';
import { Button } from "../../components/button";
import { Link } from "src/components/link";

export const Authorization = () => {
	return (
		<div className={styles.root}>
			<Flex direction="column" gap="50px">
				<h1 className={styles.title}>Вход</h1>
				<Input name="login" placeholder="Введите логин" label="Логин" />
				<Input name="password" placeholder="Введите пароль" label="Пароль" type="password" />
			</Flex>
			<Flex direction="column" gap="10px" align="center">
				<Button stretched>Войти</Button>
				<Link>Нет профиля?</Link>
			</Flex>
		</div>
	);
};
