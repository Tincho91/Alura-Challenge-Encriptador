
const inputText = document.querySelector("#text");
const inputResult = document.querySelector("#result-area");

const encryptBtn = document.querySelector("#encrypt");
const decryptBtn = document.querySelector("#decrypt");
const copyBtn = document.querySelector("#copy")


//Encrypt

function encryptText (){
    var message = inputText.value;
    var encryptedMessage = message
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    inputResult.value = encryptedMessage;
}


//Decrypt

function decryptText (){
    var encryptedMessage = inputText.value;
    var message = encryptedMessage
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResult.value = message;
}

function copyText () {
    var encryptedMessage = inputResult.value;
    navigator.clipboard.writeText(inputResult.value);
}

copyBtn.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Mensaje Copiado',
        showConfirmButton: false,
        timer: 1500
      })
});


encryptBtn.onclick = encryptText;

decryptBtn.onclick = decryptText;

copyBtn.onclick = copyText;