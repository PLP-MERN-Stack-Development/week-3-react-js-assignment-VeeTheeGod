# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

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

export default tseslint.config([
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
# Task Manager

A responsive React application built with Vite, Tailwind CSS, and React Router, featuring task management and API integration.

## Features
- Responsive design with Tailwind CSS
- Light/dark mode toggle
- Task management (add, complete, delete, filter)
- API integration with JSONPlaceholder
- Pagination for API data
- Local storage persistence
- Reusable components with proper state management

## Setup
1. Clone the repository
2. Install dependencies:
```bash
npm install

- Start the development server:
```bash
npm run dev
```
3. Open your browser and navigate to `http://localhost:5174`

## Technologies Used
- React 18.2.0
- Vite
- Tailwind CSS
- React Router
- JSONPlaceholder API
- Local Storage
- Axios


8. **Deployment**

To deploy to Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy
4. Add the deployed URL to README.md

This implementation includes:
- All required components with proper props and variants
- Responsive design with Tailwind CSS
- Light/dark mode with context
- Local storage persistence
- API integration with pagination
- Search and filter functionality
- Clean component architecture
- Proper state management with hooks
- Custom hook for local storage
- Animated transitions using Tailwind

The code follows React best practices with proper component separation, state management, and error handling. The application is fully responsive and works across different screen sizes.
