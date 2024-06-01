import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: devMode ? "inline" : false,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
      !devMode &&
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: true,
            drop_debugger: true,
          },
          output: { quote_style: 1 },
        }),
    ],
  },
];
