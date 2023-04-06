import { ClassList, component$ } from "@builder.io/qwik";

type SpinnerProps = {
  className?: ClassList;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
};

export const Spinner = component$<SpinnerProps>(
  ({ className = "text-blue-600", size = "md" }) => {
    return (
      <div
        class={[
          "inline-block animate-spin rounded-full border-current border-t-transparent",
          { "h-4 w-4 border-[3px]": size === "xs" },
          { "h-6 w-6 border-[3px]": size === "sm" },
          { "h-8 w-8 border-[3.5px]": size === "md" },
          { "h-10 w-10 border-[3.5px]": size === "lg" },
          { "h-12 w-12 border-[4px]": size === "xl" },
          { "h-14 w-14 border-[4px]": size === "2xl" },
          { "h-16 w-16 border-[5px]": size === "3xl" },
          className,
        ]}
        role="status"
        aria-label="loading"
      />
    );
  }
);
