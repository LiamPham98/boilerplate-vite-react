```shell

 /$$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$  /$$     /$$
| $$__  $$| $$  | $$ /$$__  $$ /$$__  $$|  $$   /$$/
| $$  \ $$| $$  | $$| $$  \__/| $$  \__/ \  $$ /$$/
| $$$$$$$ | $$  | $$| $$ /$$$$| $$ /$$$$  \  $$$$/
| $$__  $$| $$  | $$| $$|_  $$| $$|_  $$   \  $$/
| $$  \ $$| $$  | $$| $$  \ $$| $$  \ $$    | $$
| $$$$$$$/|  $$$$$$/|  $$$$$$/|  $$$$$$/    | $$
|_______/  \______/  \______/  \______/     |__/

```

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
- 🚨 Error Monitoring with [DATADOG](https://docs.datadoghq.com/real_user_monitoring/guide/monitor-your-nextjs-app-with-rum/?tab=npm)
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
├── README.md               # README file
├── .husky                  # Husky configuration
├── .vscode                 # VSCode configuration
├── public                  # Public assets folder
├── index.html
├── src
│   ├── components          # React components
│ 	│	├── atoms					    # These are the most basic UI components that cannot be broken down further.
│ 	│	├── molecules				  # Molecules are combinations of atoms that form simple, functional components.
│ 	│	├── organisms				  # Organisms are combinations of molecules and/or atoms that form more complex and reusable
│   ├── core                # Core logic
│   │ ├── domain            # Business Logic
│   │ │ ├── entities        # Enterprise business rules
│   │ │ ├── services        # application-specific business rules
│   │ ├── infras            # The layer directly interfacing with the API.
│   │ │ ├── dto             # Params Request
│   │ │ ├── repositories    # Communicates with APIs.
│   ├── hooks               # Type definitions
│   ├── libs                # 3rd party libraries configuration
│   ├── store               # Templates folder
│   ├── styles              # Styles folder
│   ├── utils               # Utilities folder
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
pnpm commit
```

---

Made with ♥ by Team
