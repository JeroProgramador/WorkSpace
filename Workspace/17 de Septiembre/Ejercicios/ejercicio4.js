function nombre(){
    let miNombre = document.getElementById("minombre");

    let primerNombre = document.createElement("span");
    let apellido = document.createElement("i");

    primerNombre.innerHTML = "Jeronimo ";
    apellido.innerHTML = "Arroyave";

    miNombre.appendChild(primerNombre);
    miNombre.appendChild(apellido);
}