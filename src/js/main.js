let socket = new WebSocket('wss://localhost:5500');

document.forms.publish.onsubmit = function() {
    let outgoingMessage = this.message.value;

    socket.send(outgoingMessage);
    return false;
}

socket.onmessage = function(event) {
    let message = event.data;
    console.log(message);

    let messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('chat-window').append(messageElem);

}