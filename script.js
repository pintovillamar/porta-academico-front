import { database, ref, onValue } from "./firebaseConfig.js";

const tasksContainer = document.getElementById("student-container");

window.addEventListener("DOMContentLoaded", () => {
  const studentsRef = ref(database, 'students'); // Ajusta al path correcto en tu database

  onValue(studentsRef, (snapshot) => {
    tasksContainer.innerHTML = ""; // Limpiar el contenido existente

    let index = 1; // Para llevar un seguimiento de los números de fila

    snapshot.forEach((childSnapshot) => {
      const student = childSnapshot.val(); // Asumiendo que tus datos representan estudiantes

      tasksContainer.innerHTML += `
        <tr>
          <td>${index++}</td>
          <td>${student.nombres}</td>
          <td>${student.apellidoPaterno}</td>
          <td>${student.apellidoMaterno}</td>
          <td>${student.programaAcademico}</td>
          <td></td>
        </tr>`;
    });
  });
});
