function GetInputValue(inputId){
    const input=document.getElementById(inputId);
    const inputValue= parseFloat(input.value);
     input.value='';
     return inputValue;
}

function errorMessage(message){
    const errorMessage=document.getElementById(message);
    errorMessage.innerText="Input a Positive Value";
    errorMessage.style.backgroundColor='DarkSeaGreen';
    errorMessage.style.padding='20px';
    errorMessage.style.marginTop='20px';
    errorMessage.style.textAlign='center';
    errorMessage.style.color='white';
    errorMessage.style.fontSize='20px';
    errorMessage.style.borderRadius='20px';
}

function getUpdateTotal(totalId){
     const total=document.getElementById(totalId);
     const totalValue=parseFloat(total.innerText);
     return totalValue;
   
}

function GetUpdateBalance(inputAmount,isAdd){
    const balance=document.getElementById('balance-total');
    const balanceValue=parseFloat(balance.innerText);
    if(isAdd==true)
    {
        const Total= balanceValue+inputAmount;
        balance.innerText=Total;
    }
    if(isAdd==false)
    {
        if(inputAmount<balanceValue){
            const Total= balanceValue-inputAmount;
            balance.innerText=Total;
        }
        else{
            
            errorMessage('withdraw-error-message');
        }
        
    }
    

}

document.getElementById('deposit-button').addEventListener('click',function(){
   
    const inputAmount= GetInputValue('deposit-input');
    if(inputAmount>0 ){
        const totalAmount=getUpdateTotal('deposit-total');
        const totalDepositMoney=inputAmount+totalAmount;
        const total=document.getElementById('deposit-total');
        total.innerText=totalDepositMoney;
        GetUpdateBalance(inputAmount,true);
       
    }
  
   
   else{
      errorMessage('deposit-error-message');
    
   }
     
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputAmount= GetInputValue('withdraw-input');
    if(inputAmount>0 ){
        const totalAmount=getUpdateTotal('withdraw-total');
        if(inputAmount>totalAmount){
            errorMessage('withdraw-error-message');

        }
        else{
        const totalwithdrawMoney=inputAmount+totalAmount;
        const total=document.getElementById('withdraw-total');
        total.innerText=totalwithdrawMoney;
        const bal=GetUpdateBalance(inputAmount,false);
       
    }
    }
    else {
        errorMessage('withdraw-error-message');
      
        }

        
      

    
   

})