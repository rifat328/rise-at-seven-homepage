import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    "node_modules/**",
    // Ignore Next.js build output at any depth (covers nested project copies too):
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/coverage/**",
    // Legacy duplicated project folder:
    "rise-at-seven/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
