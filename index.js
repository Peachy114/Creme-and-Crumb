import { BestSeller } from "./data/bestSellers.js";
import * as CardData from "./data/card-data.js";

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
  cardDiv.className = `flex flex-col justify-center w-[350px] h-[500px] bg-[#3A0519] text-white shadow-md mt-20 lg:mt-5`;

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
    <button class="py-2 px-10 bg-white text-black mx-auto mt-5 hover:bg-white hover:text-black hover:scale-105 transition duration-200 cursor-pointer"> Order </button>
  `
  container.appendChild(cardDiv);
});


//EXPLORE MORE SECTION
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

    parentDiv.className = `product-card  ${data.type} flex flex-col text-white relative`;
    parentDiv.innerHTML = `
      <div class='relative rounded-bl-3xl overflow-hidden group cursor-pointer'>
        <img src="${data.image}" alt="${data.name}" class="w-full h-[200px] object-cover">
        <div class='absolute inset-0 bg-[#273F4F]/50 translate-y-full group-hover:translate-y-0 
        text-center transition-transform duration-500 flex justify-center items-center'>
          <h1 class='text-white text-xl font-semibold'>Order Now</h1>
        </div>
      </div>
      <div class="absolute hover:bg-[#273F4F]/50 translate-y-full hover:translate-y-0"></div>
      <div class='h-[120px]'>
        <div class="flex justify-between">
        <h2 class=" text-xl font-semibold py-5 px-2">${data.name}</h2>
        <p class=" font-bold px-2 py-5">${data.price}</p>
        </div>
      </div>
    `;
    containerCard.appendChild(parentDiv);
});

//I add this so everytime I load the it will show the default cupcakes data
window.addEventListener("DOMContentLoaded", () => {
  const defaultFilter = "cupcake";
  const filterBtn = document.querySelectorAll('filter-btn');
  const cards = document.querySelectorAll(".product-card");


  //I made a function that will update the filters and its highlights
   const updateFilter = (filter) => {
    cards.forEach(card => {
      card.style.display = card.classList.contains(filter) ? "block" : "none";
    });
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.classList.add("text:scale-105", "text-white", "border-b-2", "border-b-white");
        btn.classList.remove("text-gray-600", "hover:scale-105");
      } else {
        btn.classList.remove("text:scale-105", "text-white", "border-b-2", "border-b-white");
        btn.classList.add("text-white", "hover:scale-105");
      }
    });
  };

  //this is current filter which is cupcake
  updateFilter(defaultFilter);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.filter;
      updateFilter(selected);
    });
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




