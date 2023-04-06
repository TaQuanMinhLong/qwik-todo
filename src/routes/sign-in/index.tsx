import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Qwik Todo | Sign In",
};

export default component$(() => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
});
