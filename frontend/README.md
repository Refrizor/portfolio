# React + TypeScript + Vite

## Rendering Markdown

Use `src/components/Markdown.tsx` anywhere you need formatted text. Pass a string;
blank lines separate paragraphs. It supports headings, **bold**, *italics*, links,
images, nested lists, blockquotes, inline and fenced code, tables, task lists,
strikethrough, and automatic URL links through `react-markdown` and `remark-gfm`.

```tsx
import Markdown from "./components/Markdown.tsx";

<Markdown className="about-copy">{`
## About me

I build **web applications** with [Express.js](https://expressjs.com).

- APIs and databases
- [Read more](/about)
`}</Markdown>
```

Internal and relative links use React Router when rendered inside a router.
Hash links and email links use native anchors; HTTP(S) links open in a new tab.
Outside a router, all links use native anchors. Raw HTML is displayed as text,
and unsafe URL protocols are filtered by the parser's default URL handling.

Override individual HTML elements with your own components as needed; the other
defaults remain in place:

```tsx
<Markdown components={{
    h2: ({children}) => <h2 className="h4">{children}</h2>,
    a: ({href, children}) => <a href={href}>{children}</a>,
}}>{content}</Markdown>
```

The wrapper accepts normal `div` attributes, including `className`, `id`, and
`style`. It produces block content, so place it inside a section or div rather
than a paragraph. Keep multiline source text flush left: four leading spaces
at the beginning of a block mean an indented code block in Markdown.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
