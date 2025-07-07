import { BestSeller } from "./data/bestSellers.js";
import * as CardData from "./data/card-data.js";
import { customers } from "./data/testimonials.js"

const container = document.getElementById("cards");


//to create a arrays data so I dont need to make multiple
//datas and to save time
const cards = Array.from({length: 3},(_,i) => ({
    image:`./assests/Cake${i+1}.jpg`,
    alt:BestSeller[i].cakeHeadings,
    heading:BestSeller[i].cakeHeadings,
    paragraph:BestSeller[i].cakeParagraph,
    ratings: BestSeller[i].rating
}));


//I loop through all the cards data I dont make multiple
//divs in html
cards.forEach(card => {
  const cardDiv = document.createElement('div');
  cardDiv.className = ` flex flex-col justify-center w-[350px] h-[500px] bg-[#1e1e1e] p-5 text-white shadow-md`;

  cardDiv.innerHTML = `
    <img 
      class="mb-2 w-full h-[200px] object-cover rounded-bl-3xl" 
      src="${card.image}" 
      alt="${card.alt}"
    >
    <div class='flex'>
      <h1 class="font-semibold text-lg py-5 px-5">${card.heading}</h1>
      <span class="text-end py-5 px-5">${card.ratings}</span>
    </div>
    <p class="px-5">${card.paragraph}</p>
    <button class="py-2 px-10 bg-[#E14434] text-white mx-auto mt-5 hover:bg-white hover:text-black hover:scale-105 transition duration-200 cursor-pointer"> Order </button>
  `
  container.appendChild(cardDiv);
});



// For Filters
const allCards = [
  ...CardData.Cupcakes_Data.map((item, i) => ({
    image: `./assests/cards/cup${i + 1}.jpg`,
    name: item.name,
    price: item.price,
    rating: item.rating,
    type: item.type
  })),
  ...CardData.WholeCakes.map((item, i) => ({
    image: `./assests/cards/wholecake${i + 1}.jpg`,
    name: item.name,
    price: item.price,
    rating: item.rating,
    type: item.type
  })),
  ...CardData.Pastries.map((item, i) => ({
    image: `./assests/cards/pastry${i + 1}.jpg`,
    name: item.name,
    price: item.price,
    rating: item.rating,
    type: item.type
  }))
];

//I loop through all the cards data I dont make multiple
//divs in html
const containerCard = document.getElementById("product-grid");
allCards.forEach(data => {
    const parentDiv= document.createElement('div');

    parentDiv.className = `product-card  ${data.type} rounded-xl p-4 flex flex-col`;
    parentDiv.innerHTML = `
    <img src="${data.image}" alt="${data.name}" class="w-full h-[200px] object-cover rounded-bl-3xl mb-5">
    <div class='h-[120px]'>
      <div class="flex justify-between">
      <h2 class="text-xl font-semibold py-5 px-2">${data.name}</h2>
      <p class='py-5 px-5 text-end'>${data.rating}</p>
      </div>
      <p class="text-gray-500 font-bold px-2">${data.price}</p>
    </div>
    <button class="text-white py-2 px-5 mx-2 text-sm text-blue-500 bg-[#E14434] mt-5 flex gap-2
      hover:bg-white hover:text-black hover:scale-105 transition duration-200 cursor-pointer ">
      Add to cart
    </button>
    `;
    containerCard.appendChild(parentDiv);
});

//I add this so everytime I load the it will show the default cupcakes data
window.addEventListener("DOMContentLoaded", () => {
  const defaultFilter = "cupcake";
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.style.display = card.classList.contains(defaultFilter) ? "block" : "none";
  });
});

//I did select all filter buttons and products class in html file
//then i use for each to loop through each button  and has its own 
//click event. I hold the value of date-filter.
//then i use the css display property to show the product
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    products.forEach(card => {
      card.style.display = card.classList.contains(filter) ? 'block' : 'none';
    });
  });
});




