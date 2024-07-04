document.addEventListener('DOMContentLoaded', function() {
  const programaSelect = document.getElementById('programa');
  const form = document.getElementById('student-form');

  // Fetch the data from the backend
  fetch('https://tarea1.demon.cl/carreras')
    .then(response => response.json())
    .then(data => {
      // Populate the select element with the fetched data
      data.forEach(programa => {
        const option = document.createElement('option');
        option.value = programa.id; // Assuming each program has an 'id' field
        option.textContent = programa.nombre; // Assuming each program has a 'nombre' field
        programaSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching programa académico:', error);
    });

  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
      nombres: form.name.value,
      apellido_paterno: form.apellido1.value,
      apellido_materno: form.apellido2.value,
      carrera_id: form.programa.value
    };

    fetch('https://tarea1.demon.cl/api/crear-estudiante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('Success:', data);
      alert('Estudiante creado exitosamente');
      // Optionally, reset the form or redirect the user
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error creando el estudiante');
    });
  });
});