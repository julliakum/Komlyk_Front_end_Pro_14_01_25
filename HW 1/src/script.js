const dialogWindowElement = document.querySelector('.dialog-window');
const messageInputElement = document.querySelector('.message-input');
const sendButtonElement = document.querySelector('.send-button');

let isDialogActive = true;

function addDialogMessage(senderName, messageText) {
  const messageParagraph = document.createElement('p');
  messageParagraph.innerHTML = `<strong>${senderName}:</strong> ${messageText}`;
  dialogWindowElement.appendChild(messageParagraph);
  dialogWindowElement.scrollTop = dialogWindowElement.scrollHeight;
}

async function getRandomBrowserReply() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const commentsArray = await response.json();
  const randomIndex = Math.floor(Math.random() * commentsArray.length);
  return commentsArray[randomIndex].body;
}

function scheduleBrowserReply() {
  const randomDelayMilliseconds = Math.random() * 9000 + 1000;

  setTimeout(async () => {
    if (!isDialogActive) return;

    const shouldEndDialog = Math.random() < 0.1;

    if (shouldEndDialog) {
      addDialogMessage('Browser', 'I am ending the dialogue. Have a nice day!');
      isDialogActive = false;
      return;
    }

    const browserReplyText = await getRandomBrowserReply();
    addDialogMessage('Browser', browserReplyText);
  }, randomDelayMilliseconds);
}

sendButtonElement.addEventListener('click', () => {
  if (!isDialogActive) return;

  const userMessage = messageInputElement.value.trim();
  if (!userMessage) return;

  addDialogMessage('You', userMessage);
  messageInputElement.value = '';

  if (userMessage.toLowerCase() === 'my watch has ended') {
    addDialogMessage('Browser', 'Goodbye! It was nice talking to you!');
    isDialogActive = false;
    return;
  }

  scheduleBrowserReply();
});

messageInputElement.addEventListener('keypress', function(keyboardEvent) {
  if (keyboardEvent.key === 'Enter') {
    sendButtonElement.click();
  }
});
