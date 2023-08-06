import { env } from "process";
import { client } from "./client";

export async function fetchClubInfo(clubId?: string) {
  if (!clubId) return null;

  const response = await client[
    "/{format}/PlayersByTeam/{competition}/{teamid}"
  ].get({
    params: {
      competition: "EPL",
      teamid: clubId,
      format: "json",
    },
    headers: {
      "Ocp-Apim-Subscription-Key": env.SOCCER_API_KEY ?? "",
    },
    query: {
      key: env.SOCCER_API_KEY ?? "",
    },
  });

  console.log("response", response);

  if (!response.ok) {
    const errorResponse = await response.text();
    throw new Error(`Failed to fetch club info: ${errorResponse}`);
  }

  const data = await response.json();

  return data;
}

export async function fetchAllClubs() {
  const response = await client["/{format}/Teams/{competition}"].get({
    params: {
      competition: "EPL",
      format: "json",
    },
    headers: {
      "Ocp-Apim-Subscription-Key": env.SOCCER_API_KEY ?? "",
    },
    query: {
      key: env.SOCCER_API_KEY ?? "",
    },
  });
  console.log("response", response);

  if (!response.ok) {
    const errorResponse = await response.text();
    throw new Error(errorResponse);
  }

  const data = await response.json();

  return data;
}
