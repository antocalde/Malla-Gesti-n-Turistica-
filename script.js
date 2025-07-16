const malla = [
  {
    semestre: 1,
    ramos: [
      { nombre: "Información y Orientación Turística", tipo: "base" },
      { nombre: "Servicios Turísticos Guiados", tipo: "base", certificado: "Desarrollador de Productos Turísticos Sostenibles" },
      { nombre: "Ecosistema Turístico y Patrimonio", tipo: "base", certificado: "Desarrollador de Productos Turísticos Sostenibles" },
      { nombre: "Destinos Turísticos y Geografía", tipo: "base", certificado: "Asesor de Viajes" },
      { nombre: "Resolución de Problemas en Datos e Información", tipo: "basica" },
      { nombre: "Formación Ciudadana", tipo: "empleabilidad" }
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "Diseño de Programas Turísticos Globales", tipo: "base", prereq: ["Destinos Turísticos y Geografía"], certificado: "Asesor de Viajes" },
      { nombre: "Normativa y Prevención de Riesgos en Turismo", tipo: "base", certificado: "Primeros Auxilios" },
      { nombre: "Coordinación de Operaciones Turísticas", tipo: "base", certificado: "Desarrollador de Productos Turísticos Sostenibles" },
      { nombre: "Contabilidad de la Industria Turística", tipo: "base", certificado: "Asistente Administrativo en Turismo y Hospitalidad" },
      { nombre: "Administración", tipo: "empleabilidad", certificado: "Asistente Administrativo en Turismo y Hospitalidad" },
      { nombre: "Inglés Inicial", tipo: "empleabilidad" }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { nombre: "Gestión Comercial en Turismo", tipo: "base", prereq: ["Diseño de Programas Turísticos Globales"], certificado: "Asesor de Viajes" },
      { nombre: "Taller de Ventas y Herramientas Tecnológicas", tipo: "base", certificado: "Desarrollador de Productos Turísticos Sostenibles" },
      { nombre: "Costos y Presupuestos para el Turismo", tipo: "base", prereq: ["Contabilidad de la Industria Turística"], certificado: "Asistente Administrativo en Turismo y Hospitalidad" },
      { nombre: "Innovación y Emprendimiento 1", tipo: "empleabilidad", certificado: "Innovación y Emprendimiento" },
      { nombre: "Inglés Habilitante", tipo: "empleabilidad", prereq: ["Inglés Inicial"] },
      { nombre: "Electivo de Tendencias del Sector Productivo y Servicios 1", tipo: "electivo" }
    ]
  },
  {
    semestre: 4,
    ramos: [
      { nombre: "Taller de Destinos Turísticos Inteligentes", tipo: "base", certificado: "Asesor de Viajes" },
      { nombre: "Taller de Diseño de Experiencias Turísticas Sostenibles", tipo: "base", certificado: "Gestor de Productos Turísticos" },
      { nombre: "Proyecto Integrado", tipo: "base", prereq: ["Taller de Ventas y Herramientas Tecnológicas"] },
      { nombre: "English for Tourism and Hospitality 1", tipo: "base", prereq: ["Inglés Habilitante"] },
      { nombre: "Inglés Intermedio", tipo: "empleabilidad", prereq: ["English for Tourism and Hospitality 1"] },
      { nombre: "Electivo de Tendencias del Sector Productivo y Servicios 2", tipo: "electivo" }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { nombre: "Taller de Diseño de Productos Turísticos Sostenibles", tipo: "base", prereq: ["Taller de Diseño de Experiencias Turísticas Sostenibles"], certificado: "Gestor de Productos Turísticos" },
      { nombre: "Interpretación del Patrimonio", tipo: "base", certificado: "Gestor de Productos Turísticos" },
      { nombre: "English for Tourism and Hospitality 2", tipo: "base", prereq: ["Inglés Intermedio"] },
      { nombre: "Estadística", tipo: "basica" },
      { nombre: "Innovación y Emprendimiento 2", tipo: "empleabilidad", certificado: "Innovación y Emprendimiento" },
      { nombre: "Gestión de Personas", tipo: "empleabilidad" }
    ]
  },
  {
    semestre: 6,
    ramos: [
      { nombre: "Regulación Turística Nacional e Internacional", tipo: "base", prereq: ["Taller de Diseño de Productos Turísticos Sostenibles"], certificado: "Gestor de Productos Turísticos" },
      { nombre: "Investigación de Mercados Turísticos", tipo: "base", certificado: "Gestor de Proyectos Turísticos" },
      { nombre: "Planificación de Destinos Turísticos Sostenibles", tipo: "base", prereq: ["Interpretación del Patrimonio"], certificado: "Gestor de Productos Turísticos" },
      { nombre: "English for Tourism and Hospitality 3", tipo: "base", prereq: ["English for Tourism and Hospitality 2"] },
      { nombre: "Economía para la Gestión Turística (micro y macro)", tipo: "base", certificado: "Analista de Gestión Financiera en Turismo" },
      { nombre: "Finanzas", tipo: "empleabilidad", certificado: "Analista de Gestión Financiera en Turismo" }
    ]
  },
  {
    semestre: 7,
    ramos: [
      { nombre: "Evaluación de Impacto en el Ecosistema Turístico", tipo: "base", prereq: ["Regulación Turística Nacional e Internacional"] },
      { nombre: "Marketing Estratégico de Servicios", tipo: "base", certificado: "Gestor de Proyectos Turísticos" },
      { nombre: "Gestión de Calidad Turística Sostenible", tipo: "base", prereq: ["Planificación de Destinos Turísticos Sostenibles"], certificado: "Gestor de Productos Turísticos" },
      { nombre: "English for Tourism and Hospitality 4", tipo: "base", prereq: ["English for Tourism and Hospitality 3"] },
      { nombre: "Formulación y Gestión de Proyectos", tipo: "empleabilidad", certificado: "Gestor de Proyectos Turísticos" },
      { nombre: "Electivo de Tendencias del Sector Productivo y Servicios 3", tipo: "electivo" }
    ]
  },
  {
    semestre: 8,
    ramos: [
      { nombre: "Finanzas para la Toma de Decisiones", tipo: "base", prereq: ["Finanzas"], certificado: "Analista de Gestión Financiera en Turismo" },
      { nombre: "Modelos de Gestión de Organizaciones Turísticas", tipo: "base", prereq: ["Gestión de Calidad Turística Sostenible"] },
      { nombre: "Proyecto de Título Profesional", tipo: "base", prereq: ["Evaluación de Impacto en el Ecosistema Turístico"] },
      { nombre: "English for Tourism and Hospitality 5", tipo: "base", prereq: ["English for Tourism and Hospitality 4"] },
      { nombre: "Innovación y Emprendimiento 3", tipo: "empleabilidad", certificado: "Innovación y Emprendimiento" },
      { nombre: "Electivo de Tendencias del Sector Productivo y Servicios 4", tipo: "electivo" }
    ]
  }
];

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
