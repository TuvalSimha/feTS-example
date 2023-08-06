import { OASModel, NormalizeOAS } from "fets";
import openapi from "./openapi";

export type Player = OASModel<NormalizeOAS<typeof openapi>, "Player">;
export type Club = OASModel<NormalizeOAS<typeof openapi>, "Team">;
