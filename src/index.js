import './styles.css' ;
import {createHome} from './components/home/home.js' ;
import {createMenu} from './components/menu/menu.js' ;
import {createContact} from './components/contact/contact.js' ;

function intialize() {
const homeBtn = document.querySelector('.home');
const menubtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');
const mainContentDiv = document.querySelector('.main-content');

function resetScreen() {
     mainContentDiv.textContent = "";
}

homeBtn.addEventListener('click',()=>{
     resetScreen() ;
     createHome() ;
})

menubtn.addEventListener('click',()=>{
      resetScreen() ;
      createMenu() ;
})

contactBtn.addEventListener('click' , ()=>{
      resetScreen() ;
      createContact() ;
})
}

intialize() ;