//Import pokemonArray from another file.
import pokemon from "./data/pokemon.js"
//DOM element for HTML 
const pokemonCards = document.querySelector(".card-container");
console.log(pokemon);


const pokeCards = pokemon.map((pokemons) => {
    const pokemonReturnObject = {
        id: pokemons.id,
        name: pokemons.name,
        types: pokemons.types,
        sprite: pokemons.sprite,

    }
    return pokemonReturnObject
});
pokemonCards.innerHTML += pokeCards