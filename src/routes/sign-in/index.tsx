import { component$ } from "@builder.io/qwik";
import { DocumentHead, Form } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Qwik Todo | Sign In",
};

export default component$(() => {
  return (
    <main class="h-screen w-screen flex items-center justify-center bg-indigo-500">
      <div>
        <div>
          <h2>Login</h2>
          <Form></Form>
        </div>
      </div>
    </main>
  );
});
