const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const subMenu = link.parentElement.querySelector('.menu_sub');

    if (!subMenu) {
      return;
    }

    event.preventDefault();
    subMenu.classList.toggle('menu_active');
  });
});