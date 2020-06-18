const feedbackInput = document.querySelector('.form_input');
const feedbackButton = document.querySelector('.form_button');
const feedbackWrapper = document.querySelector('.feedback_wrapper');
const wrongNumberText = 'Пожалуйста, заполните все поля';
const successfulMessageText = 'Сообщение отправленно';

const data = {
  number: ''
};

let saveMessage = (e) => {
    let number = feedbackInput.value.trim();
    e.preventDefault();
    if (number !=='') {
        data.number = number;
        showMassage(successfulMessageText);
    } else {
        showMassage(wrongNumberText);
    }
};

let showMassage = (text) => {
    successfulMessage(text);
    setTimeout(closingMessage, 1000);
    setTimeout(remuveMessage, 1200);
};

let successfulMessage = (text) => {
    const message = document.createElement('div');
    message.className = 'message';
    let messageText = document.createElement('p');
    messageText.innerText = text;
    messageText.className = 'message_text';
    message.appendChild(messageText);
    feedbackWrapper.appendChild(message);
};

let closingMessage = () => {
    let successfulMessage = document.querySelector('.message');
    successfulMessage.className = 'closing';
};

let remuveMessage = () => {
    let successfulMessage = document.querySelector('.closing');
    feedbackWrapper.removeChild(successfulMessage);
};

feedbackButton.onclick = saveMessage;