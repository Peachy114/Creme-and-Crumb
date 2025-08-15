fetch('data/trending.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('trends');
    const ul = document.createElement('ul');
    ul.className = "grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-5 px-5 lg:px-0";
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
  })
  .catch(error => console.error('Error Loading JSON:', error));
