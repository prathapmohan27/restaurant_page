import './css/menu.css';

export default function menu(){

    let menuMain=document.createElement('div');
    menuMain.classList.add('menuMain');
    
    let  h1=document.createElement('h1');
    h1.textContent='Menu';
    menuMain.appendChild(h1);

    let menuCard=document.createElement('div');
    menuCard.classList.add('menuCard');
    
    function createItem(name,alt,link,description,cost){

        let content=document.createElement('div');
        content.classList.add('content')

        let menuItem=document.createElement('div');
        menuItem.classList.add('menuItem')

        let respiName=document.createElement('h2');
        respiName.textContent=name;
        content.appendChild(respiName);

        let respiImg=document.createElement('img');
        respiImg.alt=alt;
        respiImg.src=link;
        menuItem.appendChild(respiImg);

        let respiDescription=document.createElement('p');
        respiDescription.innerHTML=description;
        content.appendChild(respiDescription);

        let respiCost=document.createElement('h3');
        respiCost.textContent=cost;
        content.appendChild(respiCost);
        
        menuItem.appendChild(content);

        return menuItem;

    }
    menuCard.appendChild(createItem('Apple pie','apple pie','https://cdn.pixabay.com/photo/2017/12/15/16/00/cake-3021298__340.jpg',`Apple pie is a dessert generally made from apples and pastry`,'18$'));
    // menuCard.appendChild(createItem('Apple Pie','apple pie','https://cdn.pixabay.com/photo/2020/08/11/13/58/apple-pie-5479993__480.jpg',`pie crust,dark brown sugar,tapioca,butter,cinnamon`,'10$'));
    menuCard.appendChild(createItem('Waffles','waffles','https://cdn.pixabay.com/photo/2016/04/25/07/03/weapon-1351308__340.jpg',`Beat eggs in large bowl with hand beater until fluffy`,'15$'));
    menuCard.appendChild(createItem('Brownies','brownies','https://cdn.pixabay.com/photo/2019/02/25/19/16/brownie-4020334__340.jpg',`The best brownie recipe! Made with cocoa powder and chocolate chips`,'40$'));
    menuCard.appendChild(createItem('Eclair Cake','Eclair Cake','https://cdn.pixabay.com/photo/2017/10/30/17/39/eclairs-2903014__340.jpg',` It uses graham crackers and a pudding mixture`,'50$'));
    menuCard.appendChild(createItem('Meatloaf','Meatloaf','https://cdn.pixabay.com/photo/2020/03/17/17/29/meat-loaf-4941275__340.jpg',`Meatloaf is a dish of ground meat that has been combined with other ingredients`,'60$'));
    menuCard.appendChild(createItem('Pecan Pie ','pecan pie ','https://cdn.pixabay.com/photo/2016/10/13/05/53/pecan-1736875__480.jpg',`Pecan pie is the classic sugary dessert without which no Thanksgiving is complete`,'35$'));

    menuMain.appendChild(menuCard);

    return menuMain;

}