import outsideClick from './outsideClick.js'; 

export default function initMenu() {
  const botaoAbrirMenu = document.querySelector('[data-menu="button"]');
  const botaoFecharMenu = document.querySelector('[data-menu="fechar"]');
  const containerMenu = document.querySelector('[data-menu="list"]');
  // const modal = document.querySelector('[data-modal="modal"]');
  
  
  if(botaoAbrirMenu  && containerMenu) {
    
    function toggleMenu(event) {
      event.preventDefault();
      containerMenu.classList.toggle('active');
    }
    function cliqueForaMenu(event) {
      if(event.target === this) {
        toggleMenu(event);
      }
    }
  

    botaoAbrirMenu.addEventListener('click', toggleMenu);
    botaoFecharMenu.addEventListener('click', toggleMenu);
    containerMenu.addEventListener('click', cliqueForaMenu);
  }
}

