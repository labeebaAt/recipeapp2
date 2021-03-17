











const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");

icon.addEventListener("click", () => {
  icon.classList.toggle("close");
  nav.classList.toggle("show");
});



const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

const openBtn2 = document.getElementById('openModalBtn2');
const closeBtn2 = document.getElementById('closeModalBtn2');
const modal2 = document.getElementById('modal2');

openBtn2.addEventListener('click', () => {
    modal2.classList.add('open');
});

closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('open');
});
















const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID ="0c46d738";
const APP_key ="ab99a5a366421f4e13201b7152da2e22";


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});
async function fetchAPI() {
  const baseURL =`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}
function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML +=
    `
     <div class="item">
      <img src="${result.recipe.image}" alt="img">
      <div class="flex-container">
        <h1 class="title">${result.recipe.label}</h1>
        <a class="view-btn" target="_blank" href="${result.recipe.url}" >View Recipe</a>

      </div>
      <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
      <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : "No data found"}</p>
      <p class="item-data">Health label: ${result.recipe.healthLabels}</p>

     </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
