function getInputValue(data){
    const mainAmountGot = document.getElementById(data);
   
    const mainAmountText = mainAmountGot.value;
    const mainAmount = parseFloat(mainAmountText);
    mainAmountGot.value = '';  
    return parseFloat(mainAmount);
}

function updateTotalField(desireID, dataEnter){
    const totalElement =document.getElementById(desireID);
    const totalText = totalElement.innerText;

    const totalElementEnter = parseFloat(totalText);
    // console.log(totalDeposit);
    const sumDeposit = dataEnter + totalElementEnter;
    totalElement.innerText = sumDeposit;
}


document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositAmount = document.getElementById('deposit-amount');
   
    // const depositEnterText = depositAmount.value;
    // const depositEnter = parseFloat(depositEnterText);

    const depositEnter = getInputValue("deposit-amount");



    //Total deposit
    // const totalDeposit =document.getElementById('total-deposit');
    // const totalDepositText = totalDeposit.innerText;

    // const totalDepositEnter = parseFloat(totalDepositText);
    // console.log(totalDeposit);
    // const sumDeposit = depositEnter + totalDepositEnter;
    // totalDeposit.innerText = sumDeposit;

    updateTotalField('total-deposit', depositEnter);

    //Add in total amount

    const totalBudget = document.getElementById('total-budget');
    const totalBudgetText = totalBudget.innerText;
    const totalBudgetEnter = parseFloat(totalBudgetText);
    const sumTotal = depositEnter + totalBudgetEnter;
    totalBudget.innerText = sumTotal;
     

})

document.getElementById('withdraw-button').addEventListener('click', function(){
   
    const withdrawEnter = getInputValue('withdraw-amount');
    // const withdrawAmount = document.getElementById('withdraw-amount');
    // const withdrawEnterText = withdrawAmount.value;
    // const withdrawEnter = parseFloat(withdrawEnterText);
    updateTotalField('total-withdraw', withdrawEnter);

    //Total withdraw
    // const totalWithdraw =document.getElementById('total-withdraw');
    // const totalWithdrawText = totalWithdraw.innerText;
    // const totalWithdrawEnter = parseFloat(totalWithdrawText);
    
    // const sumWithdraw = withdrawEnter + totalWithdrawEnter;

    // totalWithdraw.innerText = sumWithdraw;

    //Add in total amount
    const totalBudget = document.getElementById('total-budget');
    const totalBudgetText = totalBudget.innerText;
    const totalBudgetEnter = parseFloat(totalBudgetText);
    const sumTotal =    totalBudgetEnter-withdrawEnter;
    totalBudget.innerText = sumTotal;   

})