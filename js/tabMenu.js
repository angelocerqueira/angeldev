// FUNCÃO TAB MENU
export default function initTab() {   
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] div');
  const linksImagens = document.querySelectorAll(' [data-tab="menu"] a[href=""]');
  tabContent[0].classList.add('ativo');

  function handleLinkImagens(e){
      e.preventDefault();
  linksImagens.forEach((link) => {
  link.classList.remove('ativo');   
  });
      e.currentTarget.classList.add('ativo');
  } 
  // console.log(linksInternos);
  linksImagens.forEach((link) => {
      link.addEventListener('click' , handleLinkImagens);
  });

  

  function activeTab(index){
      tabContent.forEach((section) => {
          section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
     

  }

  tabMenu.forEach((itemMenu, index ) => {
      itemMenu.addEventListener('click', () => {
          activeTab(index);
      })
  });
}




