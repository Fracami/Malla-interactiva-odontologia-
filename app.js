const asignaturas = { // SEMESTRE 1 "Anatomía Humana Normal y Embriología": { semestre: 1, prerrequisitos: [] }, "Biología Celular": { semestre: 1, prerrequisitos: [] }, "Física Aplicada": { semestre: 1, prerrequisitos: [] }, "Introducción a la Odontología": { semestre: 1, prerrequisitos: [] }, "Habilidades Comunicativas": { semestre: 1, prerrequisitos: [] },

// SEMESTRE 2 "Anatomía Aplicada": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] }, "Química General e Inorgánica": { semestre: 2, prerrequisitos: [] }, "Genética Molecular Humana": { semestre: 2, prerrequisitos: ["Biología Celular"] }, "Histología General": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] }, "Introducción a la Clínica": { semestre: 2, prerrequisitos: ["Introducción a la Odontología"] }, "Inglés I": { semestre: 2, prerrequisitos: [] },

// SEMESTRE 3 "Bioquímica General": { semestre: 3, prerrequisitos: ["Química General e Inorgánica", "Biología Celular"] }, "Microbiología General": { semestre: 3, prerrequisitos: ["Histología General"] }, "Patología General I": { semestre: 3, prerrequisitos: ["Histología General", "Anatomía Aplicada"] }, "Histología Oral": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Laboratorio de Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Inglés II": { semestre: 3, prerrequisitos: ["Inglés I"] },

// SEMESTRE 4 "Bioquímica Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Histología Oral"] }, "Microbiología Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Microbiología General"] }, "Patología General II": { semestre: 4, prerrequisitos: ["Patología General I"] }, "Promoción y Educación en Salud": { semestre: 4, prerrequisitos: ["Introducción a la Clínica"] }, "Razonamiento Científico y Tecnologías": { semestre: 4, prerrequisitos: ["Habilidades Comunicativas"] }, "Inglés III": { semestre: 4, prerrequisitos: ["Inglés II"] }, "Biomateriales Dentales": { semestre: 4, prerrequisitos: ["Física Aplicada", "Anatomía Aplicada", "Química General e Inorgánica"] },

// SEMESTRE 5 "Farmacología I": { semestre: 5, prerrequisitos: ["Bioquímica Oral", "Microbiología Oral"] }, "Inglés IV": { semestre: 5, prerrequisitos: ["Inglés III"] },

// SEMESTRE 6 "Farmacología II": { semestre: 6, prerrequisitos: ["Farmacología I"] }, "Cariología": { semestre: 6, prerrequisitos: ["Microbiología Oral", "Farmacología I", "Inglés IV", "Promoción y Educación en Salud"] }, "Preclínico Integrado": { semestre: 6, prerrequisitos: ["Biomateriales Dentales", "Fisiología Oral y Oclusión"] },

// SEMESTRE 7 "Patología Dentomaxilar": { semestre: 7, prerrequisitos: ["Patología General II", "Microbiología Oral"] }, "Imagenología": { semestre: 7, prerrequisitos: ["Patología Dentomaxilar"] }, "Cirugía Bucal Básica": { semestre: 7, prerrequisitos: ["Microbiología Oral", "Patología Dentomaxilar"] }, "Fisiología Oral y Oclusión": { semestre: 7, prerrequisitos: ["Biomateriales Dentales"] },

// SEMESTRE 8 "Salud Pública I": { semestre: 8, prerrequisitos: ["Cariología"] }, "Pensamiento Crítico": { semestre: 8, prerrequisitos: ["Razonamiento Científico y Tecnologías"] },

// SEMESTRE 9 "Salud Pública II": { semestre: 9, prerrequisitos: ["Salud Pública I", "Patología Dentomaxilar"] }, "Cirugía Dentomaxilar": { semestre: 9, prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica"] }, "Odontología Restauradora": { semestre: 9, prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado", "Biomateriales Dentales"] }, "Prótesis Dentomaxilar": { semestre: 9, prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Fisiología Oral y Oclusión", "Preclínico Integrado"] }, "Endodoncia": { semestre: 9, prerrequisitos: ["Farmacología II", "Cariología", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"] }, "Periodoncia Clínica": { semestre: 9, prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"] }, "Patología Maxilofacial": { semestre: 9, prerrequisitos: ["Patología Dentomaxilar", "Imagenología"] },

// SEMESTRE 10 "Metodología de la Investigación": { semestre: 10, prerrequisitos: ["Salud Pública II"] }, "Medicina Oral": { semestre: 10, prerrequisitos: ["Patología Maxilofacial"] }, "Ética en la Práctica Odontológica": { semestre: 10, prerrequisitos: ["Salud Pública II"] },

// SEMESTRE 11 "Internado Clínico": { semestre: 11, prerrequisitos: ["Cirugía Dentomaxilar", "Odontología Restauradora", "Prótesis Dentomaxilar", "Endodoncia", "Periodoncia Clínica", "Patología Maxilofacial", "Salud Pública II", "Metodología de la Investigación", "Medicina Oral", "Ética en la Práctica Odontológica"] }, "Proyecto Integrado de Investigación": { semestre: 11, prerrequisitos: ["Cirugía Dentomaxilar", "Odontología Restauradora", "Prótesis Dentomaxilar", "Endodoncia", "Periodoncia Clínica", "Patología Maxilofacial", "Salud Pública II", "Metodología de la Investigación", "Medicina Oral", "Ética en la Práctica Odontológica"] }, };

let estadoAsignaturas = JSON.parse(localStorage.getItem("estadoAsignaturas")) || {};

function puedeDesbloquear(nombre) { const datos = asignaturas[nombre]; return (datos.prerrequisitos || []).every(pr => estadoAsignaturas[pr]); }

function crearBoton(nombre, datos) { const boton = document.createElement("button"); boton.textContent = nombre; boton.className = "ramo";

if (estadoAsignaturas[nombre]) { boton.classList.add("completado"); } else if (!puedeDesbloquear(nombre)) { boton.classList.add("locked"); }

boton.onclick = () => { if (puedeDesbloquear(nombre) || estadoAsignaturas[nombre]) { estadoAsignaturas[nombre] = !estadoAsignaturas[nombre]; localStorage.setItem("estadoAsignaturas", JSON.stringify(estadoAsignaturas)); renderMalla(); } };

return boton; }

function renderMalla() { const container = document.getElementById("malla"); container.innerHTML = "";

for (let i = 1; i <= 11; i++) { const col = document.createElement("div"); col.className = "semestre"; col.id = semestre-${i}; col.innerHTML = <h3>${i}° Semestre</h3>; container.appendChild(col); }

for (const [nombre, datos] of Object.entries(asignaturas)) { const col = document.getElementById(semestre-${datos.semestre}); if (col) { const boton = crearBoton(nombre, datos); col.appendChild(boton); } } }

renderMalla();


