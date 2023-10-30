import { renderDOM } from "src/utils/r";
import { App } from "./app";

const root = document.getElementById('root');
if (!root) throw new Error('Элемент root не найден!');

renderDOM(<App />, root);
