const secretWords = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const reversedSecretWords = {};

// Localiza as <div>s opcionais do container de resultado
const emptyDiv = document.getElementById("empty");
const filledDiv = document.getElementById("filled");

// Inverte a ordem de chave e valor de secretWords e armazena em resversedSecretsWords
function reverseSecretWords() {

    for (const key in secretWords) {
        const value = secretWords[key];
        reversedSecretWords[value] = key;
    }
}


function encrypt() {
    let text = document.getElementById("text").value;

    for (const [key, value] of Object.entries(secretWords)) {

        // Dá o replace de forma global (todos os elementos)
        text = text.replace(new RegExp(key, 'g'), value);
    }

    const encryptedText = document.getElementById("text-result");

    // Renderiza o texto criptografado na <div> de resultado
    encryptedText.innerHTML = text;

    // Esconde a div principal e renderiza a div com o texto criptografado
    emptyDiv.style.display = "none";
    filledDiv.style.display = "block";
}

function decrypt() {
    let text = document.getElementById("text").value;

    // Inverte a ordem de chave e valor para descriptografar
    reverseSecretWords();

    for (const [key, value] of Object.entries(reversedSecretWords)) {

        // Dá o replace de forma global (todos os elementos)
        text = text.replace(new RegExp(key, 'g'), value);
    }

    const decryptedText = document.getElementById("text-result");

    // Renderiza o texto descriptografado na <div> de resultado
    decryptedText.innerHTML = text;

    // Esconde a div principal e renderiza a div com o texto descriptografado
    emptyDiv.style.display = "none";
    filledDiv.style.display = "block";
}