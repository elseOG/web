function actualizarFechaHora()
{
    const ahora = new Date();

    const opcionesFecha = {
        weekday: 'long', year: 'numeric',month: 'long', day: 'numeric'
    };

    const fecha = ahora.toLocaleDateString('es-ES',opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES');

    const elemento = document.getElementById("fechaHora");
    if(elemento){  
        elemento.innerHTML = `${fecha} - ${hora}`;
    }
}

setInterval(actualizarFechaHora, 1000);

window.onload = actualizarFechaHora;