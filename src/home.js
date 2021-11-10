
import './css/home.css'

export default function home(){

    let div=document.createElement('div');
    div.classList.add('home');

    let h1=document.createElement('h1');
    h1.textContent='Welcome To Baratie'
    div.appendChild(h1);
    let p=document.createElement('p');
    p.textContent='Good Food Is The Foundation Of Genuine Happiness';
    div.appendChild(p);
    let menuButton=document.createElement('button');
    menuButton.textContent='Check It Out';
    div.appendChild(menuButton);
    let location=document.createElement('p');
    location.innerHTML='<i class="material-icons">location_on</i> Located in the Sambas Region of the East Blue'
    location.setAttribute('id','location');
    div.appendChild(location);

    return div;
   
}
