import './css/navigation.css';




export  default function header(){

    let nav=document.createElement('nav');
    nav.classList.add('navigationBar')
   
    let buttonDiv=document.createElement('div');

    buttonDiv.classList.add('buttonDiv');

    const h1=document.createElement('h1');

    h1.textContent='Baratie';
    nav.appendChild(h1);

    function createButton(str,id){
        let btn = document.createElement('button');
        btn.classList.add('navButton');
        btn.textContent=str;
        btn.setAttribute('id',id);
        return btn;
    }
  
    buttonDiv.appendChild(createButton('Home','navHome'));
    buttonDiv.appendChild(createButton('Menu','navMenu'));
    buttonDiv.appendChild(createButton('Contact','navContact'));

    nav.appendChild(buttonDiv);
    return nav;
}