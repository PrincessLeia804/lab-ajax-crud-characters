const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async() => {
      let allCharacters = await charactersAPI.getFullList()
      

      const parentContainer = document.querySelector(".characters-container");
      parentContainer.innerHTML = ""; // Clear previous content

      allCharacters.data.forEach((person) => {
          // Create a new container for each character
          let newContainer = document.createElement("div");
          newContainer.setAttribute("class", "character-info");
          newContainer.setAttribute("id", `${person.id}`);

          // Populate the new container with character information
          newContainer.innerHTML = `
              <p class="name">${person.name}</p>
              <p class="occupation">${person.occupation}</p>
              <p class="cartoon">${person.cartoon}</p>
              <p class="weapon">${person.weapon}</p>
          `;

          // Append the new container to the parent container
          parentContainer.appendChild(newContainer);
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
