document.getElementById('loginButton').addEventListener('click', function () {
    document.getElementById('errorMessage').innerText = '';
    const email = document.getElementById('emailVal');
    const password = document.getElementById('passwordVal');
    if (email.value === '' || password.value === '') {
        console.log(email.value)
        if (email.value === '' && password.value === '') {
            document.getElementById('errorMessage').innerText = 'Enter your Email & Password first';
        } else if (email.value === '') {
            document.getElementById('errorMessage').innerText = 'Enter your Email first';
        } else {
            document.getElementById('errorMessage').innerText = 'Enter your Password first';
        }
        return ;
    }
    if (email.value === 'hhhssnahiid@gmail.com' && password.value === 'hhhssnahiid') {
        location.href = '../bankaccount.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid User Email or Password';
    }
})