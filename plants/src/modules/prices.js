function prices() {
  const items = document.querySelectorAll('.prices__items_item');

  items.forEach(item => {
    item.addEventListener('click', (event) => {
      if ((document.querySelectorAll('.active-price').length === 0 && !item.classList.contains('active-price')) || (document.querySelectorAll('.active-price').length === 1 && item.classList.contains('active-price')) && !event.target.classList.contains('prices__items_item-bottom-btn')) {
        openPrice(item);
      } else if (document.querySelectorAll('.active-price').length === 1 && !item.classList.contains('active-price')) {
        document.querySelectorAll('.active-price').forEach(item => item.classList.remove('active-price'))
        document.querySelectorAll('.open-price').forEach(item => item.classList.remove('open-price'))
        document.querySelectorAll('.open-arrow').forEach(item => item.classList.remove('open-arrow'))
        openPrice(item);
      }
    })
  })

  function openPrice(item) {
    item.classList.toggle('active-price');
    item.querySelector('.prices__items_item-bottom').classList.toggle('open-price');
    item.querySelector('.prices__items_item-top-arrow').classList.toggle('open-arrow');
  }
}

export default prices;
