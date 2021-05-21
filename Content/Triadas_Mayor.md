<h1> Triadas de la escala Mayor </h1>

Completemos el ejercicio que comenzamos en el apartado previo y generemos todas
las triadas posibles en neustra escala de do mayor. COmo tenemos 7 notas, podremos
conseguir 7 triadas. Recordemos una vez más nuestras notas disponibles:


    Escala Do Mayor:

    C D E F G A B C

<h2> 1. Do Mayor (C) </h2>

<div id ="piano_0" class="piano_container"></div>

<h2> 2. Re menor (Dm) </h2>

<div id ="piano_1" class="piano_container"></div>

<h2> 3. Mi mayor (E) </h2>

<div id ="piano_2" class="piano_container"></div>

<h2> 4. Fa mayor (F) </h2>

<div id ="piano_3" class="piano_container"></div>

<h2> 5. Sol mayor (G)</h2>

<div id ="piano_4" class="piano_container"></div>

<h2> 6. La menor (Am) </h2>

<div id ="piano_5" class="piano_container"></div>

<h2> 7. Si disminuido (Bº) </h2>

<div id ="piano_6" class="piano_container"></div>

Se trata de una triada nueva. En este caso, la tercera es menor y la quinta
disminuida (o la cuarta aumentada).

> Fíjate como este acorde suena mucho más
_inestable_ que los demás, al tocarlo arpegiado no da la sensación de que la
melodía acabe tras la últiam nota de Si. Prueba a pulsar el botón de arpegiar y cuando
termine pulsar sobre Do, verás que la melodía _cierra_ o _resuelve_ mucho mejor.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_0",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_1",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "D",
    pressed: ["D", "F", "A"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_2",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "E",
    pressed: ["E", "G", "B"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_3",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "F",
    pressed: ["F", "A", "C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_4",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "G",
    pressed: ["G", "B", "D"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_5",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "A",
    pressed: ["A", "C", "E"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_6",
    octaves: 2,
    number: "pressed",
    names: "all",
    tonic: "B",
    pressed: ["B", "D", "F"],
    controls: ["sync", "spring"]
});
</script>