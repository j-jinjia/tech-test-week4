//Import pokemonArray from another file.
import pokemonArray from "./data/pokemon.js"
//DOM element for HTML 
const pokemonCards = document.querySelector(".card-container");

/** Looping through the pokemonArray and adding each element into the new array pokemonCards by changing the innerHTML.
 * New HTML tags added to creat the cards. 
 * 
 * Used ${element.name.charAt(0).toUpperCase()+element.name.slice(1) to make the first letter of the name Uppercase. and then add the rest of the name in lowercase. 
 * 
 * Used ${element.types.join(" & ")} to concatenate array elements with a separator, in this case the & symbol.
 */

pokemonArray.forEach(element => 
    pokemonCards.innerHTML += 
    `<div class ="card">
        <img src =${element.sprite} class ="card__image"></img>
        <div class ="card__content">
            <h3 class="card__heading"> ${element.name.charAt(0).toUpperCase()+element.name.slice(1)}</h3>
            <p class="card__text">${element.name.charAt(0).toUpperCase()+element.name.slice(1)} (#${element.id}) is a ${element.types.join(" & ")} type pokemon.</p>
    </div>

    </div>`

)