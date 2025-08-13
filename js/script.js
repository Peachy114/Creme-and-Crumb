fetch('data/trending.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('trends');
    const ul = document.createElement('ul');
    ul.className = "grid grid-cols-4 gap-5";
    data.forEach(food => {
      ul.innerHTML += `
        <li class="h-100 flex flex-col">
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
