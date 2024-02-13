import '../scss/style.scss';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.js-backdrop'),    
    form: document.querySelector('.js-form'),
    licenseCheckbox: document.querySelector('.js-license'),
    submitBtn: document.querySelector('.js-submitBtn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackDropClick);
  refs.form.addEventListener('submit', onFormSubmit);
  refs.licenseCheckbox.addEventListener('change', onLicenseChange);
  
  function toggleModal() {
    window.addEventListener('keydown', onEscapeKeyPress);
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('backdrop--hidden');
  }

  function onBackDropClick(e) {
    if (e.currentTarget === e.target) {    
      toggleModal();
    };
    window.removeEventListener('keydown', onEscapeKeyPress);
  }

  function onEscapeKeyPress(e) {
    if (e.code === 'Escape') {
      toggleModal();
    }
    window.removeEventListener('keydown', onEscapeKeyPress);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);   
    toggleModal();
    refs.licenseCheckbox.checked = false;
    refs.submitBtn.disabled = true;
  }

  function onLicenseChange(e) {
    refs.submitBtn.disabled = !e.currentTarget.checked;
  }
})();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === true || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
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

