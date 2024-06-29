import {fetchAllGames} from"./displayGames.js"
import { fetchCategoryGames } from './displayGames.js';

fetchAllGames();
fetchCategoryGames();

// get game using id
export async function getDetailsGame(id) {
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    }
  );
  response = await response.json();
  // console.log(id);
  return response;
}
