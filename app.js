// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigosDisponibles = [];
let historialSorteados = []; // Para verificar que no se repitan hasta que se agoten

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 
    if (nombre !== "") {
        if (!amigos.includes(nombre)) { // Evita duplicados en la lista de amigos
            amigos.push(nombre);
            amigosDisponibles.push(nombre); // También lo agrega a los sorteables
            mostrarLista();
            input.value = "";
        } else {
            alert("Este nombre ya ha sido ingresado.");
        }
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos antes de sortear.");
        return;
    }

    // Si la lista de sorteables está vacía, reiniciarla
    if (amigosDisponibles.length === 0) {
        alert("Todos los amigos han sido sorteados. Reiniciando el sorteo.");
        amigosDisponibles = [...amigos]; // Restauramos la lista original
        historialSorteados = []; // Limpiamos el historial
    }

    // Seleccionar un amigo aleatorio que no se haya repetido en esta ronda
    let amigoSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
        amigoSorteado = amigosDisponibles[indiceAleatorio];
    } while (historialSorteados.includes(amigoSorteado) && amigosDisponibles.length > 1);

    // Eliminar el nombre sorteado de la lista de disponibles
    amigosDisponibles = amigosDisponibles.filter(amigo => amigo !== amigoSorteado);
    
    // Guardarlo en el historial para evitar repeticiones hasta que se agoten los nombres
    historialSorteados.push(amigoSorteado);

    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nombre) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `🎉 ${nombre} 🎉`;
    resultado.appendChild(li);
}

