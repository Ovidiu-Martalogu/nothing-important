console.log(`loading...`);


const userName = document.getElementById('username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const btnUserName = document.querySelector(".btn-userName");
const btnemail = document.querySelector(".btn-email");
const btnMessage = document.querySelector(".btn-message");
const newMessage = document.querySelector('.container-msg');


// console.log(userName.value , email.value, message.value);


console.log(userName.value);
console.log(email.value);
console.log(message.value);


function ShowMessage() {
    const insertMsg = document.createElement('div');
    insertMsg.className = 'newMsg';
    insertMsg.textContent = message.value;
    newMessage.append(insertMsg);
}ShowMessage()

btnMessage.addEventListener('click', function (e) {
    e.target = ShowMessage;
})


