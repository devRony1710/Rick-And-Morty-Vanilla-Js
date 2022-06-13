import API from "./API.js";

//new instance for de api class
const api = new API()

const $characterContainer = document.querySelector('#character-container');

//new class character with two methods (build, render)
class Character {
  constructor({ name, image }) {
    this.name = name
    this.image = image
    this.render()
  }

  //this method build a html template
  build() {
    return
    `
      <article class="character">
        <div class="character-grid">
          <h2>${this.name}</h2>
          <img src=${this.image} alt="">
        </div>
      </article>
    `
  }

  //this method render the build template into the character container on index.html
  render() {
    $characterContainer.innerHTML = this.build();
  }
}


//this function get the character with id
async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)
  // const rick = new Character(characterData)
}


initApp(2)
console.log(api.getCharacter(2))