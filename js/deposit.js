// step-1: add event listner to the depositbutton
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2:get the deposit amount from the input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(depositAmount);
    //console.log(typeof newDepositAmount) because this is a string thats why we need to find it out or transform it to number so that we can plus both of them

   // step-3: get the current deposit total
   // for non-input (element other than input ,textarea) use innerText to get the text 
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(depositTotal)

// add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
   depositTotalElement.innerText = currentDepositTotal;

// step-6: get current balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

const currentBalanceTotal = previousBalanceTotal + currentDepositTotal;
balanceTotalElement.innerText = currentBalanceTotal;

   //step-7: clear the deposit field
   depositField.value ='';
})