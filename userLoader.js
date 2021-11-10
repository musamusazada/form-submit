"use strict"

let storageArr;
let userContainer;
window.onload=()=>{
    //Setting up DOM elements
    userContainer = document.querySelector(".user-container");
    storageArr=getStorage();
    if(storageArr.length>0){
        //For each object in Storage Array 
        //Create a new Card and append it to User Container
        storageArr.forEach(el=>{
            const card = document.createElement("div")
            card.classList.add("card");
            const nameTEXT = document.createElement("h1");
            nameTEXT.textContent = `${el._name}`;
            const emailTEXT = document.createElement("h1");
            emailTEXT.textContent = `${el._email}`;
            const textTEXT = document.createElement("h1");
            textTEXT.textContent = `${el._text}`;
            card.appendChild(nameTEXT);
            card.appendChild(emailTEXT);
            card.appendChild(textTEXT);
            userContainer.appendChild(card);
        })

    }else{
       //If array is empty 
       userContainer.textContent = "NO REGISTERED USER"
    }

}

//Getting Local Storage
function getStorage(){
    const storage = localStorage.getItem('registeredUsers');
    if(storage){
        return JSON.parse(storage);
    }else{
        return [];
    }
}