import {defineConfig} from 'vite'

export default defineConfig({
	esbuild: {
		jsxInject: `import { createElement } from "src/utils/r";`,
	},
	resolve: {
		alias: {
			src: '/src',
		},
	}
});
