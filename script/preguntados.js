/* || COMIENZO DE LA FUNCION PARA COMENZAR EL JUEGO || */

const ejecutarPreguntados = () => {

    for( let i = 0; i < arrayPreguntas.length; i++ ){
        hacerPregunta(i);
    }

    mostrarContenido();
}

/* || FIN DE LA FUNCION PARA COMENZAR EL JUEGO || */
//||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||
/* COMIENZO A MOSTRAR TODOS LOS BOTONES EN EL HTML DEL USUARIO */

const containerContenido = document.querySelector('#mostrarContenido');

const mostrarContenido = () => {

    const botonVerificado = document.createElement('button')
    botonVerificado.classList.add('botonVerificar')
    botonVerificado.textContent = 'Verificar Respuestas';
    containerContenido.appendChild(botonVerificado)
    botonVerificado.addEventListener('click', () => {
        validarRespuestas();
        const algoAJSON = [
            {id: 1, respuesta: `${pregunta1.respuesta}`},
            {id: 2, respuesta: `${pregunta2.respuesta}`},
            {id: 3, respuesta: `${pregunta3.respuesta}`},
            {id: 4, respuesta: `${pregunta4.respuesta}`},
            {id: 5, respuesta: `${pregunta5.respuesta}`},
        ];
        const guardarSession = (clave, valor) => {
            sessionStorage.setItem(clave, valor);
        };
        
        guardarSession('listadeRespuesta', JSON.stringify(algoAJSON));
    })

    const btnVerRts = document.createElement('button');
    btnVerRts.querySelector('#mostrarRespuestas')
    btnVerRts.textContent = 'Mostrar Respuestas'
    containerContenido.appendChild(btnVerRts)
    btnVerRts.addEventListener('click', () => {
        mostrarRespuestas();
    })

    const containerDeRespuestas = document.createElement('div');
    containerDeRespuestas.classList.add('containerRespuestas')
    containerContenido.appendChild(containerDeRespuestas)

    const contDivClicks = document.createElement('div');
    contDivClicks.classList.add('clicks');
    const texth2 = document.createElement('h2');
    texth2.textContent = 'Hiciste Click En...';
    const strongH2 = document.createElement('strong');
    texth2.appendChild(strongH2);
    const divRt1 = document.createElement('div');
    divRt1.classList.add('respuesta1');
    divRt1.id = "respuesta1";
    const divRt2 = document.createElement('div');
    divRt2.classList.add('respuesta2');
    divRt2.id = "respuesta2";
    const divRt3 = document.createElement('div');
    divRt3.classList.add('respuesta3');
    divRt3.id = "respuesta3";
    const divRt4 = document.createElement('div');
    divRt4.classList.add('respuesta4');
    divRt4.id = "respuesta4";
    const divRt5 = document.createElement('div');
    divRt5.classList.add('respuesta5');
    divRt5.id = "respuesta5";

    contDivClicks.appendChild(texth2);
    contDivClicks.appendChild(divRt1);
    contDivClicks.appendChild(divRt2);
    contDivClicks.appendChild(divRt3);
    contDivClicks.appendChild(divRt4);
    contDivClicks.appendChild(divRt5);
    containerContenido.appendChild(contDivClicks);

    const btnHacksRts = document.createElement('button')
    btnHacksRts.id = "mostrar-rts"
    btnHacksRts.textContent = 'Desbloquear Respuestas';
    btnHacksRts.addEventListener('click', () => {
        let data = sessionStorage.getItem("listadeRespuesta")
        let dataParsed = JSON.parse(data);
        
        for (const item of dataParsed) {
            const textoHack = document.createElement('h2')
            textoHack.textContent = `${item.respuesta}`;
            textoHack.classList.add('textoHacks')
            contHacks.appendChild(textoHack);
        }
        let btnOcultarHack = document.createElement('button');
        btnOcultarHack.textContent = "Ocultar Respuestas";
        contHacks.appendChild(btnOcultarHack)
        btnOcultarHack.addEventListener('click', () => {
            contHacks.innerHTML = "";
        })
    })
    const contHacks = document.getElementById('hacks-preguntados');
    contHacks.appendChild(btnHacksRts);
    
}
/* FIN DE MOSTRAR TODOS LOS BOTONES EN EL HTML DEL USUARIO */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO CONSTRUCTOR PARA PREGUNTAS Y RESPUESTAS || */

class Pregunta {

    constructor(id, pregunta, opciones, respuesta, respuestaCorrecta) {
        this.id = id;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.respuestaCorrecta = respuestaCorrecta;
    }
    
}

/* || FIN CONSTRUCTOR PARA PREGUNTAS Y RESPUESTAS || */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO DE MOSTRAR EL FORMULARIO CON LAS PREGUNTAS EN LA PANTALLA DEL USUARIO || */

const containerPreg = document.querySelector('.container');
const formulario = document.querySelector('form');

containerPreg.appendChild(formulario);

const hacerPregunta = (i) => {

    const pregts = document.createElement('p');
    pregts.textContent = arrayPreguntas[i].pregunta;
    formulario.appendChild(pregts);
    
    const label1 = document.createElement('label');
    formulario.appendChild(label1);
    
    for (let j = 0; j < arrayPreguntas.length; j+=1) {
        const input1 = document.createElement('input');
        input1.type = `radio`;
        input1.name = `preg${i}`;
        input1.id = j;
        input1.value = arrayPreguntas[i].opciones[j].toLowerCase();
        label1.appendChild(input1);

        const span1 = document.createElement('span')
        span1.textContent = arrayPreguntas[i].opciones[j];
        label1.appendChild(span1);

    }
    
}

/* || FIN DE MOSTRAR EL FORMULARIO CON LAS PREGUNTAS EN LA PANTALLA DEL USUARIO || */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO ARREGLO DE RESPUESTAS DEL USUARIO || */

let respuestasDOM = [];

const cargarRespuestas = () => {

    respuestasDOM = [
        {
            id: 1,
            respuesta: (arrayPreguntas[0].respuesta),
        },
        {
            id: 2,
            respuesta: (arrayPreguntas[1].respuesta),
        },
        {
            id: 3,
            respuesta: (arrayPreguntas[2].respuesta),
        },
        {
            id: 4,
            respuesta: (arrayPreguntas[3].respuesta),
        },
        {
            id: 5,
            respuesta: (arrayPreguntas[4].respuesta),
        },
    ];

}

/* || FIN ARREGLO DE RESPUESTAS DEL USUARIO || */
//|||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||
/* || INICIO VALIDAR RESPUESTAS DE INPUTS RADIO || */

function validarRespuestas() {

        pregunta1.respuesta = document.formPreg.preg0.value;
        pregunta2.respuesta = document.formPreg.preg1.value;
        pregunta3.respuesta = document.formPreg.preg2.value;
        pregunta4.respuesta = document.formPreg.preg3.value;
        pregunta5.respuesta = document.formPreg.preg4.value;

    respuestasCorrectas();
}

/* || FIN DE LA VALIDACIÓN RESPUESTAS EN INPUTS RADIO || */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* || INICIO DE INSPECCIONAR LAS RESPUESTAS DEL USUARIO || */

const respuestasCorrectas = () => {

    let siNo = false;

    if( pregunta1.respuesta === pregunta1.respuestaCorrecta && 
        pregunta2.respuesta === pregunta2.respuestaCorrecta && 
        pregunta3.respuesta === pregunta3.respuestaCorrecta && 
        pregunta4.respuesta === pregunta4.respuestaCorrecta && 
        pregunta5.respuesta === pregunta5.respuestaCorrecta) {
            siNo = true;
        }

    if (!siNo) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Una o más de tus respuestas están mal. fin del juego',
            footer: '<a href="preguntados.html">volver a intentar</a>'
        })
    }else {
        Swal.fire({
            imageUrl: '../img/ganador.jpg',
            imageHeight: 200,
            imageAlt: 'ImagenDelGanador',
            title: '¡¡¡EXCELENTEEE!!!',
            text: 'Respondiste todas las preguntas correctamente',
        })
    }
}

/* || FIN DE INSPECCIONAR LAS RESPUESTAS DEL USUARIO || */
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO DE VARIABLES + CONSTRUCTOR + PREGUNTAS + OPCIONES + RESPUESTA DEL USUARIO + RESPUESTA CORRECTA || */

let pregunta1 = new Pregunta(1, "¿Cuál de estos paises clasificó al mundial QATAR2022?", ["Bolivia"," Chile","Argentina", "Paraguay", "Venezuela"], "", "argentina");
let pregunta2 = new Pregunta(2, "¿En el año de 2021, un equipo de ESports de CS:GO salió campeón de el más importante torneo de la historia de CS:GO. ¿Cuáles de los siguientes equipos fué?", ["Gambit", "Navi", "Vitality", "NIP", "Heroic"], "", "navi");
let pregunta3 = new Pregunta(3, "¿En qué año el SARS-COV-2 arrazó con la población mundial del planeta tierra?", ["2017", "2018", "2019", "2020", "2021"], "", "2020");
let pregunta4 = new Pregunta(4, "¿Qué apodo te ponen en un videojuego si no sabes jugarlo?", ["Noob", "Novato", "Maleta", "Carreado", "Incarreable"], "", "noob");
let pregunta5 = new Pregunta(5, "¿Cuál es la primera potencia mundial hoy en día?", ["China", "Rusia", "Ucrania", "Alemania", "Estados-Unidos"], "", "estados-unidos") 

let arrayPreguntas = [];

arrayPreguntas.push(pregunta1);
arrayPreguntas.push(pregunta2);
arrayPreguntas.push(pregunta3);
arrayPreguntas.push(pregunta4);
arrayPreguntas.push(pregunta5);

/* || FIN DE LAS VARIABLES + CONSTRUCTOR + PREGUNTAS + OPCIONES + RESPUESTA DEL USUARIO + RESPUESTA CORRECTA || */
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||
/* || COMIENZO DEL BOTON PARA JUGAR || */

const botonJugar = document.querySelector('.botonJugar')
botonJugar.addEventListener('click', () => {
    ejecutarPreguntados();
})

/* || FIN DEL BOTON PARA JUGAR || */
//||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO VER LAS RESPUESTAS EN EL HTML || */

function mostrarRespuestas () {
    cargarRespuestas();
    for (const item of respuestasDOM) {

        const verRespuesta = document.createElement('h2');
        verRespuesta.classList.add('respuestas');
        verRespuesta.innerText = item.respuesta;
        
        containerContenido.appendChild(verRespuesta);

    }
}

/* || FIN VER LAS RESPUESTAS EN EL HTML || */
//|||||||||||||||||||||||||||||||||||||||||||||||
//||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO FUNCION PARA RENDERIZAR RESPUESTAS || */

function mostrarClicks(clickEvent) {

    for (const item of clickEvent) {
        renderizarRespuesta(item);
    }
    
}

/* || FIN DE FUNCION PARA RENDERIZAR LAS RESPUESTAS || */
//||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// || COMIENZO A MOSTRAR HACK PARA VER LAS RESPUESTAS CORRECTAS ||

const mostrarHTML = (respuestas) => {

    const contenido = document.querySelector("#hacks-preguntados");

    let html = "";

    respuestas.forEach((contenido) => {
        const { numero, respuesta } = contenido;
        html += `
            <h2>Respuesta N°${numero}: ${respuesta}</h2>
        `;
    });

    html += `<button id="ocultarRts">ocultar</button>`

    contenido.innerHTML = html;
    const ocultarRts = document.querySelector('#ocultarRts')
    ocultarRts.addEventListener('click', ocultacionDeRts)

};

const ocultacionDeRts = () => {
    const contenido = document.querySelector("#hacks-preguntados");
    contenido.innerHTML = "";
}

/* || FIN DE MOSTRAR HACK PARA VER LAS RESPUESTAS CORRECTAS || */
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//|||||||||||||||||||||||||||||||||||||||||||||||||||
/* || COMIENZO A MANDAR DATOS A SESSION-STORAGE || */
const obtenerDatosArrayJson = () => {
    fetch("json/datos.json")
        .then((respuesta) => {
            return respuesta.json();
    })
        .then((datos) => {
            mostrarHTML(datos);
    })
        .catch((err) => {
            console.log(err);
    });
};



/* || FIN DE MANDAR DATOS A SESSION-STORAGE || */