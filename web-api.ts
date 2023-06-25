// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'YOUR_TOKEN_HERE';
async function fetchWebApi(endpoint: string, method: string, body: undefined) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET', undefined
  )).items;
}

export const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}: any) =>
      `${name} by ${artists.map((artist: { name: any; }) => artist.name).join(', ')}`
  )
);