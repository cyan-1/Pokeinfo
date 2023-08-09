async function fetchPokemonData(i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    return response.json();
}

async function renderPokedex() {
    const cards = document.getElementById("pokedex-cards");
    cards.innerHTML = "Loading...";

    try {
        const data = [];
        for (let i = 1; i <= 151; i++) {
            data.push(fetchPokemonData(i));
        }

        const pokemonData = await Promise.all(data);

        cards.innerHTML = "";

        for (let i = 0; i < pokemonData.length; i++) {
            const card = document.createElement("div");
            card.classList.add("pokedex-card");

            const pokemonImg = document.createElement("img");
            pokemonImg.src = pokemonData[i].sprites.front_default;
            
            const pokedexNum = document.createElement("h4");
            pokedexNum.textContent = "#" + String(i + 1).padStart(4,'0');

            const pokemonName = document.createElement("h4");
            pokemonName.textContent = pokemonData[i].name;

            card.appendChild(pokemonImg);
            card.appendChild(pokedexNum);
            card.appendChild(pokemonName);

            cards.appendChild(card);

            card.addEventListener("click", function() {
                window.open(`https://www.pokemon.com/us/pokedex/${i+1}`, "_blank")
            });
        }
    } catch (err) {
        err;
    }
}
renderPokedex();