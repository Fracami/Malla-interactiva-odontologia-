const asignaturas = { "Anatomía Humana Normal y Embriología": { semestre: 1, prerrequisitos: [] }, "Biología Celular": { semestre: 1, prerrequisitos: [] }, "Física Aplicada": { semestre: 1, prerrequisitos: [] }, "Introducción a la Odontología": { semestre: 1, prerrequisitos: [] }, "Habilidades Comunicativas": { semestre: 1, prerrequisitos: [] },

"Anatomía Aplicada": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] }, "Química General e Inorgánica": { semestre: 2, prerrequisitos: [] }, "Genética Molecular Humana": { semestre: 2, prerrequisitos: ["Biología Celular"] }, "Histología General": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] }, "Introducción a la Clínica": { semestre: 2, prerrequisitos: ["Introducción a la Odontología"] }, "Inglés I": { semestre: 2, prerrequisitos: [] },

"Bioquímica General": { semestre: 3, prerrequisitos: ["Química General e Inorgánica", "Biología Celular"] }, "Microbiología General": { semestre: 3, prerrequisitos: ["Histología General"] }, "Patología General I": { semestre: 3, prerrequisitos: ["Histología General", "Anatomía Aplicada"] }, "Histología Oral": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Laboratorio de Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] }, "Inglés II": { semestre: 3, prerrequisitos: ["Inglés I"] },

"Bioquímica Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Histología Oral"] }, "Microbiología Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Microbiología General"] }, "Patología General II": { semestre: 4, prerrequisitos: ["Patología General I"] }, "Promoción y Educación en Salud": { semestre: 4, prerrequisitos: ["Introducción a la Clínica"] }, "Razonamiento Científico y Tecnologías": { semestre: 4, prerrequisitos: ["Habilidades Comunicativas"] }, "Inglés III": { semestre: 4, prerrequisitos: ["Inglés II"] }, "Biomateriales Dentales": { semestre: 4, prerrequisitos: ["Física Aplicada", "Anatomía Aplicada", "Química General e Inorgánica"] },

"Farmacología I": { semestre: 5, prerrequisitos: ["Bioquímica Oral", "Microbiología Oral"] }, "Inglés IV": { semestre: 5, prerrequisitos: ["Inglés III"] },

"Farmacología II": { semestre: 6, prerrequisitos: ["Farmacología I"] }, "Cariología": { semestre: 6, prerrequisitos: ["Microbiología Oral", "Farmacología I"] }, "Preclínico Integrado": { semestre: 6, prerrequisitos: ["Biomateriales Dentales", "Fisiología Oral y Oclusión"] },

"Patología Dentomaxilar": { semestre: 7, prerrequisitos: ["Patología General II", "Microbiología Oral"] }, "Imagenología": { semestre: 7, prerrequisitos: ["Patología Dentomaxilar"] }, "Cirugía Bucal Básica": { semestre: 7, prerrequisitos: ["Microbiología Oral", "Patología Dentomaxilar"] }, "Fisiología Oral y Oclusión": { semestre: 7, prerrequisitos: ["Biomateriales Dentales"] },

"Salud Pública I": { semestre: 8, prerrequisitos: ["Cariología"] }, "Pensamiento Crítico": { semestre: 8, prerrequisitos: ["Razonamiento Científico y Tecnologías"] }, };

let estado = JSON.parse(localStorage.getItem("estadoAsignaturas")) || {};

function puedeDesbloquear(nombre) { const datos = asignaturas[nombre]; return (datos.prerrequisitos || []).every(pr => estado[pr]); }

function render() { const malla = document.getElementById("malla"); malla.innerHTML = "";

for (let i = 1; i <= 12; i++) { const col = document.createElement("div"); col.className = "semestre"; col.innerHTML = <h3>${i}º Semestre</h3>;

for (const [nombre, datos] of Object.entries(asignaturas)) {
  if (datos.semestre === i) {
    const btn = document.createElement("button");
    btn.textContent = nombre;
    btn.className = "ramo";

    const puede = puedeDesbloquear(nombre);
    if (!puede && !estado[nombre]) {
      btn.classList.add("locked");
      btn.disabled = true;
    }

    if (estado[nombre]) {
      btn.classList.add("completado");
    }

    btn.addEventListener("click", () => {
      estado[nombre] = !estado[nombre];
      localStorage.setItem("estadoAsignaturas", JSON.stringify(estado));
      render();
    });

    col.appendChild(btn);
  }
}

malla.appendChild(col);

} }

document.addEventListener("DOMContentLoaded", render);

