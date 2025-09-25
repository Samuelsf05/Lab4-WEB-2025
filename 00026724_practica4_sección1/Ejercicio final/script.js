// Recordatorios predeterminados
const recordatorios = {
  lunes: "Atender un cliente específico",
  martes: "Visitar una agencia fuera de la ciudad",
  miércoles: "Llevar a tu hija al ballet",
  jueves: "Priorizar entregas de desarrollo",
  viernes: "Atender problemas de manera remota",
  sábado: "Hacer lo que tu esposa quiera 😅",
  domingo: "Descansar"
};

let diaActual = "";

// Mostrar recordatorio al hacer clic
function mostrarRecordatorio(dia) {
  diaActual = dia;
  document.getElementById("dia-seleccionado").textContent = dia.charAt(0).toUpperCase() + dia.slice(1);
  document.getElementById("recordatorio").textContent = recordatorios[dia];
  document.getElementById("nuevo").value = "";
  document.getElementById("seccion-resultado").classList.remove("oculto");
}

// Guardar un nuevo recordatorio
function modificarRecordatorio() {
  const nuevoTexto = document.getElementById("nuevo").value.trim();
  if (nuevoTexto && diaActual) {
    recordatorios[diaActual] = nuevoTexto;
    document.getElementById("recordatorio").textContent = nuevoTexto;
    alert("Recordatorio actualizado para " + diaActual);
  }
}
