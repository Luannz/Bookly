var btnContinuar = document.getElementById('continuar')

function mudarTela() {
    window.location.href = 'login.html'
}

btnContinuar.addEventListener('click', mudarTela)