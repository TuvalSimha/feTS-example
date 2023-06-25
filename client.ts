import { createClient, Mutable } from "fets";
import spotifyOpenapi from "./spotifyOpenapi";


const client = createClient<Mutable<typeof spotifyOpenapi>>({
    endpoint: 'https://api.spotify.com/v1',
  });


const allMyFollowingArtistsResponse = await client["/me/following"].get({
    query: {
        type: "artist",
        limit: 10,
    }
})


// top 5 tracks from the last 30 days
const topTracks = await client["/me/top/{type}"].get({
    params: {
        type: "tracks",
    },
    query: {
        time_range: "short_term",
        limit: 5,
    }
})


const topTracksResponse = await topTracks.json();
console.log(topTracksResponse);



const allMyFollowingArtists = await allMyFollowingArtistsResponse.json();
console.log(allMyFollowingArtists);

