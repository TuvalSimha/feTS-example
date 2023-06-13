import { createClient, Mutable } from "fets";
import spotifyOpenapi from "./spotifyOpenapi";

const client = createClient<Mutable<typeof spotifyOpenapi>>();

const response = await client["/"].get();

const pets = await response.json();
console.log(pets);
