import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".tanstack/**", ".vinxi/**", "dist/**", "dist-library/**"]),
]);

export default eslintConfig;
