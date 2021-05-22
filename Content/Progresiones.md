<h1> Progresiones </h1>

> La palabra progresión puede referirse a notas individuales o acordes. En ambos
casos alude a la forma en que están organizados alguno de estos elementos a lo largo de una figura o sección musical concreta de duración abitraria.

Hablamos de una progresión ascendente si tenemos una sucesión de notas cada vez más agudas y descendente para el caso contrario. Nosotros utilizaremos exclusivamente la acepción referida a acordes.

El término progresión es **ajeno a notas concretas**. De la misma manera en que
escalas y acordes son conjuntos de intervalos y no se convierten efectivamente en notas determinadas hasta que seleccionamos una tónica, una progresión contempla tipos de acordes y las distancias entre los mismos. Si los intervalos servían para hablar de distancia o proporciones entre notas, las progresiones describen distancia o proporción entre acordes completos.

<h2> Progresiones de acordes </h2>
Podemos expresar las progresiones de acordes mediante la nomenclatura de grados que acabamos de aprender. Un ejemplo de progresión ampliamente utilizada es la siguiente:

    I V vi IV

Esta progresión aparece en infinidad de canciones, aunque estén en escalas diferentes. Algunos ejemplos son.

<h3> Don't Stop Believing - Journey </h3>
El estribillo e introducción están hechos sobre esta progresión

- Tónica: E (Escala de Mi mayor)
- Escala de Mi mayor e intervalos

        E F# G# A B C# D# E
         2  2  1 2 2  2  1

- Grados:

| Posición | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-|-|-|-|-|-|-|-|
| Nota |E | F# | G# | A | B | C# | D# |
| Grados| I | ii | iii | IV | V | vi | VIIº


- Acordes de la progresión

| I | V | vi | IV |
| - | - | - | - |
| E | B | C#m | A |

A continuación se muestran los acordes correspondientes. Si se tocan secuencialmente se identifica fácilmente como el inicio de la canción de Journey.

<h3>I E</h3>
<div id ="piano_0" class="piano_container"></div>

<h3>V B</h3>
<div id ="piano_1" class="piano_container"></div>

<h3>vi C#m</h3>
<div id ="piano_2" class="piano_container"></div>

<h3>IV A</h3>
<div id ="piano_3" class="piano_container"></div>

<h3> I'm Yours - Jason Mraz </h3>
La estrofa y el estribillo funcionan igualmente sobre esta progresión.

- Tónica: B (Escala de Si mayor)
- Escala de La mayor e intervalos

        B C# D# E F# G# A#
         2  2  1 2  2  2  1

- Grados:

| Posición | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-|-|-|-|-|-|-|-|
| Nota  | B | C# | D#  | E  | F#| G# | A# |
| Grados| I | ii | iii | IV | V | vi | VIIº


- Acordes de la progresión

| I | V | vi | IV |
| - | - | - | - |
| B | F# | G# | E |

Acordes de la canción. Si se pulsan con la cadencia adecuada
el lector podrá cantar encima la melodái de la voz sin dificultad.

<h3>I B</h3>
<div id ="piano_4" class="piano_container"></div>

<h3>V F#</h3>
<div id ="piano_5" class="piano_container"></div>

<h3>iv G#</h3>
<div id ="piano_6" class="piano_container"></div>

<h3>IV E</h3>
<div id ="piano_7" class="piano_container"></div>

<h2> Resolución </h2>
La resolución o cierre es un concepto que ha ido apareciendo esporádicamente en los apartados previos sin prestarle toda la atención que se merece. En la progresión previa, para ambas canciones podemos ver que lo natural tras llegar al cuarto acorde es regresar al primero como forma de finalizar. De hecho, si se toca varias veces seguidas el segundo acorde (V) para a continuación hacer sonar el primero (I), vemos que este efecto es todavía más marcado. Lo más natural es que nuestras progresiones cierren sobre
el primer acorde de la escala, pues su tónica será la tónica de la escala en sí.

La sensación de cierre puede acentuarse a través de melodías que acompañen o "guíen" el oido hacia el acorde final. Otra posibilidad es utilizar en el acorde de cierre
un bajo más grave que en su acorde inmediatamente anterior.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_0",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "E",
    pressed: ["E", "G#", "B"],
    controls: ["sync"]
});
piano({
    tag: "piano_1",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "B",
    pressed: ["B", "D#", "F#"],
    controls: ["sync"]
});
piano({
    tag: "piano_2",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "C#",
    pressed: ["C#", "C#", "E", "G#"],
    controls: ["sync"]
});
piano({
    tag: "piano_3",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "A",
    pressed: ["A", "C#", "E"],
    controls: ["sync"]
});
piano({
    tag: "piano_4",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "D#",
    pressed: ["D#", "F#", "B"],
    controls: ["sync"]
});
piano({
    tag: "piano_5",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "F#",
    pressed: ["F#", "A#", "C#"],
    controls: ["sync"]
});
piano({
    tag: "piano_6",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "G#",
    pressed: ["G#", "B", "D#"],
    controls: ["sync"]
});
piano({
    tag: "piano_7",
    octaves: 2,
    number: "pressed",
    names: "pressed",
    tonic: "E",
    pressed: ["E", "G#", "B"],
    controls: ["sync"]
});
</script>