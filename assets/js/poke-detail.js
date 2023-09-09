//
const detailPokemon = (pokemon) => {
  return `
  <section class="poke-details ${pokemon.type}">
  <header class="header">
    <span id="closeOpenDetail" class="material-symbols-outlined">
      <span class="material-symbols-outlined"> arrow_circle_left </span>
    </span>
  </header>

  <div class="info">
    <h1>${pokemon.name}</h1>
    <span>#${pokemon.number}</span>
  </div>

  <div class="poke-details">
    <div class="details">
      <div class="typeDetails">
        ${pokemon.types
          .map(
            (type) => `
        <h3 class="type ${type}">${type}</h3>
        `
          )
          .join('')}
      </div>
      <img src="${pokemon.photo}" alt="${pokemon.name}" />
    </div>

    <div class="about">
      <h2>Stats</h2>
      <div class="stats">
        <li>
          <h2>Hp:</h2>
          <h3>${pokemon.stats['hp']}</h3>
        </li>
        <li>
          <h2>Attack:</h2>
          <h3>${pokemon.stats['attack']}</h3>
        </li>

        <li>
          <h2>Defense:</h2>
          <h3>${pokemon.stats['defense']}</h3>
        </li>
        <li>
          <h2>Special Attack:</h2>
          <h3>${pokemon.stats['special-attack']}</h3>
        </li>
        <li>
          <h2>Special Defense:</h2>
          <h3>${pokemon.stats['special-defense']}</h3>
        </li>
        <li>
          <h2>Speed:</h2>
          <h3>${pokemon.stats['speed']}</h3>
        </li>
      </div>

      <h2>Abilities:</h2>
      <h3>${pokemon.abilities.join(', ')}</h3>
    </div>
  </div>
</section>
  `;
};
//
async function openDetailModal() {
  const openModal = document.getElementById('openDetail');
  const buttons = document.querySelectorAll('.btnOpenDetail');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openModal.showModal();
      const idParam =
        event.currentTarget.parentNode.querySelector('.number').textContent;
      const id = idParam.replace('#', '');

      pokeApi.getPokemonCardDetail(id).then((pokemon) => {
        const newDetailHtml = detailPokemon(pokemon);
        openModal.innerHTML = newDetailHtml;

        closeModalDetailPokemon();

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' || event.key === 'Esc') {
            openModal.close();
            openModal.innerHTML = '';
          }
        })


      });
    });
  });
}

function closeModalDetailPokemon() {
  const openModal = document.getElementById('openDetail');
  const btnCloseModal = document.getElementById('closeOpenDetail');

  btnCloseModal.addEventListener('click', () => {
    openModal.close();
    openModal.innerHTML = '';
  });
}
