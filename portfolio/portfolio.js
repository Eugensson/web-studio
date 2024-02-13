import '../src/scss/style.scss';

(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === true || false;
            openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
            mobileMenu.classList.toggle('is-open');
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    });
})();

let selectedFilterBtn = document.querySelector('.filter__btn--active');

document.querySelector('.js-filter').addEventListener('click', onfFilterContainerClick);

function onfFilterContainerClick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return;
    }

    const currentActiveBtn = document.querySelector('.filter__btn--active');
    const nextActiveFilterBtn = e.target;

    currentActiveBtn?.classList.remove('filter__btn--active');
    
    nextActiveFilterBtn.classList.add('filter__btn--active');

    if (currentActiveBtn.classList.contains('filter__btn--active')) {
        return;
    }

    selectedFilterBtn = nextActiveFilterBtn.dataset.value;
}