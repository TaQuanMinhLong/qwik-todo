import { component$, Slot } from "@builder.io/qwik";
import { globalAction$, Link, RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ query }) => {
  const action = query.get("_action");
  console.log(`Sign In - Action = ${action}`);
};

export const useSignInAction = globalAction$(async (data, { query }) => {
  console.log(query);
});

export default component$(() => {
  return (
    <main>
      <nav class="flex gap-2 font-bold">
        <Link href="/app">Home</Link>
      </nav>
      <Slot />
    </main>
  );
});
