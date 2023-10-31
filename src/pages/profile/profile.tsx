import styles from './profile.module.styl';
import { Link } from "src/components/link";
import { Flex } from "../../components/flex";
import { Photo } from "./components/photo";
import { Form } from "./components/form";

export const Profile = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Link to="/chats">Назад</Link>
			</div>
			<Flex direction="column" align="center" gap="50px">
				<Photo />
				<Form />
			</Flex>
		</div>

	);
}
