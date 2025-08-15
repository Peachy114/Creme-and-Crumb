document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('data/trending.json');
    const data = await res.json();

    const container = document.getElementById('trends');
    const ul = document.createElement('ul');
    ul.className = "grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-5 px-5 mx-10";

    data.forEach(food => {
      ul.innerHTML += `
        <li class="flex flex-col mb-8">
          <img src="${food.image}" alt="${food.title}">
          <p class="mt-5">${food.title}</p>
          <span>$${food.price}</span>
          <span>${food.star}</span>
        </li>
      `;
    });

    container.appendChild(ul);
  } catch (err) {
    console.error('Error Loading JSON:', err);
  }
});
