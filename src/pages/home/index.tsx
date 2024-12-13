import { Button } from "@mantine/core";

import Clerk from "@/assets/icons/clerk.svg?react";
import Commitlint from "@/assets/icons/commitlint.svg?react";
import Eslint from "@/assets/icons/eslint.svg?react";
import Husky from "@/assets/icons/husky.svg?react";
import Mantine from "@/assets/icons/mantine.svg?react";
import Phosphor from "@/assets/icons/phosphor.svg?react";
import Prettier from "@/assets/icons/prettier.svg?react";
import IconReact from "@/assets/icons/react.svg?react";
import Sass from "@/assets/icons/sass.svg?react";
import Tailwind from "@/assets/icons/tailwind.svg?react";
import Typescript from "@/assets/icons/typescript.svg?react";
import Valorant from "@/assets/icons/valorant.svg?react";
import Vite from "@/assets/icons/vite.svg?react";
import Zod from "@/assets/icons/zod.svg?react";
import Zustand from "@/assets/icons/zustand.svg?react";

const Home = () => {
  const libs = [
    {
      icon: IconReact,
      title: "ReactJs",
      description:
        "ReactJs is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of an application efficiently.",
    },
    {
      icon: Tailwind,
      title: "TailwindCSS",
      description:
        "Tailwind CSS is a utility-first CSS framework for quickly building custom designs without ever leaving your HTML.",
    },
    {
      icon: Typescript,
      title: "TypeScript",
      description:
        "TypeScript is a superset of JavaScript that adds static types to the language, making it easier to catch errors early.",
    },
    {
      icon: Eslint,
      title: "ESLint",
      description:
        "ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.",
    },
    {
      icon: Prettier,
      title: "Prettier",
      description:
        "Prettier is an opinionated code formatter that ensures consistency in your codebase.",
    },
    {
      icon: Zustand,
      title: "Zustand",
      description:
        "Zustand is a lightweight, fast, and easy-to-use state management library for React. With a simple API and high scalability, Zustand is suitable for both small and complex applications.",
    },
    {
      icon: Sass,
      title: "Sass",
      description:
        "Sass is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, and inheritance. It makes CSS easier to manage, reuse, and write more efficiently.",
    },
    {
      icon: Mantine,
      title: "Mantine UI",
      description:
        "Mantine UI is a collection of low-level UI components and hooks for building high-quality design systems and web apps.",
    },
    {
      icon: Valorant,
      title: "CVA",
      description:
        "CVA is a collection of low-level UI components and hooks for building high-quality design systems and web apps.",
    },
    {
      icon: Vite,
      title: "Vite",
      description:
        "Vite is a JavaScript-based build and development tool designed to provide a fast and efficient development experience. With its ESM (ES Modules) architecture and hot module replacement (HMR) capability, Vite improves startup and workflow speed in front-end projects like React, Vue, or Svelte.",
    },
    {
      icon: Phosphor,
      title: "Phosphor Icon",
      description:
        "Phosphor is a simply beautiful open-source icon set that is designed to be used in web projects.",
    },
    {
      icon: Clerk,
      title: "clerk",
      description:
        "Clerk is a developer-first authentication and user management service that provides a secure and seamless login experience for your users.",
    },
    {
      icon: Commitlint,
      title: "commitlint",
      description:
        "commitlint is a tool to lint your commit messages to ensure they follow a conventional pattern.",
    },
    {
      icon: Zod,
      title: "Zod",
      description:
        "Zod is a TypeScript-first schema declaration and validation library that is designed to be easy to use and performant.",
    },
    {
      icon: Husky,
      title: "Husky",
      description:
        "Husky is a tool that makes it easy to use git hooks as part of your development workflow.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center bg-white px-3 py-16 tablet:px-10 tablet:py-60">
        <h1 className="text-center text-6xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Boilerplate Vite React
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-5 max-w-screen-lg text-center text-xl">
          Jumpstart your enterprise project with our feature-packed,
          high-performance React.js boilerplate! Experience rapid UI
          development, and an extensive suite of tools for a smooth and
          enjoyable development process.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 tablet:flex-row">
          <a
            href="https://github.com/LiamPham98/boilerplate-vite-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button size="lg" color="#000000">
              Get Started
            </Button>
          </a>
          <a
            href="https://github.com/LiamPham98/boilerplate-vite-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button variant="outline" size="lg" color="#000000">
              Star on GitHub (~0,01k)
            </Button>
          </a>
        </div>
      </div>
      <div className="mx-auto mb-20 grid max-w-screen-desktop grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
        {libs.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-start gap-4 px-4 py-6"
          >
            <div className="rounded-full bg-black p-4">
              <Icon className="size-12 invert" />
            </div>
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className="text-muted-foreground text-center font-light">
              {description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
