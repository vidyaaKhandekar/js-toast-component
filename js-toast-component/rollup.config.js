import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js", // Entry point
  output: [
    {
      file: "packageJson.main",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "packageJson.module",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minify the CSS
    }),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
