const listaServicios = [];
const tipoServicio = document.querySelector(".tipo");
const mostrarServicio = document.querySelector(".mostrarServicio");
const direccionServicio = document.querySelector(".direccion");
const enviarInfo = document.querySelector(".enviarInfo");
const informacion = document.querySelector(".informacion");
const mostrarDatos = document.querySelector(".mostrarDatos");
const tabla = document.querySelector(".tabla");

const movilesInput = document.querySelector(".moviles");

enviarInfo.addEventListener("click", function () {
    var servicio = tipoServicio.value.toUpperCase();
    var direccion = direccionServicio.value.toUpperCase();
    var moviles = movilesInput.value;

    if (listaServicios[servicio] === undefined) {
        listaServicios[servicio] = {
            "Direccion": direccion,
            "Moviles" : moviles,
        };
    };

    informacion.innerHTML = ``;
    
    console.log(listaServicios)
    
    mostrar();
});

function mostrar() {
    mostrarDatos.innerHTML = "";
    for (servicio in listaServicios) {
        var datosServicio = listaServicios[servicio];
        
        mostrarDatos.innerHTML += `
        <table>
            <thead>
                <tr class="tabla">
                    <th><u>SERVICIO</u></th>
                    <th><u>DIRECCION</u></th>
                    <th><u>MOVILES</u></th>
                </tr>
            </thead>
            <tbody class="mostrarServicio">
                <tr>
                    <td>${servicio}</td>
                    <td>${datosServicio["Direccion"]}</td>
                    <td class="movil">${datosServicio["Moviles"]}</td>
                </tr>
            </tbody>
        </table>
        `
    };
}

