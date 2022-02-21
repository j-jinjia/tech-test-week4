//Import pokemonArray from another file.
import pokemon from "./data/pokemon.js"
//DOM element for HTML 
const pokemonCards = document.querySelector(".card-container");


pokemonCards.innerHTML = 
`<div class ="card">
    <img src =${pokemon.sprite} class ="card__image"></img>
    <div class ="card__content">
        <h3 class="card__heading"> ${pokemon.name}</h3>
        <p class="card__text">${pokemon.name}( ${pokemon.id}) is a ${pokemon.type} & ${pokemon.type} type pokemon.</p>
    </div>

</div>`
