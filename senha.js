var check = false
var visualizar = document.getElementById('visualizar')
var senha = document.getElementById('senha')

function mostrarSenha() {
    if (check == false) {
        check = true
        senha.type = 'text'
        visualizar.style.backgroundImage = 'url(Images/visualizar-2.png)'
    } else {
        check = false
        senha.type ='password'
        visualizar.style.backgroundImage = 'url(Images/visualizar.png)'
    }
}

visualizar.addEventListener('click', mostrarSenha)