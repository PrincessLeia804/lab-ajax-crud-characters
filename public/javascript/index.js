const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    let allCharacters = await charactersAPI.getFullList()
    
    function printAll(){
    const parentContainer = document.querySelector(".characters-container");
    parentContainer.innerHTML = ""; // Clear previous content

    allCharacters.data.forEach((person) => {
      // Create a new container for each character
      let newContainer = document.createElement("div");
      newContainer.setAttribute("class", "character-info");

      newContainer.innerHTML = `
              <p class="name">Name: ${person.name}</p>
              <p class="occupation">Occupation: ${person.occupation}</p>
              <p class="cartoon">Is a Cartoon? ${person.cartoon}</p>
              <p class="weapon">Weapon: ${person.weapon}</p>
          `;

      parentContainer.appendChild(newContainer);
    })
  }
  printAll()
  });

  document.getElementById('fetch-one').addEventListener('click', async () => {
    const characterId = (document.getElementsByName("character-id"))[0].value
    const {data} = await charactersAPI.getOneRegister(characterId)

    const parentContainer = document.querySelector(".characters-container");
    parentContainer.innerHTML = "";
    let newContainer = document.createElement("div");
    newContainer.setAttribute("class", "character-info");


    newContainer.innerHTML = `
              <p class="name">Name: ${data.name}</p>
              <p class="occupation">Occupation: ${data.occupation}</p>
              <p class="cartoon">Is a Cartoon? ${data.cartoon}</p>
              <p class="weapon">Weapon: ${data.weapon}</p>
          `;

          parentContainer.appendChild(newContainer);
  });

  document.getElementById('delete-one').addEventListener('click', async() => {
    const characterId = (document.getElementsByName("character-id-delete"))[0].value
    await charactersAPI.deleteOneRegister(characterId)

    printAll()
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
