document.addEventListener('DOMContentLoaded', function() {
    const studentSelect = document.getElementById('student');
    const form = document.getElementById('student-select-form');
  
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
  
    // Handle form submission to delete student
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const studentId = studentSelect.value;
      if (studentId) {
        fetch(`https://tarea1.demon.cl/api/eliminar-estudiante/${studentId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          console.log('Success:', data);
          alert('Estudiante eliminado exitosamente');
          // Remove deleted student from dropdown
          const optionToRemove = studentSelect.querySelector(`option[value="${studentId}"]`);
          if (optionToRemove) {
            studentSelect.removeChild(optionToRemove);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error eliminando el estudiante');
        });
      } else {
        alert('Seleccione un estudiante para eliminar');
      }
    });
  });