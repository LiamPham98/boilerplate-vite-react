import { cn } from "@/utils/function";

export const BaseTemplate = () => {
  return (
    <section className="flex">
      <main
        className={cn(
          "w-full pl-[274px] bg-gray-2 antialiased transition-all duration-200 ease-linear h-screen overflow-auto",
        )}
      />
    </section>
  );
};
