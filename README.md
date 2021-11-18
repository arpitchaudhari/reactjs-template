We are only going to use TypeScript in our project for type checking. We are going to eventually use Babel to do the code transpilation. So, the compiler options in our `tsconfig.json` are focused on type checking, not code transpilation.

- `lib` : Standard typing to be included in the type checking process. In our case, we have choosen to use types for the browser's DOM and the latest version of ECMAScript.

- `allowJS` : Whether to allow JS files to be compiled.

- `allowSyntheticDefaultImports` : This allows default imports from modules with no default export in the type checking process.

- `skipLibCheck` : Whether to skip type checking of all the type declaration files (\*.d.ts)

- `esModuleInterop` : This enables compatibility with Babel.

- `strict` : This sets the level of type checking very high. When this is `true`, the project is said to be running in strict mode.

- `forceConsistentCasingInFileNames` : Ensures that the casing of referenced file names is consistent during the type checking process.

- `moduleResolution` : How module dependencies get resolved, which is node for our project.

- `resolveJsonModule` : This allows modules to be in `json` files which are useful for configuration files.

- `noEmit` : Whether to suppress TS generating code during the compilation process. This is `true` in our project because Babel will be generating JS code.

- `jsx` : Whether to support JSX in `tsx` files.

- `include` : These are the files and folders for TS to check. In our project, we have specified all the files in the `src` folder.

## Babel

It converts React and Typescript code to Javascript.

Babel Plugins:
| Packages | Description |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `@babel/core` | Core babel library |
| `@babel/preset-env` | Collection of plugins that allow to use latest Javascript features but still target browsers that don't support them. |
| `@babel/preset-react` | Collection of plugins that enable Babel to transform React code into Javascript. |
| `@babel/preset-typescript` | Collection of plugins that enable Babel to transform Typescript code into Javascript. |
| `@babel/plugin-transform-runtime` and `@babel/runtime` | Plugins that allow to use `async` and `await` Javascript features. |

## Eslint

Eslint can find problematic coding patterns or code that doesn't adhere to specific style guidelines.

| Packages                           | Description                                               |
| ---------------------------------- | --------------------------------------------------------- |
| `eslint`                           | Core ESLint Library                                       |
| `eslant-plugin-react`              | Contains some standard linting rules for React code.      |
| `eslint-plugin-react-hooks`        | Includes some linting rules for React hooks code.         |
| `@typescript-eslint/parser`        | Allows Typescript code to be linted.                      |
| `@typescript-eslint/eslint-plugin` | Contains some standard linting rules for Typescript code. |
