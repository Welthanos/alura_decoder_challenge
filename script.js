const secretWords = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const encryptedText = [];
const decryptedText = [];

function encrypt() {
    let text = document.getElementById("text").value;

    for (const [key, value] of Object.entries(secretWords)) {
        text = text.replace(key, value);
    }

    encryptedText.unshift(text);
}

function decrypt() {
    let text = document.getElementById("text").value;

    for (const [key, value] of Object.entries(secretWords)) {
        text = text.replace(value, key);
    }

    decryptedText.unshift(text);
}

console.log(encryptedText);
console.log(decryptedText);