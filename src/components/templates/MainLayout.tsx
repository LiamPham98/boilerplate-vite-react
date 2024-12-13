import { Outlet } from "react-router";

import { cn } from "@/utils/function";

import { Header } from "../organisms/Header";

export const BaseTemplate = () => {
  return (
    <section className="bg-white">
      <Header />
      <main
        className={cn(
          "w-full antialiased transition-all duration-200 ease-linear h-screen overflow-auto",
        )}
      >
        <Outlet />
      </main>
    </section>
  );
};
