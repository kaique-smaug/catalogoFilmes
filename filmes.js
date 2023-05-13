let form = document.querySelector('#form');
let button = document.querySelector('#button');
let campos = document.querySelectorAll('.required');
let spans = document.querySelectorAll('.span-requerid');
const validateEmailRegex = /^\S+@\S+\.\S+$/;

// Validando email se digitou o e-mail correto
function emailValidate() {
    if (!validateEmailRegex.test(campos[0].value)) {
        setError(0);
    } else {
        removeError(0);
    };
};

// Validando se a senha foi digitada e se tem o número de caracteres correto
function mainValidatePassword() {
    if (campos[1].value.length < 8) {
        setError(1);
    } else {
        removeError(1);
        comparePassword();
    };
};

// Validando o segundo campo de senha 
function comparePassword() {
    if (campos[1].value == campos[2].value && campos[2].value.length >= 8) {
        removeError(2);
    } else {
        setError(2);
    };
};
// Verificando o numero de caracteres, se não tiver um número certo de caracteres aplicaremos a função de erro
function setError(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
};

// Função para remover o erro na hora que difitar o número de caracteres correto

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
};

function directionPage() {
   
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    emailValidate();
    mainValidatePassword();
    comparePassword();
    directionPage()
    if (  campos[0].value != false && campos[1].value != false && campos[2].value != false) {
        location.href = 'filmes.html';
    };
});

