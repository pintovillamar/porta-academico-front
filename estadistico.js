// List of courses and their corresponding values
// const courses = [
//     {name: 'Biología', value: 718},
//     {name: 'Derecho', value: 62},
//     {name: 'Ing. Industrial', value: 531},
//     {name: 'Ing. Mecánica', value: 868},
//     {name: 'Medicina', value: 344},
//     {name: 'Administración', value: 1145}
// ];



document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const API_URL = 'http://tarea1.demon.cl/estudiantes/carrera';
=======
    const API_URL = 'https://204.216.171.53:8000/estudiantes/carrera';
>>>>>>> 76390e47baab069884982dce0f70caa3b30ea613
    
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            populatePieChart(data);
        })
        .catch(error => console.error('Error fetching course data:', error));
});

function populatePieChart(courses) {
    const ul = document.querySelector('.pieID.legend');
    ul.innerHTML = ''; // Clear any existing content

    courses.forEach(course => {
        const li = document.createElement('li');

        const em = document.createElement('em');
        em.textContent = course.name;

        const span = document.createElement('span');
        span.textContent = course.value;

        li.appendChild(em);
        li.appendChild(span);
        ul.appendChild(li);
    });

    // Update the pie chart visualization
    createPie(".pieID.legend", ".pieID.pie");
}



// function populatePieChart(courses) {
//     const ul = document.querySelector('.pieID.legend');
//     ul.innerHTML = ''; // Clear any existing content

//     courses.forEach(course => {
//         const li = document.createElement('li');

//         const em = document.createElement('em');
//         em.textContent = course.name;

//         const span = document.createElement('span');
//         span.textContent = course.value;

//         li.appendChild(em);
//         li.appendChild(span);
//         ul.appendChild(li);
//     });

//     // You might need to call a function to update the pie chart visualization here
//     updatePieChartVisualization(courses);
// }

// function updatePieChartVisualization(courses) {
//     // This is just a placeholder function for now
//     console.log('Updating pie chart visualization with:', courses);
// }
