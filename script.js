//Import pokemonArray from another file.
import pokemonArray from "./data/pokemon";
//DOM element in HTML 
const pokemonCards = document.querySelector(".card-container");
//creating a function to display the card and appending it to the new object.
const newPokemonArray = { ...pokemonArray };
newPokemonArray.renderPokemonCards(){
    return `<div class ="card">
                <div class ="card__image"> </div>
                    <img src =${this.sprite}</img>
                </div>
                <div class ="card__content">
                    <h3 class="card__heading"> ${this.name}</h3>
                    <p class="card__text">${this.name}( ${this.id}) is a ${this.type[0]} & ${this.type[1]} type pokemon.</p>
                </div>
    
            </div>`;
    


}    
//Create a new array and calling the function to display the cards by changing innerHTML of card-container.
newPokemonArray.map(pokemon => {
    pokemonCards.innerHTML += pokemon.renderPokemonCards();
})