import {getDetailsGame} from"./fetcid.js"


let imageDetails = document.querySelector('.imageDetails');
let title = document.querySelector('.title');
let category = document.querySelector('.category');
let platform = document.querySelector('.platform');
let paragraph = document.querySelector('.paragraph');
let showMore = document.querySelector('.showMore a');


// fetch game using id
export async function displayDetails() {
  let req = await getDetailsGame(JSON.parse(localStorage.getItem('id')));
  imageDetails.setAttribute('src', req.thumbnail);
  title.innerHTML = 'Title:' + req.title;
  category.innerHTML = req.genre;
  platform.innerHTML = req.platform;
  paragraph.innerHTML = req.description;
  showMore.setAttribute('href', req.game_url);
}


