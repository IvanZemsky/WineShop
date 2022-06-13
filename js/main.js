(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__bottom');
    const menuCloseItem = document.querySelector('.header__bottom-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__bottom_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__bottom_active');
    });
}());