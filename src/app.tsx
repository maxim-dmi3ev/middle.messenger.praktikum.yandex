import { createElement, renderDOM } from 'src/utils/r';
import styles from './app.module.styl';

type TAppProps = { name: string; };
const App = ({ name }: TAppProps) => {
	return (
		<div className={styles.container}>
			Hello, <b>{name}</b>!
		</div>
	);
};

const el = document.getElementById('app');

if (el) {
	renderDOM(<App name={"world"} />, el);
}
