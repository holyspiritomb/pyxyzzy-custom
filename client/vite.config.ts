import { resolve } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { defineConfig, loadEnv, Plugin, createFilter, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";
// import checker from 'vite-plugin-checker';
import tsconfigPaths from "vite-tsconfig-paths";
import progress from 'vite-plugin-progress';

export default defineConfig(({ mode }) => {
  setEnv(mode);
  return {
    build: {
      minify: false,
      manifest: true,
    },
    plugins: [
      react(),
      envPlugin(),
      tsconfigPaths(),
      importPrefixPlugin(),
      // checker({
      //   overlay: { initialIsOpen: false },
      //   typescript: true,
      //   eslint: {
      //     lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      //   },
      //   enableBuild: false,
      // }),
      progress({
        format: 'Building :bar :percent',
      }),
    ],
  };
});

function setEnv(mode: string) {
	Object.assign(
		process.env,
		loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]),
	);
	process.env.NODE_ENV ||= mode;
	const { homepage } = JSON.parse(readFileSync("package.json", "utf-8"));
	process.env.PUBLIC_URL ||= homepage
		? `${
				homepage.startsWith("http") || homepage.startsWith("/")
					? homepage
					: `/${homepage}`
			}`.replace(/\/$/, "")
		: "";
}

// Expose `process.env` environment variables to your client code
// Migration guide: Follow the guide below to replace process.env with import.meta.env in your app, you may also need to rename your environment variable to a name that begins with VITE_ instead of REACT_APP_
// https://vitejs.dev/guide/env-and-mode.html#env-variables
function envPlugin(): Plugin {
  return {
    name: "env-plugin",
    config(_, { mode }) {
      const env = loadEnv(mode, ".", ["REACT_APP_", "NODE_ENV", "PUBLIC_URL"]);
      return {
        define: Object.fromEntries(
          Object.entries(env).map(([key, value]) => [
            `process.env.${key}`,
            JSON.stringify(value),
          ]),
        ),
      };
    },
  };
}


// To resolve modules from node_modules, you can prefix paths with ~
// https://create-react-app.dev/docs/adding-a-sass-stylesheet
// Migration guide: Follow the guide below
// https://vitejs.dev/config/shared-options.html#resolve-alias
function importPrefixPlugin(): Plugin {
	return {
		name: "import-prefix-plugin",
		config() {
			return {
				resolve: {
					alias: [{ find: /^~([^/])/, replacement: "$1" }],
				},
			};
		},
	};
}
