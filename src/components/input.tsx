import { $, PropFunction, QwikFocusEvent, component$, useSignal } from "@builder.io/qwik";

type TextInputProps = {
  name?: string;
  type?: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  label?: string;
  placeholder?: string;
  value?: string | undefined;
  error?: string;
  required?: boolean;
  ref?: PropFunction<(element: Element) => void>;
  onInput$?: PropFunction<(event: Event, element: HTMLInputElement) => void>;
  onBlur$?: PropFunction<
    (event: QwikFocusEvent<HTMLInputElement>, element: HTMLInputElement) => void
  >;
};

export const TextInput = component$<TextInputProps>(
  ({ name, label, error, required, type = "text", ...props }) => {
    const _type = useSignal<typeof type>(type);
    const toggle = $(() => {
      type === "password" && (_type.value = _type.value === "password" ? "text" : "password");
    });
    return (
      <div>
        {label && (
          <label for={name} class="block text-sm font-medium mb-2 text-neutral-700 dark:text-white">
            {label} {required && <span>*</span>}
          </label>
        )}
        <div class="relative">
          <input
            {...props}
            id={name}
            type={_type.value}
            required
            aria-aria-invalid={`${name}-error`}
            aria-errormessage={`${name}-error`}
            class={[
              "py-2 px-3 form-input w-full rounded-md",
              { "border-red-500 focus:border-red-500 focus:ring-red-500": !!error },
            ]}
          />
          {type !== "password" && error && (
            <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
              <svg
                width="16"
                height="16"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="h-5 w-5 text-red-500"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          )}
          {type === "password" && _type.value === "password" && <div></div>}
        </div>
        {error && (
          <p class="text-sm text-red-600 mt-2" id={`${name}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
