declare namespace JSX {
	type ElementType = string | Function;

	type RChildren = (JSX.Element | 'string' | null | boolean)[];

	type RElement<P extends object = { children: RElement[]; }> = {
		type: string;
		props: P;
	};

	type Element = RElement;

	interface IntrinsicElements {
		[eleName: string]: any;
	}
}

declare function createElement(type: JSX.ElementType, config: any, ...args: (JSX.Element | 'string' | null | boolean)[]): JSX.Element;
