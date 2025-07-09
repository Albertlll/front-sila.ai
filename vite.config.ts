import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "/front-sila.ai",
	resolve: {
		alias: {
			app: "/src/app",
			entities: "/src/entities",
			features: "/src/features",
			pages: "/src/pages",
			shared: "/src/shared",
			widgets: "/src/widgets",
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler", // or "modern"
			},
		},
	},
});
