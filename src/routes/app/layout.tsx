import { component$, Slot } from "@builder.io/qwik";
import { Link, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async () => {
  console.log("Hi there!");
};

export default component$(() => {
  return (
    <main>
      <nav class="flex gap-2 font-bold">
        <Link href="/sign-in?_action=login">Sign In</Link>
      </nav>
      <Slot />
    </main>
  );
});
