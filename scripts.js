//Error validation
function containsInvalidCharacters(text) {
    const invalidPattern = /[A-ZÁÉÍÓÚáéíóúÜü]/;
    return invalidPattern.test(text);
}

//Encrypt buttom
document.getElementById('encrypt-button').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;

    if (containsInvalidCharacters(inputText)) {
        alert('Se ha ingresado un caracter invalido, por favor use unicamente letras en minuscula y sin tildes para la encripcion.');
        return;
    }

    var encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('input-text').value = '';
    document.getElementById('img-empty').style.display = 'none';
    document.getElementById('strong-empty').style.display = 'none';
    document.getElementById('p-empty').style.display = 'none';

    document.getElementById('displayed-text').textContent = encryptedText;
    document.getElementById('displayed-text').style.display = 'block';
    document.getElementById('copy-button').style.display = 'block';
});

//Decrypt button
document.getElementById('decrypt-button').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    if (containsInvalidCharacters(inputText)) {
        alert('Se ha ingresado un caracter invalido, por favor use unicamente letras en minuscula y sin tildes para la desencripcion.');
        return;
    }

    var decryptedText = inputText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    document.getElementById('input-text').value = '';
    document.getElementById('img-empty').style.display = 'none';
    document.getElementById('strong-empty').style.display = 'none';
    document.getElementById('p-empty').style.display = 'none';

    document.getElementById('displayed-text').textContent = decryptedText;
    document.getElementById('displayed-text').style.display = 'block';
    document.getElementById('copy-button').style.display = 'block';
});

//Copy button
document.getElementById('copy-button').addEventListener('click', function() {
    var displayedTextElement = document.getElementById('displayed-text');
    
    var range = document.createRange();
    range.selectNodeContents(displayedTextElement);
    
    var selection = window.getSelection();
    selection.removeAllRanges();
    
    selection.addRange(range);

    var textToCopy = document.getElementById('displayed-text').textContent;

    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Se ha copiado el texto al portapapeles');
    }).catch(function(err) {
        console.error('Se presento el siguiente error al copiar el texto al portapapeles: ', err);
    });

    var copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copiado!';
    copyButton.disabled = true;
    
    setTimeout(function() {
        copyButton.textContent = 'Copiar';
        copyButton.disabled = false;
    }, 2000);
});