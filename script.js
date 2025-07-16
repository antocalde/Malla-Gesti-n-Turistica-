const malla = [ /* 👈 Tu lista completa de ramos, mantenla igual que antes */ ];

function crearMalla() {
  const container = document.getElementById("mallaContainer");
  const completados = JSON.parse(localStorage.getItem("ramosCompletados") || "[]");

  malla.forEach(({ semestre, ramos }) => {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h3>Semestre ${semestre}</h3>`;
    ramos.forEach(({ nombre, tipo, certificado }) => {
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
      if (completados.includes(nombre)) div.classList.add("completado");

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

function guardarProgreso() {
  const completados = [];
  document.querySelectorAll(".ramo.completado").forEach(el => {
    completados.push(el.id);
  });
  localStorage.setItem("ramosCompletados", JSON.stringify(completados));
}

crearMalla();
