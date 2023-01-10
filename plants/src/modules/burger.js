function burger() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const navItems = document.querySelectorAll('.header__item');
  const body = document.querySelector('body');
  const shadowBurger = document.querySelector('.shadow');
  
  function burgerMenu() {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-hidden');
    shadowBurger.classList.toggle('shadow-enabled');
  }
  
  burger.addEventListener('click', burgerMenu);
  shadowBurger.addEventListener('click', burgerMenu);
  
  for (let navItem of navItems) {
    navItem.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      burger.classList.remove('is-active');
      shadowBurger.classList.remove('shadow-enabled');
      body.classList.remove('body-hidden');
    });
  }
}

export default burger;