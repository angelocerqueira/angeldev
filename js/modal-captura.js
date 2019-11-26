import outsideClick from './outsideClick.js'; 

export default function initCaptura() {
  const botaoFechar = document.querySelector('[data-captura="fechar"]');
  const containerMenu = document.querySelector('[data-captura="container"]');
  
  
  if(botaoFechar  && containerMenu) {
    
    function toggleMenu(event) {
      event.preventDefault();
      containerMenu.classList.toggle('active');
    }
    function cliqueForaMenu(event) {
      if(event.target === this) {
        toggleMenu(event);
      }
    }
  

    botaoFechar.addEventListener('click', toggleMenu);
    containerMenu.addEventListener('click', cliqueForaMenu);
  }
}

