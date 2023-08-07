function renderPokedex() {
    const cards = document.getElementById("content-cards");
    cards.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const pokemonImg = document.createElement("img");
        const pokemonName = document.createElement("h4");

        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(response => response.json())
            .then(data => {
                pokemonImg.src = data.sprites.front_default;
                pokemonName.textContent = data.name;
            }).catch(error => {
                console.error(error);
            });

        card.appendChild(pokemonImg);
        card.appendChild(pokemonName);
        cards.appendChild(card);
    }
}

window.addEventListener("load", function() {
    renderPokedex();
});
