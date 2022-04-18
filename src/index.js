import "./style.styl";
import templateFunction from "./test.hbs";

document.body.innerHTML = templateFunction({name: "World"});
