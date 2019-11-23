export default function initScrollSuave() { 
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e){
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      
      section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
      });
    } 

  linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave()