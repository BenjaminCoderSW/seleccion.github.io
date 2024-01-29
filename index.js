// Datos de ejemplo para México y Estados Unidos
const countries = {
    Mexico: {
        states: ["Ciudad de México", "Nuevo León", "Jalisco"],
        municipalities: {
            "Ciudad de México": {
                "Benito Juárez": ["Localidad1", "Localidad2", "Localidad3"],
                "Coyoacán": ["Localidad4", "Localidad5", "Localidad6"],
                "Miguel Hidalgo": ["Localidad7", "Localidad8", "Localidad9"]
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
        states: ["California", "Texas", "Florida"],
        municipalities: {
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

// Llenar el select de países con los nombres de los países
const countrySelect = document.getElementById('countrySelect');
for (const country in countries) {
    const option = document.createElement('option');
    option.textContent = country;
    countrySelect.appendChild(option);
}

// Función para llenar el select de estados basado en el país seleccionado
function populateStates() {
    const selectedCountry = countrySelect.value;
    const stateSelect = document.getElementById('stateSelect');
    stateSelect.innerHTML = ''; // Limpiar opciones anteriores
    countries[selectedCountry].states.forEach(state => {
        const option = document.createElement('option');
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    // Llamar a populateMunicipalities para llenar las opciones de municipios basado en el estado seleccionado
    populateMunicipalities();
}

// Función para llenar el select de municipios basado en el estado seleccionado
function populateMunicipalities() {
    const selectedCountry = countrySelect.value;
    const selectedState = document.getElementById('stateSelect').value;
    const municipalitySelect = document.getElementById('municipalitySelect');
    municipalitySelect.innerHTML = ''; // Limpiar opciones anteriores
    for (const municipality in countries[selectedCountry].municipalities[selectedState]) {
        const option = document.createElement('option');
        option.textContent = municipality;
        municipalitySelect.appendChild(option);
    }
    // Llamar a populateLocalities para llenar las opciones de localidades basado en el municipio seleccionado
    populateLocalities();
}

// Función para llenar el select de localidades basado en el municipio seleccionado
function populateLocalities() {
    const selectedCountry = countrySelect.value;
    const selectedState = document.getElementById('stateSelect').value;
    const selectedMunicipality = document.getElementById('municipalitySelect').value;
    const localitySelect = document.getElementById('localitySelect');
    localitySelect.innerHTML = ''; // Limpiar opciones anteriores
    countries[selectedCountry].municipalities[selectedState][selectedMunicipality].forEach(locality => {
        const option = document.createElement('option');
        option.textContent = locality;
        localitySelect.appendChild(option);
    });
}

// Función para mostrar los datos seleccionados
function displaySelectedData() {
    const selectedCountry = countrySelect.value;
    const selectedState = document.getElementById('stateSelect').value;
    const selectedMunicipality = document.getElementById('municipalitySelect').value;
    const selectedLocality = document.getElementById('localitySelect').value;
    const displayData = document.getElementById('displayData');
    displayData.innerHTML = `
        <p>País: ${selectedCountry}</p>
        <p>Estado: ${selectedState}</p>
        <p>Municipio: ${selectedMunicipality}</p>
        <p>Localidad: ${selectedLocality}</p>
    `;
}
