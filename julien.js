const tabs = document.querySelectorAll('[data-tab-target]')               //select le truc à cliquer
const tabContents = document.querySelectorAll('[data-tab-content]')       //select le contenu du truc à cliquer

tabs.forEach(tab => {                                                       // on parcoure les elemens tab
  tab.addEventListener('click', () => {                                      
    tab.classList.remove('active')                                            //au click  ---> on enlève active du truc à cliquer
    const target = document.querySelector(tab.getAttribute('data-tab-target'))   //---> nvlle const qui prend l'id de la target (le contenu donc)

    tabContents.forEach(tabContent => {                                         //---> on parcoure les contents
      tabContent.classList.remove('active')                                     //---> on enlève la class active
  })
    tab.classList.add('active')                                                //enfin on rajoute la class active au truc cliqué...
    target.classList.add('active')                                             // ... et à son contenu
  })
})