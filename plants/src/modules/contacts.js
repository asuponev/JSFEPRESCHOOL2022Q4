function contacts() {
  const select = document.querySelector('.contacts__select-top');
  const list = document.querySelector('.contacts__select-bottom-list');
  const arrow = document.querySelector('.contacts__select-top-arrow');
  const title = document.querySelector('.contacts__select-top-title');
  const addresses = document.querySelectorAll('.contacts__select-bottom-address');

  select.addEventListener('click', () => {
    list.classList.toggle('open-contacts');
    select.classList.toggle('active-select');
    arrow.classList.toggle('active-arrow');
    addresses.forEach(address => {
      address.classList.remove('open-address');
    })
  })

  list.addEventListener('click', (event) => {
    if (event.target.classList.contains('contacts__select-bottom-list-item')) {
      title.textContent = event.target.textContent;
      list.classList.toggle('open-contacts');
      select.classList.toggle('active-select');
      arrow.classList.toggle('active-arrow');
      addresses.forEach(address => {
        address.classList.remove('open-address');
        if (address.dataset.address === event.target.textContent) {
          address.classList.add('open-address');
        }
      })
    }
  })
}

export default contacts;