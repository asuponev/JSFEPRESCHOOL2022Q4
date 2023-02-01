function service() {
  const btnsService = document.querySelectorAll('.service__buttons_item');
  const cardsService = document.querySelectorAll('.service__cards_item');


  btnsService.forEach(btn => {
    btn.addEventListener('click', () => onClick(btn, cardsService));
  })
}

function onClick(btn, cards) {
  if (document.querySelectorAll('.active-service').length >= 2 && !btn.classList.contains('active-service')) {
    alert('you cannot select more than 2 services');
  } else {
    switch (btn.textContent) {
      case 'Gardens':
        selectService(btn, cards, 'Garden');
        break;
      case 'Lawn':
        selectService(btn, cards, 'Lawn');
        break;
      case 'Planting':
        selectService(btn, cards, 'Planting');
        break;
    }
  }
  if (document.querySelectorAll('.active-service').length === 0) {
    cards.forEach(card => card.classList.remove('blur'));
  }
}

function selectService(btn, cards, service) {
  btn.classList.toggle('active-service');
  cards.forEach(card => {
    if (card.dataset.service === service && !card.classList.contains('active')) {
      card.classList.add('active');
      card.classList.remove('blur');
    } else if (card.dataset.service !== service && !card.classList.contains('blur') && !card.classList.contains('active')) {
      card.classList.add('blur');
    } else if (card.dataset.service === service && !card.classList.contains('blur') && card.classList.contains('active')) {
      card.classList.remove('active');
      card.classList.add('blur');
    }
  })
}

export default service;
