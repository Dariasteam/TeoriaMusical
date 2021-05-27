<h1> Acordes de la Escala Mayor </h1>

La elección de intervalos que conforma la escala mayor no es arbitraria,
están escogidos de forma que incluye 3 acordes menores, 3 acordes mayores
y un acorde disminuido. Además, las notas están estructuradas de forma que las
triadas se obtienen siguiendo una regla simple en base a las posiciones de las notas dentro de la escala.

    Escala Do Mayor y sus intervalos:

    C D E F G A B C
     1 1 2 1 1 1 2

Eligiendo cualquier nota como tónica, al escoger las notas que se encuentren
dos y cuatro posiciones por delante, obtendremos la triada asociada. Escojamos como tónica Do

| Posición | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-|-|-|-|-|-|-|-|
| Nota |**C** | D | **E** | F | **G** | A | B |

- Tónica: C
- Nota dos posiciones por delante: E
- Nota cuatro posiciones por delante: G

El resultado es la triada de Do Mayor.

<h2> Índices y Contexto </h2>

Una vez estamos restringidos a las notas de una escala (lo que ocurrirá
prácticamente siempre), trabajamos en base a posiciones de las notas
en lugar de intervalos concretos. Fíjate en el procedimiento que acabamos de seguir,
en el contexto de la escala, lo que estamos diciendo es que para generar una
triada escogeremos una tónica como posición 1 y a partir de ahí las notas que se encuentren
en la tercera y quinta __posición__.
Luego esto se traducirá en una tercera mayor o menor (y una quinta justa o disminuida)
en función de la nota concreta situada en cada posición, pero en todos los casos
son terceras y quintas, puesto que el índice hace referencia a posiciones en la escala.

Completemos el ejercicio con todas
las triadas posibles en la escala de do mayor. Como tenemos 7 notas, podremos conseguir 7 triadas.

<h2> 1. Do Mayor (C) </h2>

<div id ="piano_C" class="piano_container"></div>

<h2> 2. Re menor (Dm) </h2>

<div id ="piano_D" class="piano_container"></div>

<h2> 3. Mi menor (Em) </h2>

<div id ="piano_E" class="piano_container"></div>

<h2> 4. Fa mayor (F) </h2>

<div id ="piano_F" class="piano_container"></div>

<h2> 5. Sol mayor (G)</h2>

<div id ="piano_G" class="piano_container"></div>

<h2> 6. La menor (Am) </h2>

<div id ="piano_A" class="piano_container"></div>

<h2> 7. Si disminuido (Bº) </h2>

<div id ="piano_B" class="piano_container"></div>

!> Nota como al llegar a una tónica muy próxima a la última nota de la escala (B), el procedimietno continua "dando la vuelta" y recogiendo notas situadas
en una posición anterior. Esto se debe a que la escala
incluye infinitas repeticioens de la secuencia de notas que contiene.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_C",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_D",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "D",
    pressed: ["D", "F", "A"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_E",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "E",
    pressed: ["E", "G", "B"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_F",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "F",
    pressed: ["F", "A", "C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_G",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "G",
    pressed: ["G", "B", "D"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_A",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "A",
    pressed: ["A", "C", "E"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_B",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "B",
    pressed: ["B", "D", "F"],
    controls: ["sync", "spring"]
});
</script>