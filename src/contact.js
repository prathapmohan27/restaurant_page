import './css/contact.css'

export default function contact(){
    
    let contactDiv= document.createElement('div');
    contactDiv.classList.add('contact');
    let h1 = document.createElement('h1');
    h1.textContent='Contact';

    contactDiv.appendChild(h1);

    function createDiv(link,name,email,phone){
        let mainDiv =document.createElement('div');
        mainDiv.classList.add('workers');
        let img=document.createElement('img');
        img.alt='chef photo';
        img.src=link;
        mainDiv.appendChild(img);
        let subDiv=document.createElement('div');
        subDiv.classList.add('subDiv');
        let chefName=document.createElement('p');
        chefName.textContent=name;
        subDiv.appendChild(chefName);
        let chefEmail=document.createElement('p');
        chefEmail.textContent=email;
        subDiv.appendChild(chefEmail);
        let chefPhone=document.createElement('p');
        chefPhone.textContent=phone;
        subDiv.appendChild(chefPhone);
        mainDiv.appendChild(subDiv);
        return mainDiv;
    }
    contactDiv.appendChild(createDiv('https://cdn.pixabay.com/photo/2015/10/11/14/13/making-food-982410__340.jpg','Nami','nami@gmail.com','5353-6354-5432'));
    contactDiv.appendChild(createDiv('https://cdn.pixabay.com/photo/2015/08/16/12/37/man-890880__340.jpg','Sanji','blackleg@gmail.com','5453-6854-5462'));
    contactDiv.appendChild(createDiv('https://cdn.pixabay.com/photo/2019/11/14/11/10/chef-4625935__340.jpg','Red zff','redzeff@gmail.com','8943-7634-6632'));

    return contactDiv;
}