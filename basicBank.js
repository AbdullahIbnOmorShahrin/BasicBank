



const depositButton = document.getElementById('btn-deposit');
depositButton.addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const newDepositNumber = parseFloat(inputField.value);
    const depositDisplay = document.getElementById('deposit-display');
    const previousDepositNumber = parseFloat(depositDisplay.innerText);
    const totalDepositNumber = previousDepositNumber + newDepositNumber;
    depositDisplay.innerText = totalDepositNumber;

    const balanceDisplay = document.getElementById('balance-display');
    balanceNumber = parseFloat(balanceDisplay.innerText);
    totalBalance = balanceNumber + newDepositNumber;
    balanceDisplay.innerText = totalBalance;
    inputField.value = '';
})

const withdrawButton = document.getElementById('btn-withdraw');
withdrawButton.addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawNumber = parseFloat(withdrawField.value);

    const withdrawDisplay = document.getElementById('withdraw-display');
    const previousWithdrawNumber = parseFloat(withdrawDisplay.innerText);

    const balanceDisplay = document.getElementById('balance-display');
    const balanceNumber = parseFloat(balanceDisplay.innerText);

    withdrawField.value = '';

    if (balanceNumber < newWithdrawNumber) {
        alert('you do not have enough money');
        return;
    }

    const totalWithdrawNumber = previousWithdrawNumber + newWithdrawNumber;
    withdrawDisplay.innerText = totalWithdrawNumber;

    totalBalance = balanceNumber - newWithdrawNumber;
    balanceDisplay.innerText = totalBalance;

})
