import initMenu from './menu-mobile.js';
import initTab from './tabMenu.js';
import initScrollSuave from './scrollSuave.js';
import initCaptura from './modal-captura.js';


initMenu();
initTab();
initScrollSuave();
initCaptura();

// (function () {
//   var menu = document.getElementById('menu'); // colocar em cache
//   window.addEventListener('scroll', function () {
//       if (window.scrollY > 650) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
//       else menu.classList.remove('menuFixo');
//   });
// })();