import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".tanstack/**", ".vinxi/**", "dist/**"]),
]);

export default eslintConfig;
