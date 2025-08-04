let amigos = [];

function agregaAmigo() {
    const input = document.getElementById('amigo');
    const texto = input.value.trim();

    if (!esTextoValido(texto)) {
        alert("¡Debe ingresar el nombre de algún amigo!");
        input.value = "";    
        input.focus();
        return;
    }
    
    const yaExiste = amigos.some(amigo => amigo.toLowerCase() === texto.toLowerCase());
  if (yaExiste) {
    alert("Ese nombre ya fue añadido.");
    htmlElement.value = "";
    return;
  }
    amigos.push(texto);
    listarAmigos();

    input.value = "";        
    input.focus();          

    document.getElementById('listaAmigos').style.display = "block";

}




function listarAmigos(){
    let htmlElement = document.getElementById('listaAmigos');
    htmlElement.innerHTML = "";

    amigos.forEach(e => {
        const li = document.createElement("li");
        li.textContent = e;
        htmlElement.appendChild(li);
    });
}


function esTextoValido(element){
    return !elementoVacio(element) && isWord(element);
}

function elementoVacio(element){
    return element.length == 0;
}

function isWord(element){
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(element);
}


// sortearAmigo()
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡Debe ingresar al menos un amigo!");
        return;
    }

    const randNum = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[randNum];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<strong>El amigo seleccionado es: ${ganador}</strong>`;

    document.getElementById('listaAmigos').style.display = "none";

}



