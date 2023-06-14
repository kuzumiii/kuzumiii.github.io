const targetDiv = document.getElementById('target-div');
const searchButton = document.getElementById('toggle-button');
const searchInput = document.getElementById('search-input');
const targetDivStuffed = document.getElementById('target-div-stuffed')


searchButton.addEventListener('click', function () {
    targetDiv.classList.toggle('inactive');
    targetDivStuffed.classList.toggle('inactive');
    searchInput.focus();

    if (searchInput.value.trim() !== '') {
        // Realizar la lógica de búsqueda aquí
        console.log('Realizando búsqueda: ' + searchInput.value);
    }
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // agregar la lógica para enviar el formulario por correo 

    // muestra una alerta de éxito
    alert("El correo de consulta ha sido enviado correctamente.");
    this.submit();
    this.reset();
});

function redirectToInicio() {
    window.location.href = "/"
}