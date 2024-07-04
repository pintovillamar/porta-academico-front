document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = document.getElementById('student');
    const programaSelect = document.getElementById('programa');
    const form = document.getElementById('student-form');
  
    // Fetch the list of students and populate the dropdown
    fetch('https://tarea1.demon.cl/estudiantes')
      .then(response => response.json())
      .then(data => {
        data.forEach(student => {
          const option = document.createElement('option');
          option.value = student.id; // Assuming each student has an 'id' field
          option.textContent = `${student.nombres} ${student.apellido_paterno} ${student.apellido_materno}`;
          studentSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  
    // Fetch the list of programs and populate the dropdown
    fetch('https://tarea1.demon.cl/carreras')
      .then(response => response.json())
      .then(data => {
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
  
    // When a student is selected, fetch their details and populate the form
    studentSelect.addEventListener('change', function() {
      const studentId = studentSelect.value;
      if (studentId) {
        fetch(`https://tarea1.demon.cl/estudiante/${studentId}`)
          .then(response => response.json())
          .then(data => {
            form.name.value = data.nombres;
            form.apellido1.value = data.apellido_paterno;
            form.apellido2.value = data.apellido_materno;
            form.programa.value = data.carrera_id;
          })
          .catch(error => {
            console.error('Error fetching student details:', error);
          });
      } else {
        form.reset();
      }
    });
  
    // Handle form submission to update student details
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const studentId = studentSelect.value;
      const formData = {
        nombres: form.name.value,
        apellido_paterno: form.apellido1.value,
        apellido_materno: form.apellido2.value,
        carrera_id: form.programa.value
      };
  
      fetch(`https://tarea1.demon.cl/api/actualizar-estudiante/${studentId}`, {
        method: 'PUT',
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
        alert('Estudiante actualizado exitosamente');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error actualizando el estudiante');
      });
    });
  });