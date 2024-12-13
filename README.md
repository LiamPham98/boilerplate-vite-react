```shell

+-----------------------------------------+
|                                         |
|      ______   __       __   ______      |
|     /      \ |  \     /  \ /      \     |
|    |  $$$$$$\| $$\   /  $$|  $$$$$$\    |
|    | $$   \$$| $$$\ /  $$$| $$___\$$    |
|    | $$      | $$$$\  $$$$ \$$    \     |
|    | $$   __ | $$\$$ $$ $$ _\$$$$$$\    |
|    | $$__/  \| $$ \$$$| $$|  \__| $$    |
|     \$$    $$| $$  \$ | $$ \$$    $$    |
|      \$$$$$$  \$$      \$$  \$$$$$$     |
|                                         |
+-----------------------------------------+

```

Built by [Trung Phạm](https://www.linkedin.com/in/trungpham98/)

### Features

- ⚡ [React.js](https://react.dev/)
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ⌨️ Form handling with [Mantine](https://mantine.dev/)
- 🔴 Validation library with [Zod](https://zod.dev/)
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 [Husky](https://typicode.github.io/husky/) for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with [Commitlint](https://commitlint.js.org/)
- 📓 Write standard compliant commit messages with [Commitizen](https://commitlint.js.org/reference/rules.html#type-enum)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings and Extensions
- 🌱 Phosphor [Icons](https://phosphoricons.com/)

### Requirements

- Node.js 20+ and pnpm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://gitlab.yody.io/unicorn/Omnichannel/e-commerce/yobuggy/fe/buggy-web-bo.git
cd buggy-web-bo
npm i -g pnpm
pnpm install
```

Start source

```shell
pnpm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Project structure

```shell
.
├── README.md               # Documentation for the project, including how to set up and use the application.
├── .husky                  # Configuration for Husky, which is used to manage Git hooks (e.g., pre-commit or pre-push hooks).
├── .vscode                 # VSCode-specific configuration files, such as recommended extensions or workspace settings.
├── public                  # Static public assets that are served directly (e.g., images, favicon, robots.txt).
├── index.html              # Main HTML file that acts as the entry point for the application.
├── src                     # Source code for the application.
│   ├── components          # React components responsible for building the UI.
│   │   ├── atoms           # Small, reusable UI components (e.g., buttons, input fields, icons).
│   │   ├── molecules       # Combinations of atoms to form slightly more complex UI components (e.g., a form field with a label and input).
│   │   ├── organisms       # Complex and reusable components made from atoms and molecules (e.g., headers, footers, or cards).
│   ├── core                # Contains core logic and Clean Architecture layers.
│   │   ├── application     # Application-level logic and business rules.
│   │   │   ├── repositories # Interfaces for repositories, defining how data should be handled (e.g., CRUD operations).
│   │   │   ├── services    # Business services that interact with repositories and execute application logic.
│   │   │   ├── use-cases   # Specific use cases for the application, implementing business logic using services and repositories.
│   │   ├── entities        # Domain entities and business logic.
│   │   │   ├── models      # Domain models representing the core data structures (e.g., User, Product).
│   │   │   ├── dto         # Data Transfer Objects used to define the shape of data sent or received.
│   │   ├── infrastructure  # Handles communication with external systems (e.g., APIs).
│   │   │   ├── services    # Parameter configurations and request structures for API interactions.
│   │   │   ├── repositories # Concrete implementations of repository interfaces for API communication.
│   ├── hooks               # Custom React hooks for managing reusable logic (e.g., useFetch, useAuth).
│   ├── libs                # Configuration for third-party libraries (e.g., Axios, i18n, or any library-specific setup).
│   ├── store               # State management setup (e.g., Redux, Zustand, or Context API configurations).
│   ├── styles              # Global or component-specific styles (e.g., CSS, SCSS, or Tailwind CSS imports).
│   ├── utils               # Utility functions and helpers (e.g., date formatters, validation utilities).
├── tailwind.config.js      # Configuration file for Tailwind CSS, customizing the design system (e.g., colors, spacing).
└── tsconfig.json           # TypeScript configuration file for defining project-specific TypeScript settings.
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
pnpm commit
```

---

Made with ♥ by Team
