async function fetchPokemonData(i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    return response.json();
}

async function renderPokedex() {
    const cards = document.getElementById("content-cards");
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
            card.classList.add("card");

            const pokemonImg = document.createElement("img");
            pokemonImg.src = pokemonData[i].sprites.front_default;

            const pokemonName = document.createElement("h4");
            pokemonName.textContent = pokemonData[i].name;

            card.appendChild(pokemonImg);
            card.appendChild(pokemonName);
            cards.appendChild(card);
        }
    } catch (err) {
        err;
    }
}
renderPokedex();