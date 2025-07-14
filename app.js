document.addEventListener("DOMContentLoaded", () => {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  // Crear columnas para 12 semestres
  for (let i = 1; i <= 12; i++) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.id = `semestre-${i}`;
    col.innerHTML = `<h3>${i}° Semestre</h3>`;

    // Solo prueba: Agregar un botón simple
    const btn = document.createElement("button");
    btn.textContent = `Asignatura ${i}`;
    btn.className = "ramo";
    col.appendChild(btn);

    malla.appendChild(col);
  }
});
