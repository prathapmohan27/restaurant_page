
import './css/home.css'

export default function home(){

    let homeDiv=document.createElement('div');
    homeDiv.classList.add('home');
    

    let h1=document.createElement('h1');
    h1.textContent='Welcome To Baratie'
    homeDiv.appendChild(h1);

    let p=document.createElement('p');
    p.textContent='Good Food Is The Foundation Of Genuine Happiness';
    homeDiv.appendChild(p);

  

    let location=document.createElement('p');
    location.innerHTML='<i class="material-icons">location_on</i> Located in the Sambas Region of the East Blue';
    location.setAttribute('id','location');
    homeDiv.appendChild(location);

    return homeDiv;
   
}
