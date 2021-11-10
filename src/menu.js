import './css/menu.css';

export default function menu(){
    let menuDiv=document.createElement('div');
    menuDiv.classList.add('menuDiv');
    
    let  h1=document.createElement('h1');
    h1.textContent='Menu';
    menuDiv.appendChild(h1);
    
    function createItem(name,alt,link,description,cost){

        let itemDiv=document.createElement('div');
        let itemName=document.createElement('h2');
        itemName=name;
        itemDiv.appendChild(itemName);
        let itemImg=document.createElement('img');
        itemImg.alt=alt;
        itemImg.src=link;
        itemDiv.appendChild(itemImg);
        let itemDescription=document.createElement('p');
        itemDescription.textContent=description;
        itemDiv.appendChild(itemDescription);
        let itemCost=document.createElement('p');
        itemCost.textContent=cost;
        itemDiv.appendChild(itemCost);
        itemDiv.appendChild(itemCost);
        return itemDiv;

    }



return menuDiv;

}