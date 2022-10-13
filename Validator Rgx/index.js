const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,message) {
     input.className = 'form-control is-invalid';
     const div = input.nextElementSibling;
     div.innerText = message;
     div.className = 'invalid-feedback';
}


function checkEmail(input) {
   const re = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   if(re.test(input.value)) {
      success(input)
   }else {
      error(input,'hatalı mail adresi');
   }
}

function success(input) {
     input.className ='form-control is-valid'
}


function checkRequired(inputs) {
   inputs.forEach(function(input){
      if(input.value === '') {
      error(input,`${input.id} is required`);
   }else{
      success(input);
   }
   });
}

function checkLenght(input , min , max) {
   if(input.value.length < min){
      error(input,`${input.id} en az ${min} karakter olmalı`);
   }else if(input.value.length > max){
      error(input,`${input.id} en fazla ${max} karakter olmalı`);
   }else {
      success(input);
   }
}

function checkPassword(input1,input2){
   if(input1.value !== input2.value){
      error(input2,'Paralolar eşleşmiyor.')
   }
}

function checkPhone(input) {
   var exp = /^\d{10}$/;
   if(!exp.test(input.value)){
      error(input,'Phone 10 karaterli olmalı')
   }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
    checkRequired([username,password,repassword,email,phone])
    checkEmail(email)
    checkLenght(username,7,5)
    checkPassword(password,repassword)
   checkPhone(phone)
});