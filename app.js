const asignaturas = {
  "Anatomía Humana Normal y Embriología": { semestre: 1, prerrequisitos: [] },
  "Biología Celular": { semestre: 1, prerrequisitos: [] },
  "Física Aplicada": { semestre: 1, prerrequisitos: [] },
  "Introducción a la Odontología": { semestre: 1, prerrequisitos: [] },
  "Habilidades Comunicativas": { semestre: 1, prerrequisitos: [] },

  "Anatomía Aplicada": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] },
  "Química General e Inorgánica": { semestre: 2, prerrequisitos: [] },
  "Genética Molecular Humana": { semestre: 2, prerrequisitos: ["Biología Celular"] },
  "Histología General": { semestre: 2, prerrequisitos: ["Anatomía Humana Normal y Embriología", "Biología Celular"] },
  "Introducción a la Clínica": { semestre: 2, prerrequisitos: ["Introducción a la Odontología"] },
  "Inglés I": { semestre: 2, prerrequisitos: [] },

  "Bioquímica General": { semestre: 3, prerrequisitos: ["Química General e Inorgánica", "Biología Celular"] },
  "Microbiología General": { semestre: 3, prerrequisitos: ["Genética Molecular Humana"] },
  "Patología General I": { semestre: 3, prerrequisitos: ["Genética Molecular Humana", "Histología General", "Anatomía Aplicada"] },
  "Histología Oral": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] },
  "Fisiología": { semestre: 3, prerrequisitos: ["Anatomía Aplicada", "Histología General"] },
  "Laboratorio de Fisiología": { semestre: 3, prerrequisitos: ["Fisiología"] },
  "Inglés II": { semestre: 3, prerrequisitos: ["Inglés I"] },

  "Bioquímica Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Histología Oral"] },
  "Microbiología Oral": { semestre: 4, prerrequisitos: ["Bioquímica General", "Microbiología General"] },
  "Patología General II": { semestre: 4, prerrequisitos: ["Patología General I"] },
  "Promoción y Educación en Salud": { semestre: 4, prerrequisitos: ["Introducción a la Clínica"] },
  "Razonamiento científico y Tecnologías de Información": { semestre: 4, prerrequisitos: ["Habilidades Comunicativas"] },
  "Inglés III": { semestre: 4, prerrequisitos: ["Inglés II"] },
  "Biomateriales Dentales": { semestre: 4, prerrequisitos: ["Física Aplicada", "Anatomía Aplicada", "Química General e Inorgánica"] },

  "Farmacología I": { semestre: 5, prerrequisitos: ["Bioquímica Oral", "Patología General II"] },
  "Inglés IV": { semestre: 5, prerrequisitos: ["Inglés III"] },

  "Farmacología II": { semestre: 6, prerrequisitos: ["Farmacología I"] },
  "Cariología": { semestre: 6, prerrequisitos: ["Microbiología Oral", "Farmacología I"] },
  "Imagenología": { semestre: 6, prerrequisitos: ["Patología General II"] },
  "Patología Dentomaxilar": { semestre: 6, prerrequisitos: ["Patología General II", "Microbiología Oral"] },
  "Fisiología Oral y Oclusión": { semestre: 6, prerrequisitos: ["Biomateriales Dentales"] },
  "Preclínico Integrado": { semestre: 6, prerrequisitos: ["Fisiología Oral y Oclusión", "Biomateriales Dentales"] },

  "Salud Pública I": { semestre: 7, prerrequisitos: ["Cariología"] },
  "Pensamiento Crítico": { semestre: 7, prerrequisitos: ["Razonamiento científico y Tecnologías de Información"] },

  "Salud Pública II": { semestre: 8, prerrequisitos: ["Salud Pública I", "Patología Dentomaxilar"] },

  "Medicina Oral": { semestre: 9, prerrequisitos: ["Patología Maxilofacial"] },
  "Metodología de la Investigación": { semestre: 9, prerrequisitos: ["Salud Pública II", "Odontología Restauradora"] },
  "Ética en la práctica Odontológica": { semestre: 9, prerrequisitos: ["Salud Pública II"] },

  "Administración y Gestión en Salud": { semestre: 10, prerrequisitos: ["Salud Pública II", "Medicina Oral"] },
  "Medicina Legal": { semestre: 10, prerrequisitos: ["Medicina Oral"] },
  "Responsabilidad Social": { semestre: 10, prerrequisitos: ["Pensamiento Crítico"] },

  "Cirugía Dentomaxilar": { semestre: 10, prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica"] },
  "Odontología Restauradora": { semestre: 10, prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado", "Cariología"] },
  "Prótesis Dentomaxilar": { semestre: 10, prerrequisitos: ["Imagenología", "Cirugía Bucal Básica", "Fisiología Oral y Oclusión", "Preclínico Integrado"] },
  "Endodoncia": { semestre: 10, prerrequisitos: ["Farmacología II", "Cariología", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"] },
  "Periodoncia Clínica": { semestre: 10, prerrequisitos: ["Farmacología II", "Patología Dentomaxilar", "Imagenología", "Cirugía Bucal Básica", "Preclínico Integrado"] },
  "Patología Maxilofacial": { semestre: 10, prerrequisitos: ["Patología Dentomaxilar", "Imagenología"] },

  "Cirugía y Traumatología Maxilofacial": { semestre: 11, prerrequisitos: ["Cirugía Dentomaxilar", "Patología Maxilofacial"] },
  "Clínica Integral del Adulto y Odontogeriatría": { semestre: 11, prerrequisitos: ["Odontología Restauradora", "Prótesis Dentomaxilar", "Endodoncia", "Periodoncia Clínica"] },
  "Odontopediatría": { semestre: 11, prerrequisitos: ["Cirugía Dentomaxilar", "Odontología Restauradora", "Endodoncia"] },
  "Ortodoncia y Ortopedia Dentomaxilar": { semestre: 11, prerrequisitos: ["Periodoncia Clínica", "Odontopediatría"] },

  "Internado Clínico": { semestre: 12, prerrequisitos: [
    "Cirugía y Traumatología Maxilofacial", "Clínica Integral del Adulto y Odontogeriatría",
    "Odontopediatría", "Ortodoncia y Ortopedia Dentomaxilar", "Medicina Legal",
    "Metodología de la Investigación", "Administración y Gestión en Salud", "Responsabilidad Social"
  ] },
  "Proyecto Integrado de Investigación": { semestre: 12, prerrequisitos: [
    "Cirugía y Traumatología Maxilofacial", "Clínica Integral del Adulto y Odontogeriatría",
    "Odontopediatría", "Ortodoncia y Ortopedia Dentomaxilar", "Medicina Legal",
    "Metodología de la Investigación", "Administración y Gestión en Salud", "Responsabilidad Social"
  ] }
  };  
const estadoAsignaturas = {};
Object.keys(asignaturas).forEach(nombre => {
  estadoAsignaturas[nombre] = false;
});

const contenedor = document.getElementById("contenedor-malla");

function puedeDesbloquear(nombre) {
  const requisitos = asignaturas[nombre].prerrequisitos;
  return requisitos.every(r => estadoAsignaturas[r]);
}

function renderMalla() {
  contenedor.innerHTML = "";

  const semestres = {};
  Object.entries(asignaturas).forEach(([nombre, datos]) => {
    const s = datos.semestre;
    if (!semestres[s]) semestres[s] = [];
    semestres[s].push(nombre);
  });

  Object.keys(semestres).sort((a, b) => a - b).forEach(numSemestre => {
    const columna = document.createElement("div");
    columna.className = "semestre-columna";

    const titulo = document.createElement("h2");
    titulo.textContent = `${numSemestre}° Semestre`;
    columna.appendChild(titulo);

    semestres[numSemestre].forEach(nombre => {
      const ramo = document.createElement("div");
      ramo.className = "ramo";
      ramo.textContent = nombre;

      if (estadoAsignaturas[nombre]) {
        ramo.classList.add("completado");
      } else if (!puedeDesbloquear(nombre)) {
        ramo.classList.add("locked");
      }

      ramo.onclick = () => {
        if (!puedeDesbloquear(nombre)) return;
        estadoAsignaturas[nombre] = !estadoAsignaturas[nombre];
        renderMalla();
      };

      columna.appendChild(ramo);
    });

    contenedor.appendChild(columna);
  });
}

renderMalla();

