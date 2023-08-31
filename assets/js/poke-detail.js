//
const pokemonDetail2 = (pokemon) => {
  return `
 <div>
 <div
   class="relative z-10"
   aria-labelledby="modal-title"
   role="dialog"
   aria-modal="true">
   <div
     class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

   <div class="fixed inset-0 z-10 overflow-y-auto">
     <div
       class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
       <div
         class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 font--inter">
         <div id="closeOpenDetail" class="modal-close">
           <img src="./assets/img/close.svg" alt="close" />
         </div>

         <div class="title-1 text__align--R">Pokemon Detail</div>
       </div>

       <ol id="pokeDetails" class="pokeDetails">
       <li>${pokemon.stats['hp']}</li>
       
       </ol>
     </div>
   </div>
 </div>
</div>
 `;
};

const detailPokemon = (pokemon) => {
  return `
    <section class="poke-details ${pokemon.type}">
    <div class="header">
      <h1>Detalhe do pokémon</h1>
    </div>
    <div id="closeOpenDetail" class="modal-close">
    <img src="./assets/img/close.svg" alt="close" />
  </div>
    <div class="info">
      <h1>${pokemon.name}</h1>
      <span>#${pokemon.number}</span>
    </div>
    <div class="poke-details">
      <div class="details">
       <div class="typeDetails">
        ${pokemon.types
          .map((type) => `<h3 class="type ${type}">${type}</h3>`)
          .join('')}
        </div>
        <img 
        src="${pokemon.photo}" 
        alt="${pokemon.name}">
      </div>
      <div class="about">
        <h2>Stats</h2>
        <div class="stats">
          <h2>Hp</h2>
          <h3>${pokemon.stats['hp']}</h3>
          <h2>Attack</h2>
          <h3>${pokemon.stats['attack']}</h3>
          <h2>Defense</h2>
          <h3>${pokemon.stats['defense']}</h3>
          <h2>Special Attack</h2>
          <h3>${pokemon.stats['special-attack']}</h3>
          <h2>Special Defense</h2>
          <h3>${pokemon.stats['special-defense']}</h3>
          <h2>Speed</h2>
          <h3>${pokemon.stats['speed']}</h3>
        </div>
        <h2>Abilities:</h2>
        <h3>${pokemon.abilities.join(', ')}</h3>
      </div>
    </div>
  </section>
  `;
};
//
async function openModal() {
  const openModal = document.getElementById('openDetail');
  const buttons = document.querySelectorAll('.btnOpenDetail');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      openModal.showModal();
      const idParam =
        event.currentTarget.parentNode.querySelector('.number').textContent;
      const id = idParam.slice(-1);
      const url = pokeApi.getPokemonCardDetail(id);
      pokeApi.getPokemonCardDetail(id).then((pokemon) => {
        const newDetailHtml = detailPokemon(pokemon);
        openModal.innerHTML = newDetailHtml;
        closeModalDetailPokemon();
      });
    });
  });
}

function closeModalDetailPokemon() {
  const openModal = document.getElementById('openDetail');
  const btnCloseModal = document.getElementById('closeOpenDetail');

  btnCloseModal.addEventListener('click', () => {
    openModal.close();
  });
}
closeModalDetailPokemon();
