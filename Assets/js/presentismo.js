/**
 * 
 * @param identificador recibe el objeto (grid) a modificar
 * @param presenteId recibe la barra de los presentes
 * @param identificador recibe la barra de los ausentes
 */
function obtenerPresente(identificador, presenteId, ausenteId)
{
    console.log('"obtenerPresente(identificador) iniciado.');
    let cantPresente = 12; // Cantidad de presentes en el cuatrimestre, supongamos que ésto lo tomamos de una base de datos (bd)
    let cantAusente = 4; // Cantidad de ausentes en el cuatrimestre, supongamos que ésto lo tomamos de una base de datos (bd)
    let presentismoPerfecto = 16; // Clases a asistir en dicho cuatrimestre para tener el presentismo perfecto

    let grid = document.getElementById(identificador); // Obtengo la grilla a editar
    let presenteObj = document.getElementById(presenteId); // Obtengo la barra de "presentes"
    let ausenteObj = document.getElementById(ausenteId); // Obtengo la barra de "ausentes"

    grid.style.gridTemplateColumns = cantPresente/presentismoPerfecto*100 + '%' + cantAusente/presentismoPerfecto*100 + '%'; // Edito el tamaño de las columnas
    presenteObj.innerHTML = '<p>'+cantPresente+' asistencias</p>'; // Edito el HTML interno del objeto
    ausenteObj.innerHTML = '<p>'+cantAusente+' inasistencias</p>'; // Edito el HTML interno del objeto

}