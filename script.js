// Seleccionamos los elementos del formulario
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const luckyButton = document.getElementById('lucky-btn');

// 1. EVENTO PRINCIPAL: Detecta cuando el usuario presiona ENTER o da click en "Buscar con Google"
searchForm.addEventListener('submit', function(event) {
    // Evitamos que el formulario haga el envío por defecto del navegador
    event.preventDefault();
    
    // Obtenemos el texto limpio que escribió el usuario
    const query = searchInput.value.trim();
    
    // Si el usuario escribió algo, lo redireccionamos dinámicamente
    if (query !== "") {
        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// 2. EVENTO "ME SIENTO CON SUERTE": Redirección directa al primer resultado de Google
luckyButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    
    if (query !== "") {
        // El parámetro &btnI=1 le dice a Google que use la función "Voy a tener suerte"
        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    } else {
        // Si la barra está vacía, Google por defecto te lleva a la página de Doodles
        window.location.href = "https://doodles.google";
    }
});
