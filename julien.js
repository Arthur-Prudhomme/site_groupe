const tabs = document.querySelectorAll('[data-tab-target]')               
const tabContents = document.querySelectorAll('[data-tab-content]')       

tabs.forEach(tab => {                                                      
  tab.addEventListener('click', () => {                                      
    tab.classList.remove('active')                                            
    const target = document.querySelector(tab.getAttribute('data-tab-target'))   

    tabContents.forEach(tabContent => {                                       
      tabContent.classList.remove('active')                              
  })
    tab.classList.add('active')                                            
    target.classList.add('active')                                       
  })
})

let tourn = document.querySelector(".tofja") 
if(tourn != null){
tourn.addEventListener("mouseover", mOver, false) 
tourn.addEventListener("mouseout", mOut, false) 

function mOver() {
   tourn.setAttribute("style", "transform: scale(2) rotate(1.0turn); transition: all .5s ease-in-out; ")
}
function mOut() {  
   tourn.setAttribute("style", "transform: scale(1.0) ; transition: all .2s ease-in-out; ")
}
}

let tournb = document.querySelector(".tofjb") 
if(tournb != null){
tournb.addEventListener("mouseover", mOver, false) 
tournb.addEventListener("mouseout", mOut, false) 

function mOver() {
   tournb.setAttribute("style", "transform: scale(5) rotate(1.0turn); transition: all .5s ease-in-out; ")
}
function mOut() {  
   tournb.setAttribute("style", "transform: scale(1.0) ; transition: all .2s ease-in-out; ")
}
}

let tournc = document.querySelector(".tofjc") 
if(tournc != null){
tournc.addEventListener("mouseover", mOver, false) 
tournc.addEventListener("mouseout", mOut, false) 

function mOver() {
   tournc.setAttribute("style", "transform: scale(10) rotate(1.0turn); transition: all .5s ease-in-out; ")
}
function mOut() {  
   tournc.setAttribute("style", "transform: scale(1.0) ; transition: all .2s ease-in-out; ")
}
}