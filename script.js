"use strict"
let button;
let fullnameINPUT;
let emailINPUT;
let textareaINPUT;

let regUsers = [];


window.onload = ()=>{
    //Getting Local Storage on every load of document
    regUsers= getStorage();

    //Setting dom elements
    button = document.querySelector("button")
    fullnameINPUT = document.querySelector("#fullname");
    emailINPUT = document.querySelector("#email")
    textareaINPUT = document.querySelector("#textarea")


    //Listening to Input Changes
    fullnameINPUT.addEventListener('input',function(e){
        //You can use fullnameINPUT instead of e.target
        fieldChecker(e.target,6);
    })
    emailINPUT.addEventListener('input',function(e){
        //You can use fullnameINPUT instead of e.target
        fieldChecker(e.target,8);
    })
    textareaINPUT.addEventListener('input',function(e){
        //You can use fullnameINPUT instead of e.target
        fieldChecker(e.target,10);
    })

    //Handling what happens when we click to register
    button.addEventListener("click",function(e){
        e.preventDefault();
        const fullname =fullnameINPUT.value;
        const email =emailINPUT.value;
        const text =textareaINPUT.value;
        //If conditions met, register =>
        //Add user to array, update local storage by setting it to array
        if(fullname.length>6 && email.length>8 && text.length>10){
          regUsers.push(new User(fullname,email,text))
          localStorage.setItem('registeredUsers',JSON.stringify(regUsers))
          location.reload();
        }
        else{
            //Else we create the modal
            pupUp("Oops, PLease fill all fields");
        }

    })
}


//PopUp function
function pupUp(text){
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const textBox = document.createElement("div");
    textBox.classList.add("modal--textBox");
    textBox.textContent=text;
    modal.appendChild(textBox);
    modal.addEventListener("click",function(){
        document.body.removeChild(modal);
    })
    document.body.appendChild(modal);
}


//Checking Input fields for requirements
function fieldChecker(element, requiredLength){
    if(element.value.trim().length<=requiredLength ){
        element.classList.add("error")
    }
    else{
        element.classList.remove("error")

    }
}

//Getting Local Storage
//If null return empty array
function getStorage(){
    const storage = localStorage.getItem('registeredUsers');
    if(storage){
        return JSON.parse(storage);
    }else{
        return [];
    }
}

//Class for Users
class User{
    constructor(fullname,email,text){
        this._name= fullname;
        this._email = email
        this._text=text;
    }
}

