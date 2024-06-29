import { displayDetails } from "./id.js"
import { fetchAllGames } from './displayGames.js';
import { fetchCategoryGames } from './displayGames.js';




fetchAllGames();
fetchCategoryGames();



displayDetails();


let close = document.querySelector('#close');

// close details page
close.addEventListener('click', function () {
  window.location.replace('./index.html');
});
