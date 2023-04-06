import { ClassList, component$ } from "@builder.io/qwik";

type SpinnerProps = {
  className?: ClassList;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export const Spinner = component$<SpinnerProps>(({ className = "text-blue-600", size = "md" }) => {
  return (
    <div
      class={[
        "animate-spin inline-block border-current border-t-transparent rounded-full",
        { "w-4 h-4 border-[3px]": size === "xs" },
        { "w-6 h-6 border-[3px]": size === "sm" },
        { "w-8 h-8 border-[3.5px]": size === "md" },
        { "w-10 h-10 border-[3.5px]": size === "lg" },
        { "w-12 h-12 border-[4px]": size === "xl" },
        { "w-14 h-14 border-[4px]": size === "2xl" },
        { "w-16 h-16 border-[5px]": size === "3xl" },
        className,
      ]}
      role="status"
      aria-label="loading"
    />
  );
});
