document.getElementById('login-button').addEventListener('click',function(){
    const username=document.getElementById('user-input');
    const password= document.getElementById('user-password');
    if(username.value =='Nazim' && password.value==12345){
        window.location.href='Bank.html';
    }
    else{
        const errorMessage=document.getElementById('error-message');
        errorMessage.innerText="Sorry, Input Your Valid User Name and Password!!!!";
        errorMessage.style.backgroundColor='DarkSeaGreen';
        errorMessage.style.padding='20px';
    }
});