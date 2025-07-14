const malla = [
    { semestre: 1, ramos: [
        { nombre: "Servicios Turísticos Guiados", tipo: "base" },
        { nombre: "Ecosistema Turístico y Patrimonio", tipo: "basica" },
        { nombre: "Formación Ciudadana", tipo: "empleabilidad" },
        { nombre: "Inglés Inicial", tipo: "basica" }
    ]},
    { semestre: 2, ramos: [
        { nombre: "Destinos Turísticos y Geografía", tipo: "base" },
        { nombre: "Resolución de Problemas en Datos", tipo: "empleabilidad" },
        { nombre: "Información y Orientación Turística", tipo: "basica" },
        { nombre: "English for Tourism and Hospitality I", tipo: "basica" }
    ]},
    { semestre: 3, ramos: [
        { nombre: "Taller de Ventas y Herramientas Tecnológicas", tipo: "empleabilidad" },
        { nombre: "Gestión Comercial en Turismo", tipo: "base" },
        { nombre: "Contabilidad de la Industria Turística", tipo: "basica" },
        { nombre: "Inglés Intermedio", tipo: "basica" }
    ]},
    { semestre: 4, ramos: [
        { nombre: "Taller de Diseño de Experiencias Turísticas Sostenibles", tipo: "base" },
        { nombre: "Normativa y Prevención de Riesgos", tipo: "basica" },
        { nombre: "Electivo de Tendencias I", tipo: "electivo" },
        { nombre: "English for Tourism and Hospitality II", tipo: "basica" }
    ]}
];

function actualizarDisponibles() {
    const actual = parseInt(document.getElementById('semestreActual').value);
    document.querySelectorAll('.ramo').forEach(el => el.classList.remove('disponible'));
    malla.forEach(s => {
        if (s.semestre <= actual + 1) {
            s.ramos.forEach(r => {
                const el = document.getElementById(r.nombre);
                if (el) el.classList.add('disponible');
            });
        }
    });
}

function crearMalla() {
    const container = document.getElementById('mallaContainer');
    malla.forEach(s => {
        const sem = document.createElement('div');
        sem.className = 'semestre';
        sem.innerHTML = `<h3>Semestre ${s.semestre}</h3>`;
        s.ramos.forEach(r => {
            const ramo = document.createElement('div');
            ramo.className = `ramo ${r.tipo}`;
            ramo.id = r.nombre;
            ramo.textContent = r.nombre;
            ramo.onclick = () => ramo.classList.toggle('completado');
            sem.appendChild(ramo);
        });
        container.appendChild(sem);
    });
    actualizarDisponibles();
}

crearMalla();
