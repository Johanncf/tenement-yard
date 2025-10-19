import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "./wwwroot/js",
		emptyOutDir: true,
		rollupOptions: {
			input: "./assets/js/site.js",
		},
		lib: {
			entry: ["./assets/js/site.js"],
			fileName: `site.js`,
			name: "tenement-yard",
		},
	},
});
