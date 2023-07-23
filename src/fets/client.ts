import { type NormalizeOAS, createClient } from "fets";
import type openapi from "./openapi";

export const client = createClient<NormalizeOAS<typeof openapi>>({
  endpoint: "https://api.sportsdata.io/v4/soccer/stats",
});
