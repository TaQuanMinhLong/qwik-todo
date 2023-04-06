import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ redirect }) => {
  throw redirect(301, "/app");
};
