import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Qwik Todo",
  meta: [
    {
      name: "description",
      content: "QwikTodo App made with Qwik City",
    },
  ],
};

export default component$(() => {
  return (
    <>
      <div>Hello World!</div>
    </>
  );
});
