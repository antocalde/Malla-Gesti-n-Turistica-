const malla = [ /* 👈 (mismo contenido de ramos que ya tienes, lo mantenemos igual) */ ];

function crearMalla() {
  const container = document.getElementById("mallaContainer");
  const completados = JSON.parse(localStorage.getItem("ramosCompletados") || "[]");

  malla.forEach(({ semestre, ramos }) => {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h3>Semestre ${semestre}</h3>`;
    ramos.forEach(({ nombre, tipo, certificado, prereq }) => {
      const div = document.createElement("div");
      div.className = `ramo ${tipo}`;
      div.id = nombre;

      const etiquetas = `
        <div class="etiquetas">
          <span class="etiqueta">${formatearTipo(tipo)}</span>
          ${certificado ? `<span class="etiqueta">Certificado: ${certificado}</span>` : ""}
        </div>
      `;

      div.innerHTML = `${nombre}${etiquetas}`;
      div.dataset.prereq = prereq ? prereq.join(",") : "";

      // ✅ Cargar estado guardado
      if (completados.includes(nombre)) {
        div.classList.add("completado");
      }

      // ✅ Marcar/desmarcar al hacer clic y guardar
      div.onclick = () => {
        div.classList.toggle("completado");
        guardarProgreso();
      };

      box.appendChild(div);
    });
    container.appendChild(box);
  });
}

function formatearTipo(tipo) {
  if (tipo === "base") return "Especialidad de Base";
  if (tipo === "basica") return "Disciplina Básica";
  if (tipo === "empleabilidad") return "Formación para la Empleabilidad";
  if (tipo === "electivo") return "Electivo";
  return tipo;
}

function actualizarDisponibles() {
  const actual = parseInt(document.getElementById("semestreActual").value);
  document.querySelectorAll(".ramo").forEach(r => r.classList.remove("disponible"));

  malla.forEach(({ semestre, ramos }) => {
    if (semestre <= actual + 1) {
      ramos.forEach(r => {
        const el = document.getElementById(r.nombre);
        if (el) el.classList.add("disponible");
      });
    }
  });
}

function guardarProgreso() {
  const completados = [];
  document.querySelectorAll(".ramo.completado").forEach(el => {
    completados.push(el.id);
  });
  localStorage.setItem("ramosCompletados", JSON.stringify(completados));
}

crearMalla();
actualizarDisponibles();
