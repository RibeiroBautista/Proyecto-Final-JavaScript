async function getPokemon(id) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
    );
    const data = await response.json();
    return data;
    }

async function init() {
    const firstPokemon = await getPokemon(25);
    updatePokemon(firstPokemon);
}

function updatePokemon(pokemon) {
    window.pokemon.textContent = pokemon.name;
    window.imagen.setAttribute("src", pokemon.sprites.front_default);
}

window.search.addEventListener("change", async () => {
    const pokemon = await getPokemon(window.search.value);
    updatePokemon(pokemon);
});

init();
