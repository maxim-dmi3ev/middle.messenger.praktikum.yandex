import { createElement, renderDOM } from './utils/r';

type TAppProps = { name: string; };
const App = ({ name }: TAppProps) => {
	return (
		<div id="container">
			Hello, <b>{name}</b>!
		</div>
	);
};

const el = document.getElementById('app');

if (el) {
	renderDOM(<App name={"world"} />, el);
}
