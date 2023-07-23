import { client } from "./client";

export async function fetchClubInfo(clubId?: string) {
  if (!clubId) return;

  const response = await client[
    "/{format}/PlayersByTeam/{competition}/{teamid}"
  ].get({
    params: {
      competition: "EPL",
      teamid: clubId,
      format: "json",
    },
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.SPORTDATA_API_TOKEN ?? "",
    },
    query: {
      key: process.env.SPORTDATA_API_TOKEN ?? "",
    },
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    throw new Error(errorResponse);
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
      "Ocp-Apim-Subscription-Key": process.env.SPORTDATA_API_TOKEN ?? "",
    },
    query: {
      key: process.env.SPORTDATA_API_TOKEN ?? "",
    },
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    throw new Error(errorResponse);
  }

  const data = await response.json();

  return data;
}
