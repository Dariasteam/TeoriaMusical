<h2 id="notas_piano"> Notas en el piano </h2>

Situemos a continuacion cada una de las 12 notas sobre un piano.

<div id ="piano_tutorial_0" class="piano_container">
</div>

En este caso estamos utilizando ambas notaciones al mismo tiempo, pero de ahora
en adelante emplearemos exclusivamente la notación Americana.

Resulta obvio que todas las notas con nombren propio tienen reservada una
tecla de blanca, mientras que las negras son para sostenidos / bemoles.
Esta diferenciación tan notoria es casi exclusiva de los instrumentos semejantes
al piano y la razón de su existencia se explicará más adelante.

Utilizaremos este diagrama de un piano para explicar multitud de conceptos,
hablando indistintamente de teclas y notas como si fuesen sinónimos, por lo que
conviene familiarizarse con él.

---

<h4> Notas pulsadas </h4>

Señalaremos en color rojo por defecto aquellas teclas que deban ser pulsadas
para producir aquel efecto musical que se esté explicando.

<div id ="piano_tutorial_1" class="piano_container">
</div>

?> Ambos teclas Do y La siendo pulsadas

---

<h4> Notas relevantes </h4>
En casos que así lo requieran, se marcarán con otros colores diferentes a rojo
las teclas que produzcan notas de interés para la explicación.

<div id ="piano_tutorial_2" class="piano_container">
</div>

?> Do debe ser pulsado y La es una nota relevante en este contexto. En cada caso
se explicará si la tecla relevante debe ser o no pulsada.

---

<h4> Octavas </h4>
En la mayoría de ocasiones se mostrará un piano con una amplitud de 2 octavas
mínimo. Ten en cuenta si lees esto desde un dispositivo móvil para hacer scroll
horizontalmente.

<div id ="piano_tutorial_3" class="piano_container">
</div>

?> Dos teclas de Do son pulsadas y La es una nota relevante

---

<h4> Información Adicional </h4>
En ciertos casos, se añadirá información extra sobre algunas teclas para mostrar
contenido de interés. En este ejemplo se utiliza para indicar la distancia
en semitonos entre Do y La.

<div id ="piano_tutorial_4" class="piano_container">
</div>

?> La se encuentra a seis semitonos de distancia de Do.

---

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_tutorial_0",
    octaves: 1,
    names: "all",
    tonic: "E",
    relevant: {
        "C"  : { text: "Do" },
        "C#" : { text: "Do#" },
        "D"  : { text: "Re" },
        "D#" : { text: "Re#" },
        "E"  : { text: "Mi" },
        "F"  : { text: "Fa" },
        "F#" : { text: "Fa#" },
        "G"  : { text: "Sol" },
        "G#" : { text: "Sol#" },
        "A"  : { text: "La" },
        "A#" : { text: "La#" },
        "B"  : { text: "Si" }
    }
});
piano({
    tag: "piano_tutorial_1",
    octaves: 1,
    names: "all",
    tonic: "C",
    pressed: ["C", "A"],
});
piano({
    tag: "piano_tutorial_2",
    octaves: 1,
    names: "all",
    tonic: "C",
    pressed: ["C"],
    relevant: {
        "A" : {
            color: "Magenta"
        }
    }
});
piano({
    tag: "piano_tutorial_3",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "C",
    pressed: ["C", "C"],
    relevant: {
        "A" : {
            color: "Magenta",
            text: "6"
        }
    }
});
piano({
    tag: "piano_tutorial_4",
    octaves: 1,
    number: "pressed",
    names: "all",
    tonic: "C",
    pressed: ["C"],
    relevant: {
        "A" : {
            color: "Magenta",
            text: "6"
        }
    }
});
</script>