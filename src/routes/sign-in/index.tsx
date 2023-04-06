import { component$, useSignal } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { email, required, useForm } from "@modular-forms/qwik";

export const head: DocumentHead = {
  title: "Qwik Todo | Sign In",
};

export default component$(() => {
  const [form, { Field, Form }] = useForm({
    loader: useSignal({ email: "", password: "" }),
  });
  return (
    <main class="flex h-screen w-screen items-center justify-center  bg-indigo-500">
      <div class="w-full max-w-md rounded-md bg-white shadow-md">
        <div class="p-8">
          <div class="relative mb-8">
            <h2 class="text-2xl font-semibold ">Login</h2>
          </div>
          <Field
            name="email"
            validate={[required("Please enter your email"), email("Please enter a valid email")]}
          >
            {(field, props) => (
              <div class="flex flex-col ">
                <label for="email">Email</label>
                <input value={field.value} {...props} id="email" type="text" />
              </div>
            )}
          </Field>
          <button>Login</button>
        </div>
      </div>
    </main>
  );
});
