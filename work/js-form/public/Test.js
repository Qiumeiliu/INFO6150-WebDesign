"use strict";

(function() {


const nameEl=document.querySelector('.register__name');
const nameGroupEl=document.querySelector('.register-name')
const nameInputEl=document.querySelector('.register-name__input');
const nameErrorEl=document.querySelector('.register-name__error');
const formEl =document.querySelector('.register');
const confirmGroupEl=document.querySelector('.register-confirm');
const emailInputEl=document.querySelector('.register-email__input');
const confirmInputEl=document.querySelector('.register-confirm__input');
const emailErrorEl=document.querySelector('.register-email__error');

formEl.addEventListener('submit',(event)=>{
    let isInvalid=false
    nameErrorEl.innerText="";
    emailErrorEl.innerText="";
    confirmGroupEl.classList.remove('register-confirm--invalid');

    if(!nameInputEl.value){
        nameErrorEl.innerText="This field is required";
        isInvalid=true;
    }

    if(!emailInputEl.value){
        emailErrorEl.innerText="This field is required";
        isInvalid=true;
    }

    console.log(confirmInputEl.value)
    if(confirmInputEl.value !=emailInputEl.value){
        confirmGroupEl.classList.add('register-confirm--invalid');
        isInvalid=true;
    }
    if(isInvalid){
        event.preventDefault();
    }

});

})();
