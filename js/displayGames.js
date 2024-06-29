import {getAllGames} from"./getGames.js"
import { getCategoryGames } from './getGames.js';





let links = document.querySelectorAll('li a');

let y = 0;


// fetch all games
export async function fetchAllGames() {
  let req = await getAllGames();
  let cartona = '';
  for (let i = 0; i < req.length; i++) {
    cartona += `
            <div class="col-lg-3">
                    <div class=" m-auto con text-center content border border-1 border-dark p-2 rounded-3">
                        <img src="${req[i].thumbnail}" alt="image" class="w-100 p-1 rounded-3">
                        <div class="h-50">
                            <div class="d-flex justify-content-between py-2">
                            <h6 class = "title">${req[i].title}</h6>
                            <span class="py-1 px-2 rounded-3 free">free</span>
                        </div>
                        <p class="text">${req[i].short_description}</p>
                        <div class="py-2 d-flex justify-content-between border border-bottom-0 border-end-0 border-start-0 border-dark border-top-1">
                            <span class=" px-1 rounded-3 logos">${req[i].genre}</span>
                            <span class=" px-1 rounded-3 logos">${req[i].platform}</span>
                            
                        </div>
                        </div>
                    </div>
                </div>
            `;
  }
  document.querySelector('.data').innerHTML = cartona;

  let item = document.querySelectorAll('.col-lg-3');
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function () {
      y = req[i].id;
      localStorage.setItem('id', JSON.stringify(y));
      window.location.replace('./details.html');
    });
  }
}


// fetch category games
export function fetchCategoryGames() {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', async function (e) {
      let req = await getCategoryGames(e.target.innerHTML);
      console.log(req);
      let cartona = '';
      for (let j = 0; j < req.length; j++) {
        cartona += `
                <div class="col-lg-3">
                    <div class=" m-auto con text-center content border border-1 border-dark p-2 rounded-3 ">
                        <img src="${req[j].thumbnail}" alt="image" class="w-100 p-1 rounded-3">
                        <div class="d-flex justify-content-between py-2">
                            <h6 class = "title">${req[j].title}</h6>
                            <span class="py-1 px-2 rounded-3 free">free</span>
                        </div>
                        <p class="text">${req[j].short_description}</p>
                        <div class="py-2 d-flex justify-content-between border border-bottom-0 border-end-0 border-start-0 border-dark border-top-1">
                            <span class=" px-1 rounded-3 logos">${req[j].genre}</span>
                            <span class=" px-1 rounded-3 logos">${req[j].platform}</span>
                        </div>
                    </div>
                </div>  
                `;
      }

      document.querySelector('.data').innerHTML = cartona;

      let item = document.querySelectorAll('.col-lg-3');

      for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function () {
          y = req[i].id;
          localStorage.setItem('id', JSON.stringify(y));
          window.location.replace('./details.html');
        });
      }
    });
  }
}



fetchAllGames();
fetchCategoryGames();


