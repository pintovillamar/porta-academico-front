//document.addEventListener('DOMContentLoaded', () => {
//    // Assuming you have an API endpoint or a mock data array
//    const apiUrl = 'https://api.example.com/students'; // Replace with actual API URL
//
//    // Fetch the data from the API
//    fetch(apiUrl)
//        .then(response => response.json())
//        .then(data => {
//            // Assuming data is an array of student objects
//            populateTable(data.slice(0, 10)); // Get the first 10 students
//        })
//        .catch(error => console.error('Error fetching student data:', error));
//});


// mocking
// const mockData = [
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' },
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' },
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' },
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' },
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' },
//     { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', programaAcademico: 'Ingeniería' },
//     { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', programaAcademico: 'Medicina' }
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     populateTable(mockData.slice(0, 10)); // Use mock data for demonstration
// });

// end of mocking


document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'http://tarea1.demon.cl/estudiantes/carreras';
    
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error('Error fetching student data:', error));
})

// function populateTable(students) {
//     const studentContainer = document.getElementById('student-container');
//     students.forEach((student, index) => {
//         const row = document.createElement('tr');

//         const cellIndex = document.createElement('td');
//         cellIndex.textContent = index + 1;
//         row.appendChild(cellIndex);

//         const cellNombre = document.createElement('td');
//         cellNombre.textContent = student.nombre;
//         row.appendChild(cellNombre);

//         const cellApellidoPaterno = document.createElement('td');
//         cellApellidoPaterno.textContent = student.apellidoPaterno;
//         row.appendChild(cellApellidoPaterno);

//         const cellApellidoMaterno = document.createElement('td');
//         cellApellidoMaterno.textContent = student.apellidoMaterno;
//         row.appendChild(cellApellidoMaterno);

//         const cellPrograma = document.createElement('td');
//         cellPrograma.textContent = student.programaAcademico;
//         row.appendChild(cellPrograma);

//         studentContainer.appendChild(row);
//     });
// }

function populateTable(students) {
    const tableBody = document.getElementById('student-container');
    tableBody.innerHTML = ''; // Clear any existing content

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        const cellIndex = document.createElement('td');
        cellIndex.textContent = index + 1;
        row.appendChild(cellIndex);

        const cellNombres = document.createElement('td');
        cellNombres.textContent = student.nombres;
        row.appendChild(cellNombres);

        const cellApellidoPaterno = document.createElement('td');
        cellApellidoPaterno.textContent = student.apellido_paterno;
        row.appendChild(cellApellidoPaterno);

        const cellApellidoMaterno = document.createElement('td');
        cellApellidoMaterno.textContent = student.apellido_materno;
        row.appendChild(cellApellidoMaterno);

        const cellProgramaAcademico = document.createElement('td');
        cellProgramaAcademico.textContent = student.carrera; // Assuming carrera_id should be displayed
        row.appendChild(cellProgramaAcademico);

        tableBody.appendChild(row);
    });
}