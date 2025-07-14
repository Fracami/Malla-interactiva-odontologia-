const ramos = [
  // PRIMER AÑO
  { codigo: "MORF100", nombre: "Anatomía Humana Normal y Embriología", semestre: 1 },
  { codigo: "BIOL130", nombre: "Biología Celular", semestre: 1 },
  { codigo: "CFIS100", nombre: "Física Aplicada", semestre: 1 },
  { codigo: "ODOT101", nombre: "Introducción a la Odontología", semestre: 1 },
  { codigo: "CEGHC11", nombre: "Habilidades Comunicativas", semestre: 1 },

  { codigo: "MORF200", nombre: "Anatomía Aplicada", semestre: 2, prereq: ["MORF100", "BIOL130"] },
  { codigo: "QUIM118", nombre: "Química General e Inorgánica", semestre: 2 },
  { codigo: "BIOL146", nombre: "Genética Molecular y Histología General", semestre: 2, prereq: ["BIOL130", "MORF100"] },
  { codigo: "ODOT201", nombre: "Introducción a la Clínica", semestre: 2, prereq: ["ODOT101"] },
  { codigo: "ING119", nombre: "Inglés I", semestre: 2 },

  // SEGUNDO AÑO
  { codigo: "BIOL164", nombre: "Bioquímica General", semestre: 3, prereq: ["QUIM118", "BIOL130"] },
  { codigo: "BIOL252", nombre: "Microbiología General", semestre: 3, prereq: ["BIOL146"] },
  { codigo: "ODOT302", nombre: "Patología General I", semestre: 3, prereq: ["BIOL146", "MORF201", "MORF200"] },
  { codigo: "MORF201", nombre: "Histología Oral", semestre: 3, prereq: ["MORF200", "BIOL146"] },
  { codigo: "BIOL172", nombre: "Fisiología", semestre: 3, prereq: ["MORF200", "MORF201"] },
  { codigo: "BIOL173", nombre: "Laboratorio de Fisiología", semestre: 3, prereq: ["MORF200", "MORF201"], coreq: ["BIOL172"] },
  { codigo: "ING129", nombre: "Inglés II", semestre: 3, prereq: ["ING119"] },

  { codigo: "ODOT401", nombre: "Bioquímica Oral", semestre: 4, prereq: ["BIOL164", "MORF201"] },
  { codigo: "BIOL254", nombre: "Microbiología Oral", semestre: 4, prereq: ["BIOL252", "BIOL164"] },
  { codigo: "ODOT402", nombre: "Patología General II", semestre: 4, prereq: ["ODOT302", "BIOL172", "BIOL173"] },
  { codigo: "ODOT403", nombre: "Promoción y Educación en Salud", semestre: 4, prereq: ["ODOT201"] },
  { codigo: "CEGCT12", nombre: "Razonamiento Científico y TICs", semestre: 4, prereq: ["CEGHC11"] },
  { codigo: "ING239", nombre: "Inglés III", semestre: 4, prereq: ["ING129"] },
  { codigo: "ODOT301", nombre: "Biomateriales Dentales", semestre: 4, prereq: ["CFIS100", "MORF200", "QUIM118"] },
  // TERCER AÑO
  { codigo: "FARM161", nombre: "Farmacología I", semestre: 5, prereq: ["ODOT401", "ODOT402"] },
  { codigo: "ING249", nombre: "Inglés IV", semestre: 5, prereq: ["ING239"] },

  { codigo: "FARM162", nombre: "Farmacología II", semestre: 6, prereq: ["FARM161"] },
  { codigo: "ODOT602", nombre: "Cariología", semestre: 6, prereq: ["BIOL254", "FARM161", "ODOT403", "ODOT502", "ODOT505"] },
  { codigo: "ODOT502", nombre: "Imagenología", semestre: 6, prereq: ["ODOT402"], coreq: ["ODOT501"] },
  { codigo: "ODOT505", nombre: "Preclínico Integrado", semestre: 6, prereq: ["ODOT301", "ODOT504"] },

  { codigo: "ODOT501", nombre: "Patología Dentomaxilar", semestre: 6, prereq: ["ODOT402", "BIOL254"] },
  { codigo: "ODOT503", nombre: "Cirugía Bucal Básica", semestre: 6, prereq: ["BIOL254", "ODOT402"] },
  { codigo: "ODOT504", nombre: "Fisiología Oral y Oclusión", semestre: 6, prereq: ["ODOT301"] },

  // CUARTO AÑO
  { codigo: "SPAB110", nombre: "Salud Pública I", semestre: 7, prereq: ["ODOT602"] },
  { codigo: "CEGPC13", nombre: "Pensamiento Crítico", semestre: 7, prereq: ["CEGCT12"] },

  { codigo: "SPAB111", nombre: "Salud Pública II", semestre: 8, prereq: ["SPAB110", "ODOT501"] },

  { codigo: "ODOT701", nombre: "Cirugía Dentomaxilar", semestre: 8, prereq: ["FARM162", "ODOT501", "ODOT502", "ODOT503"] },
  { codigo: "ODOT702", nombre: "Odontología Restauradora", semestre: 8, prereq: ["ODOT502", "ODOT503", "ODOT505", "ODOT602"] },
  { codigo: "ODOT703", nombre: "Prótesis Dentomaxilar", semestre: 8, prereq: ["ODOT502", "ODOT503", "ODOT504", "ODOT505"] },
  { codigo: "ODOT704", nombre: "Endodoncia", semestre: 8, prereq: ["FARM162", "ODOT501", "ODOT502", "ODOT503", "ODOT505", "ODOT602"] },
  { codigo: "ODOT705", nombre: "Periodoncia Clínica", semestre: 8, prereq: ["FARM162", "ODOT501", "ODOT502", "ODOT503", "ODOT505"] },
  { codigo: "ODOT706", nombre: "Patología Maxilofacial", semestre: 8, prereq: ["ODOT501", "ODOT502"] },

  // QUINTO AÑO
  { codigo: "SPAB303", nombre: "Metodología de la Investigación", semestre: 9, prereq: ["SPAB111", "ODOT702"] },
  { codigo: "ODOT901", nombre: "Medicina Oral", semestre: 9, prereq: ["ODOT706"] },
  { codigo: "ODOT906", nombre: "Ética en la Práctica Odontológica", semestre: 9, prereq: ["SPAB111"] },

  { codigo: "SPAB112", nombre: "Administración y Gestión en Salud", semestre: 10, prereq: ["SPAB111", "ODOT901"] },
  { codigo: "ODOT1001", nombre: "Medicina Legal", semestre: 10, prereq: ["ODOT901"] },
  { codigo: "CEGRS14", nombre: "Responsabilidad Social", semestre: 10, prereq: ["CEGPC13"] },

  { codigo: "ODOT902", nombre: "Cirugía y Traumatología Maxilofacial", semestre: 10, prereq: ["ODOT701", "ODOT706"] },
  { codigo: "ODOT903", nombre: "Clínica Integral Adulto y Odontogeriatría", semestre: 10, prereq: ["ODOT702", "ODOT703", "ODOT704", "ODOT705"] },
  { codigo: "ODOT904", nombre: "Odontopediatría", semestre: 10, prereq: ["ODOT701", "ODOT702", "ODOT704"] },
  { codigo: "ODOT905", nombre: "Ortodoncia y Ortopedia", semestre: 10, prereq: ["ODOT705", "ODOT904"] },

  // SEXTO AÑO
  { codigo: "ODOT1103", nombre: "Internado Clínico", semestre: 11, prereq: ["ODOT902", "ODOT903", "ODOT904", "ODOT905", "ODOT906", "SPAB112", "SPAB303", "ODOT1001", "CEGRS14"] },
  { codigo: "ODOT1102", nombre: "Proyecto Integrado de Investigación", semestre: 11, prereq: ["ODOT902", "ODOT903", "ODOT904", "ODOT905", "ODOT906", "SPAB112", "SPAB303", "ODOT1001", "CEGRS14"] },
];

const mallaDiv = document.getElementById("malla");

const totalSemestres = 12;
const semestres = Array.from({ length: totalSemestres }, (_, i) => {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h3>${i + 1}° Semestre</h3>`;
  mallaDiv.appendChild(col);
  return col;
});

const estadoRamos = {};

function crearBoton(ramo) {
  const btn = document.createElement("button");
  btn.textContent = ramo.nombre;
  btn.className = "ramo";
  btn.dataset.codigo = ramo.codigo;

  const requisitos = [...(ramo.prereq || []), ...(ramo.coreq || [])];

  if (requisitos.length > 0) {
    btn.classList.add("locked");
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("locked")) return;

    if (btn.classList.contains("completado")) {
      btn.classList.remove("completado");
      estadoRamos[ramo.codigo] = false;
    } else {
      btn.classList.add("completado");
      estadoRamos[ramo.codigo] = true;
    }

    actualizarDesbloqueo();
  });

  return btn;
}

function actualizarDesbloqueo() {
  document.querySelectorAll("button.ramo").forEach((btn) => {
    const codigo = btn.dataset.codigo;
    const ramo = ramos.find((r) => r.codigo === codigo);
    const requisitos = [...(ramo.prereq || []), ...(ramo.coreq || [])];
    const cumplidos = requisitos.every((r) => estadoRamos[r]);

    if (requisitos.length > 0) {
      if (cumplidos) {
        btn.classList.remove("locked");
      } else {
        btn.classList.add("locked");
      }
    }
  });
}

ramos.forEach((ramo) => {
  const btn = crearBoton(ramo);
  estadoRamos[ramo.codigo] = false;
  semestres[ramo.semestre - 1].appendChild(btn);
});

actualizarDesbloqueo();
