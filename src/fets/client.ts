/* eslint-disable react-hooks/rules-of-hooks */
import { type NormalizeOAS, createClient, ClientPlugin } from "fets";
import type openapi from "./openapi";

function useErrorHandler(): ClientPlugin {
  return {
    onResponse({ response }) {
      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}, ${response.statusText}, ${response.url}`
        );
      }
    },
  };
}

export const client = createClient<NormalizeOAS<typeof openapi>>({
  plugins: [useErrorHandler()],
  endpoint: "https://api.sportsdata.io/v4/soccer/stats",
});
