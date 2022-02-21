//Import pokemonArray from another file.
import pokemon from "./data/pokemon.js"
//DOM element for HTML 
const pokemonCards = document.querySelector(".card-container");
console.log(pokemon);

pokemon.renderCards();{
    `<div class ="card">
    <div class ="card__image"> </div>
        <img src =${this.sprite}</img>
    </div>
    <div class ="card__content">
        <h3 class="card__heading"> ${this.name}</h3>
        <p class="card__text">${this.name}( ${this.id}) is a ${this.type[0]} & ${this.type[1]} type pokemon.</p>
    </div>

</div>`;



}   

pokemonCards.innerHTML=pokemon.renderCards();