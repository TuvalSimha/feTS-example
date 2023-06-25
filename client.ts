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

const allMyFollowingArtists = await allMyFollowingArtistsResponse.json();
console.log(allMyFollowingArtists);
