const sendButton = document.getElementById("sendButton");
const titleInput = document.querySelector(".setTitle");



sendButton.addEventListener("click", function () {
    titleInput.value = "Hello World";
});