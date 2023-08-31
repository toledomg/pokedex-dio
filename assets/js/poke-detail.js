function openDetailDialog(pokemonName) {
  console.log(`Detalhes do Pokémon ${pokemonName}`);
}
//
function openModal() {
  const openModal = document.getElementById('openDetail');
  const buttons = document.querySelectorAll('.btnOpenDetail');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      openModal.showModal();
      const pokemonName =
        event.currentTarget.parentNode.querySelector('.name').textContent;
      openDetailDialog(pokemonName);
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
