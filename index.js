// Datos de ejemplo para México y Estados Unidos
const paises = {
    México: {
        estados: ["Ciudad de México", "Nuevo León", "Jalisco"],
        municipios: {
            "Ciudad de México": {
                "Benito Juárez": ["Colonia del Valle", "Narvarte", "Del Valle Centro"],
                "Coyoacán": ["Coyoacán Centro", "Santa Catarina", "Los Pedregales"],
                "Miguel Hidalgo": ["Polanco", "Lomas de Chapultepec", "Anáhuac"]
            },
            "Nuevo León": {
                "Monterrey": ["Localidad10", "Localidad11", "Localidad12"],
                "Guadalupe": ["Localidad13", "Localidad14", "Localidad15"],
                "San Pedro Garza García": ["Localidad16", "Localidad17", "Localidad18"]
            },
            "Jalisco": {
                "Guadalajara": ["Localidad19", "Localidad20", "Localidad21"],
                "Zapopan": ["Localidad22", "Localidad23", "Localidad24"],
                "Tlaquepaque": ["Localidad25", "Localidad26", "Localidad27"]
            }
        }
    },
    "Estados Unidos": {
        estados: ["California", "Texas", "Florida"],
        municipios: {
            "California": {
                "Los Angeles": ["Localidad28", "Localidad29", "Localidad30"],
                "San Francisco": ["Localidad31", "Localidad32", "Localidad33"],
                "San Diego": ["Localidad34", "Localidad35", "Localidad36"]
            },
            "Texas": {
                "Houston": ["Localidad37", "Localidad38", "Localidad39"],
                "Austin": ["Localidad40", "Localidad41", "Localidad42"],
                "Dallas": ["Localidad43", "Localidad44", "Localidad45"]
            },
            "Florida": {
                "Miami": ["Localidad46", "Localidad47", "Localidad48"],
                "Orlando": ["Localidad49", "Localidad50", "Localidad51"],
                "Tampa": ["Localidad52", "Localidad53", "Localidad54"]
            }
        }
    }
};

// Obtener el elemento select de países
const selectPais = document.getElementById('selectPais');

// Llenar el select de países con los nombres de los países
for (const pais in paises) { // Recorre sobre cada país en el arreglo 'paises'
    const opcion = document.createElement('option'); // Crea un nuevo elemento 'option' 
    opcion.textContent = pais; // Establece el texto del elemento 'option' como el nombre del país
    selectPais.appendChild(opcion); // Agrega el elemento 'option' al menú desplegable de países
}


// Función para llenar el select de estados basado en el país seleccionado
function llenarEstados() {
    // Obtener el país seleccionado
    const paisSeleccionado = selectPais.value;
    // Obtener el elemento select de estados
    const selectEstado = document.getElementById('selectEstado');
    // Limpiar opciones anteriores
    selectEstado.innerHTML = '';
    // Iterar sobre los estados del país seleccionado y agregar opciones al select de estados
    paises[paisSeleccionado].estados.forEach(estado => {
        const opcion = document.createElement('option');
        opcion.textContent = estado;
        selectEstado.appendChild(opcion);
    });
    // Llamar a llenarMunicipios para llenar las opciones de municipios basado en el estado seleccionado
    llenarMunicipios();
}

// Función para llenar el select de municipios basado en el estado seleccionado
function llenarMunicipios() {
    // Obtener el país y el estado seleccionados
    const paisSeleccionado = selectPais.value;
    const estadoSeleccionado = document.getElementById('selectEstado').value;
    // Obtener el elemento select de municipios
    const selectMunicipio = document.getElementById('selectMunicipio');
    // Limpiar opciones anteriores
    selectMunicipio.innerHTML = '';
    // Iterar sobre los municipios del estado seleccionado y agregar opciones al select de municipios
    for (const municipio in paises[paisSeleccionado].municipios[estadoSeleccionado]) {
        const opcion = document.createElement('option');
        opcion.textContent = municipio;
        selectMunicipio.appendChild(opcion);
    }
    // Llamar a llenarLocalidades para llenar las opciones de localidades basado en el municipio seleccionado
    llenarLocalidades();
}

// Función para llenar el select de localidades basado en el municipio seleccionado
function llenarLocalidades() {
    // Obtener el país, el estado y el municipio seleccionados
    const paisSeleccionado = selectPais.value;
    const estadoSeleccionado = document.getElementById('selectEstado').value;
    const municipioSeleccionado = document.getElementById('selectMunicipio').value;
    // Obtener el elemento select de localidades
    const selectLocalidad = document.getElementById('selectLocalidad');
    // Limpiar opciones anteriores
    selectLocalidad.innerHTML = '';
    // Iterar sobre las localidades del municipio seleccionado y agregar opciones al select de localidades
    paises[paisSeleccionado].municipios[estadoSeleccionado][municipioSeleccionado].forEach(localidad => {
        const opcion = document.createElement('option');
        opcion.textContent = localidad;
        selectLocalidad.appendChild(opcion);
    });
}

// Función para mostrar los datos seleccionados con el botón en el div con id mostrarDatos
function mostrarDatosSeleccionados() {
    // Obtener el país seleccionado del elemento selectPais
    const paisSeleccionado = selectPais.value;
    // Obtener el estado seleccionado del elemento con id selectEstado
    const estadoSeleccionado = document.getElementById('selectEstado').value;
    // Obtener el municipio seleccionado del elemento con id selectMunicipio
    const municipioSeleccionado = document.getElementById('selectMunicipio').value;
    // Obtener la localidad seleccionada del elemento con id selectLocalidad
    const localidadSeleccionada = document.getElementById('selectLocalidad').value;
    // Obtener el elemento div con id mostrarDatos
    const mostrarDatos = document.getElementById('mostrarDatos');
    // Mostrar los datos seleccionados dentro del div mostrarDatos
    mostrarDatos.innerHTML = `
        <p>País: ${paisSeleccionado}</p>
        <p>Estado: ${estadoSeleccionado}</p>
        <p>Municipio: ${municipioSeleccionado}</p>
        <p>Localidad: ${localidadSeleccionada}</p>
    `;
}
