import header from './navBar';
import home from './home';
import contact from './contact';
import menu from './menu';

const pageLoad=(function(){
    let div=document.getElementById('content');
    div.appendChild(header());
    div.appendChild(home());

    let navHome=document.getElementById('navHome');
    let navMenu=document.getElementById('navMenu');
    let navContact=document.getElementById('navContact');

    let homeDiv=document.querySelector('.home');

    navContact.onclick =()=>{
        div.removeChild(div.lastChild);
        div.appendChild(contact());
    }
    navHome.onclick =()=>{
        div.removeChild(div.lastChild);
        div.appendChild(home());
    }

    navMenu.onclick=()=>{
        div.removeChild(div.lastChild);
        div.appendChild(menu());
    }

    
})();
