const targetDiv = document.getElementById('target-div');
const searchButton = document.getElementById('toggle-button');
const searchInput = document.getElementById('search-input');
const targetDivStuffed = document.getElementById('target-div-stuffed')
const crossSearchButton = document.getElementById('close-button')

searchButton.addEventListener('click', function () {
    targetDiv.classList.toggle('inactive');
    targetDivStuffed.classList.toggle('inactive');
    searchInput.focus();
    
    
    if (searchInput.value.trim() !== '') {
        // Realizar la lógica de búsqueda aquí
        console.log('Realizando búsqueda: ' + searchInput.value);
    }
});

crossSearchButton.addEventListener('click', function () {
    searchInput.value = ''; // Borra el contenido del input de búsqueda
});


window.onscroll = function () {
    var scrollButton = document.getElementById("scrollBtn");
    if (document.documentElement.scrollTop > 0) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

document.getElementById("scrollBtn").addEventListener("click", function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function redirectToHelp() {
    window.location.href = "/html/ayuda.html";
}
