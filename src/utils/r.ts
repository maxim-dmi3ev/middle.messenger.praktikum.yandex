const TEXT_ELEMENT = "TEXT ELEMENT";
function createTextElement(value: string): JSX.Element {
	return createElement(TEXT_ELEMENT, { nodeValue: value });
}

function isListener(name: string): boolean {
	return name.startsWith("on");
}

export function createElement(type: JSX.ElementType, config: any, ...args: (JSX.Element | 'string' | null | boolean)[]): JSX.Element {
	const props = Object.assign({}, config);

	props.children = args
		.flat()
		.filter((c) => c !== null && typeof c !== "boolean")
		.map(c => typeof c === 'string' || typeof c === 'number' ? createTextElement(c) : c) as JSX.Element[];

	if (typeof type === 'function') {
		return type(props);
	}

	return { type, props };
}

export function renderDOM(element: JSX.Element, parentDom: HTMLElement): void {
	const {props, type} = element;

	const dom = type === TEXT_ELEMENT
		? document.createTextNode('')
		: document.createElement(type);

	Object.keys(props)
		.filter(isListener)
		.forEach(name => {
			const eventType = name.toLowerCase().substring(2);
			// @ts-ignore
			dom.addEventListener(eventType, props[name]);
		});

	Object.keys(props)
		.filter(name => !isListener(name) && name != "children")
		.forEach(name => {
			if (name === 'style') {
				// @ts-ignore
				Object.keys(props[name]).forEach((styleKey) => {
					// @ts-ignore
					dom.style[styleKey] = props[name][styleKey];
				});
			} else {
				// @ts-ignore
				dom[name] = props[name];
			}
		});

	const childElements = props.children;
	childElements.forEach(childElement => renderDOM(childElement, dom as HTMLElement));

	parentDom.appendChild(dom);
}
