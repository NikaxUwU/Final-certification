const passFieldFirst = document.querySelector('#password1');
const passFieldSecond = document.querySelector('#password2');
document.addEventListener('input', (e) => {
    if (e.target.type == 'password') {
        if (passFieldFirst.value !== passFieldSecond.value) {
            passFieldFirst.style = "border: 1px solid red";
            passFieldSecond.style = "border: 1px solid red";
        } else {
            passFieldFirst.style = "border: 1px solid green";
            passFieldSecond.style = "border: 1px solid green";
        }
    }
});