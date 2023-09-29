document.addEventListener("DOMContentLoaded", function() {
    var texto = "Student-connects";
    var elementoTexto = document.getElementById("Student-connects");
    var index = 0;

    function mostrarSiguienteCaracter() {
        if (index < texto.length) {
            elementoTexto.innerHTML += texto.charAt(index);
            index++;
            setTimeout(mostrarSiguienteCaracter, 180); 
        }
    }

    mostrarSiguienteCaracter();
});

document.getElementById("Blockprint").onclick = function() {
    document.getElementById("Blockprint").remove();
}
document.getElementById("Blockprint").addEventListener("click", function() {
    // Oculta el contenido existente
    document.getElementById("register").style.display = "none"; 
    // Muestra el formulario
    document.getElementById("register").style.display = "block";

});

// Inicio de sesion
 document.getElementById("Iniciar_sesion").addEventListener("click", function() {
 document.getElementById("Registro-one").style.display = "none";
document.getElementById("inicioSesionFor").style.display = "block";
});

// pagina
 document.getElementById("entrar").addEventListener("click", function(){
    window.location = "principal.html";
 })
 