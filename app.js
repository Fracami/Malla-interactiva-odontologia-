const asignaturas = {
  // 1er año - 1er semestre
  "Anatomía Humana Normal y Embriología": { semestre: 1, prerrequisitos: [] },
  "Biología Celular": { semestre: 1, prerrequisitos: [] },
  "Física Aplicada": { semestre: 1, prerrequisitos: [] },
  "Introducción a la Odontología": { semestre: 1, prerrequisitos: [] },
  "Habilidades Comunicativas": { semestre: 1, prerrequisitos: [] },

  // 1er año - 2do semestre
  "Anatomía Aplicada": {
    semestre: 2,
    prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"]
  },
  "Química General e Inorgánica": { semestre: 2, prerrequisitos: [] },
  "Genética Molecular Humana": { semestre: 2, prerrequisitos: ["Biología Celular"] },
  "Histología General": {
    semestre: 2,
    prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"]
  },
  "Introducción a la Clínica": { semestre: 2, prerrequisitos: ["Introducción a la Odontología"] },
  "Inglés I": { semestre: 2, prerrequisitos: [] },

  // 2do año - 3er semestre
  "Bioquímica General": {
    semestre: 3,
    prerrequisitos: ["Química General e Inorgánica", "Biología Celular"]
  },
  "Microbiología General": { semestre: 3, prerrequisitos: ["Histología General"] },
  "Patología General I": {
    semestre: 3,
    prerrequisitos: ["Histología General", "Anatomía Aplicada"]
  },
  "Histología Oral": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] },
  "Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] },
  "Laboratorio de Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] },
  "Inglés II": { semestre: 3, prerrequisitos: ["Inglés I"] },

  // 2do año - 4to semestre
  "Bioquímica Oral": {
    semestre: 4,
    prerrequisitos: ["Bioquímica General", "Histología Oral"]
  },
  "Microbiología Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Microbiología General"] },
  "Patología General II": { semestre: 4, prerrequisitos: ["Patología General I"] },
  "Promoción y Educación en Salud": { semestre: 4, prerrequisitos: ["Introducción a la Clínica"] },
  "Razonamiento Científico y Tecnologías": { semestre: 4, prerrequisitos: ["Habilidades Comunicativas"] },
  "Inglés III": { semestre: 4, prerrequisitos: ["Inglés II"] },

  // Rama anual ejemplo (ocupa 4to y 5to semestre)
  "Biomateriales Dentales": {
    semestre: 4,
    duracion: 2,
    prerrequisitos: ["Física Aplicada", "Anatomía Aplicada", "Química General e Inorgánica"]
  },

  // 3er año - 5to semestre
  "Farmacología I": {
    semestre: 5,
    prerrequisitos: ["Bioquímica Oral", "Microbiología Oral"]
  },
  "Inglés IV": { semestre: 5, prerrequisitos: ["Inglés III"] },

  // 3er año - 6to semestre
  "Farmacología II": { semestre: 6, prerrequisitos: ["Farmacología I"] },
  "Cariología": {
    semestre: 6,
    prerrequisitos: ["Microbiología Oral", "Farmacología I", "Inglés IV", "Promoción y Educación en Salud"]
  },
  "Preclínico Integrado": {
    semestre: 6,
    prerrequisitos: ["Microbiología Oral", "Promoción y Educación en Salud"]
  },

  // Rama anual 6to y 7mo semestre
  "Patología Dentomaxilar": {
    semestre: 6,
    duracion: 2,
    prerrequisitos: ["Patología General II", "Microbiología Oral"]
  },

  // 4to año - 7mo semestre
  "Imagenología": {
    semestre: 7,
    prerrequisitos: ["Patología Dentomaxilar"]
  },
  "Cirugía Bucal Básica": {
    semestre: 7,
    prerrequisitos: ["Microbiología Oral", "Patología Dentomaxilar"]
  },
  "Fisiología Oral y Oclusión": {
    semestre: 7,
    prerrequisitos: ["Biomateriales Dentales", "Preclínico Integrado"]
  },

  // 4to año - 8vo semestre
  "Salud Pública I": { semestre: 8, prerrequisitos: [] },
  "Pensamiento Crítico": {
    semestre: 8,
    prerrequisitos: ["Razonamiento Científico y Tecnologías"]
  },

  // Rama anual 8vo y 9no semestre
  "Salud Pública II": {
    semestre: 8,
    duracion: 2,
    prerrequisitos: ["Salud Pública I", "Patología Dentomaxilar"]
  },

  // 5to año - 9no semestre
  "Cirugía Dentomaxilar": {
    semestre: 9,
    prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica"]
  },
  "Odontología Restauradora": {
    semestre: 9,
    prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado", "Biomateriales Dentales"]
  },
  "Prótesis Dentomaxilar": {
    semestre: 9,
    prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Fisiología Oral y Oclusión", "Preclínico Integrado"]
  },
  "Endodoncia": {
    semestre: 9,
    prerrequisitos: ["Farmacología II", "Cariología", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"]
  },
  "Periodoncia Clínica": {
    semestre: 9,
    prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"]
  },
  "Patología Maxilofacial": {
    semestre: 9,
    prerrequisitos: ["Patología Dentomaxilar", "Imagenología"]
  },

  // 5to año - 10mo semestre
  "Metodología de la Investigación": {
    semestre: 10,
    prerrequisitos: ["Salud Pública II"]
  },
  "Medicina Oral": {
    semestre: 10,
    prerrequisitos: ["Patología Maxilofacial"]
  },
  "Ética en la Práctica Odontológica": {
    semestre: 10,
    prerrequisitos: ["Salud Pública II"]
  },

  // 6to año - 11vo semestre (internado y proyecto)
  "Internado Clínico": {
    semestre: 11,
    prerrequisitos: ["Cirugía Dentomaxilar", "Odontología Restauradora", "Prótesis Dentomaxilar", "Endodoncia", "Periodoncia Clínica", "Patología Maxilofacial", "Salud Pública II", "Metodología de la Investigación", "Medicina Oral", "Ética en la Práctica Odontológica"]
  },
  "Proyecto Integrado de Investigación": {
    semestre: 11,
    prerrequisitos: ["Cirugía Dentomaxilar", "Odontología Restauradora", "Prótesis Dentomaxilar", "Endodoncia", "Periodoncia Clínica", "Patología Maxilofacial", "Salud Pública II", "Metodología de la Investigación", "Medicina Oral", "Ética en la Práctica Odontológica"]
  }
};

let estadoAsignaturas = JSON.parse(localStorage.getItem("estadoAsignaturas")) || {};

function puedeDesbloquear(nombre) {
  const datos = asignaturas[nombre];
  const prereqOk = (datos.prerrequisitos || []).every(r => estadoAsignaturas[r]);
  return prereqOk;
}

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (let s = 1; s <= 12; s++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h3>${s}° Semestre</h3>`;
    container.appendChild(columna);
  }

  for (const [nombre, datos] of Object.entries(asignaturas)) {
    const ramo = document.createElement("button");
    ramo.textContent = nombre;
    ramo.className = "ramo";

    if (estadoAsignaturas[nombre]) {
      ramo.classList.add("completado");
    } else if (!puedeDesbloquear(nombre)) {
      ramo.classList.add("locked");
    }

    ramo.onclick = () => {
      if (puedeDesbloquear(nombre) || estadoAsignaturas[nombre]) {
        estadoAsignaturas[nombre] = !estadoAsignaturas[nombre];
        localStorage.setItem("estadoAsignaturas", JSON.stringify(estadoAsignaturas));
        renderMalla();
      }
    };

    const colIndex = datos.semestre - 1;
    const col = container.children[colIndex];

    if (datos.duracion === 2) {
      ramo.style.gridColumn = "span 2";
      ramo.style.width = "calc(200% + 16px)";
    }

    col.appendChild(ramo);
  }
}

renderMalla();
