let labelTerms = document.querySelector('#label-terms');
let fakeCheckbox = document.querySelector('.checkbox');
labelTerms.addEventListener('click',toggle);
function toggle(){
   
        fakeCheckbox.classList.toggle('active');
}

let btn = document.querySelector('.btn');
btn.addEventListener('click',check);
let regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function check(e){
    e.preventDefault();
    let phone = document.querySelector('input[name="phone"]');
    let email = document.querySelector('input[name="e-mail"]');
    let company = document.querySelector('input[name="company"]');
    if(!validate(regexPhone,phone.value)){
       
        phone.classList.add('wrong');
    }
    if(!validate(regexEmail,email.value)){
       
        email.classList.add('wrong');
    }
    if(company.value.length<5 && 25){
        
        company.classList.add('wrong');
    }
}
function validate(regex,value){
   return regex.test(value);
}
