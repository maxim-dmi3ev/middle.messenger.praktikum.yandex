declare namespace JSX {
	type ElementType = string | Function;

	type RElement<P extends object = { children: RElement[]; }> = {
		type: string;
		props: P;
	};

	type Element = RElement;

	interface IntrinsicElements {
		[eleName: string]: any;
	}
}
