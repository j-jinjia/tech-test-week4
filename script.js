//Import pokemonArray from another file.
import pokemonArray from "./data/pokemon.js"
//DOM element for HTML 
const pokemonCards = document.querySelector(".card-container");

pokemonArray.forEach(element => 
    pokemonCards.innerHTML += 
    `<div class ="card">
        <img src =${element.sprite} class ="card__image"></img>
        <div class ="card__content">
            <h3 class="card__heading"> ${element.name}</h3>
            <p class="card__text">${element.name} #( ${element.id}) is a ${element.types[0]} & ${element.types[1]} type pokemon.</p>
    </div>

    </div>`

)