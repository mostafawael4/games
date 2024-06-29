// get data for all games
export async function getAllGames() {
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    }
  );

  response = response.json();

  return response;
}


// get data for category games
export async function getCategoryGames(type) {
  let response = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    }
  );

  response = await response.json();

  return response;
}


