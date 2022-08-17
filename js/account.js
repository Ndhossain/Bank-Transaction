// function deposit(type) {
//     console.log(type)
//     if (document.getElementById('depositAmount').value === '') {
//         alert('Please Enter a Valid Amount');
//         return ;
//     };
//     const totalDepositAmount = parseFloat(document.getElementById('depositAmount').value) + parseFloat(document.getElementById('deposit').innerText);
//     document.getElementById('deposit').innerText = totalDepositAmount;
//     const totalBalanceAmount = parseFloat(document.getElementById('depositAmount').value) + parseFloat(document.getElementById('balance').innerText);
//     document.getElementById('balance').innerText = totalBalanceAmount;
//     document.getElementById('depositAmount').value = '';
// }

// function withdraw() {
//     if (document.getElementById('withdrawAmount').value === '') {
//         alert('Please Enter a Valid Amount');
//         return ;
//     };
//     const totalBalanceAmount = parseFloat(document.getElementById('balance').innerText) - parseFloat(document.getElementById('withdrawAmount').value);
//     if (totalBalanceAmount < 0) {
//         alert("You don't have enough money to withdraw");
//         return ;
//     }
//     const totalWithdrawAmount = parseFloat(document.getElementById('withdrawAmount').value) + parseFloat(document.getElementById('withdraw').innerText);
//     document.getElementById('withdraw').innerText = totalWithdrawAmount;
//     document.getElementById('balance').innerText = totalBalanceAmount;
//     document.getElementById('withdrawAmount').value = '';
// }

function accountBalanceConfig(type) {
    if (document.getElementById(`${type}Amount`).value === '' || document.getElementById(`${type}Amount`).value < 0) {
        alert('Please Enter a Valid Amount');
        document.getElementById(`${type}Amount`).value = '';
        return ;
    };
    if (type === 'withdraw') {
        const totalBalanceAmount = parseFloat(document.getElementById('balance').innerText) - parseFloat(document.getElementById('withdrawAmount').value);
        if (totalBalanceAmount < 0) {
            alert("You don't have enough money to withdraw");
            return ;
        }
        document.getElementById('balance').innerText = totalBalanceAmount;
    } else {
        const totalBalanceAmount = parseFloat(document.getElementById('depositAmount').value) + parseFloat(document.getElementById('balance').innerText);
        document.getElementById('balance').innerText = totalBalanceAmount;
    }
    const totalAmount = parseFloat(document.getElementById(`${type}Amount`).value) + parseFloat(document.getElementById(type).innerText);
    document.getElementById(type).innerText = totalAmount;
    document.getElementById(`${type}Amount`).value = '';
}