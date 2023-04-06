import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$, useLocation } from "@builder.io/qwik-city";
import {
  InitialValues,
  email,
  formAction$,
  useForm,
  required,
  minLength,
} from "@modular-forms/qwik";
import { LoginForm } from "~/types";

export const head: DocumentHead = {
  title: "Qwik Todo | Sign In",
};

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

export const useFormAction = formAction$(async () => {});

export default component$(() => {
  const [form, { Field, Form }] = useForm({
    loader: useFormLoader(),
  });
  const loc = useLocation();
  const action = loc.url.searchParams.get("_action");

  const show = useSignal(false);

  useTask$(({ track }) => {
    track(() => action);
    console.log(action);
  });

  return (
    <main class="flex h-screen w-screen items-center justify-center bg-indigo-500">
      <div class="w-full max-w-md rounded-md bg-white shadow-md">
        <div class="p-8">
          <div class="relative mb-8">
            <h2 class="text-3xl font-semibold ">Login</h2>
            <span class="absolute left-0 bottom-0 h-[3px] w-7 rounded-full bg-indigo-500 " />
          </div>
          <Form class="flex flex-col gap-3">
            <Field
              validate={[
                required("Please enter your email."),
                email("Please enter a valid email."),
              ]}
              name="email"
            >
              {(field, props) => (
                <div class="relative bg-red-400">
                  <input
                    value={field.value}
                    placeholder="user@mmvietnam.com"
                    id="email"
                    type="text"
                    class="w-full border-y-2 border-b-neutral-300 border-t-transparent px-10 py-5 outline-none "
                    {...props}
                  />
                  <i class="uil uil-envelope absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-neutral-500"></i>
                </div>
              )}
            </Field>
            <Field
              validate={[required("Please enter your password.")]}
              name="password"
            >
              {(field, props) => {
                return (
                  <div class="relative bg-red-400">
                    <input
                      value={field.value}
                      placeholder="user@mmvietnam.com"
                      type={show.value ? "text" : "password"}
                      class="w-full border-y-2 border-b-neutral-300 border-t-transparent px-10 py-5 outline-none "
                      {...props}
                    />
                    <span class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-neutral-500">
                      <i class="uil uil-envelope"></i>
                    </span>
                    <span
                      onClick$={() => (show.value = !show.value)}
                      class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-neutral-500"
                    >
                      <i
                        class={[
                          "uil",
                          { "uil-eye": show.value },
                          { "uil-eye-slash": !show.value },
                        ]}
                      ></i>
                    </span>
                  </div>
                );
              }}
            </Field>

            <button
              onClick$={() => {
                console.log(form.invalid);
              }}
            >
              Login
            </button>
          </Form>
        </div>
      </div>
    </main>
  );
});
