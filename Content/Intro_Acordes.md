<h1> Introducción a los acordes </h1>

> Un acorde es un conjunto de tres o más notas que al ser tocadas
simultáneamente producen una sonoridad característica.

De una manera similar a las escalas, para generar un acorde necesitamos
una tónica (o fundamental) y los intervalos con los que obtener el resto de notas. Los acordes "pertenecen" a las escalas en el sentido de que con las notas de una escala concreta podremos hacer un número determinado de acordes. Aquellos acordes con notas que no estén en una escala no perteneceran a la misma. Veamos un ejemplo con la escala Mayor de Do.

<div id ="piano_0" class="piano_container"></div>

> Posible acorde en la escala de Do Mayor

<div id ="piano_1" class="piano_container"></div>

> Este otro acorde no pertenece a Do Mayor dado que contiene las notas de Fa y Sol sostenido. Sin embargo, si pertenece a la escala de La Mayor.

Escala de La Mayor:


    A B C# D E F# G# A
     U U  V U U  U  V


!> Si tocamos las notas de un acorde en una secuencia de forma que se pueda distinguir cada una de ellas individualmente, diremos que estamos tocando un **arpegio**.


<h2> Construyendo acordes a partir de una escala </h2>



<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_0",
    octaves: 1,
    names: "all",
    tonic: "C",
    relevant: {
        "C"  : { color: "orange" },
        "E"  : { color: "orange" },
        "G"  : { color: "orange" },
    }
});
piano({
    tag: "piano_1",
    octaves: 1,
    names: "all",
    tonic: "C",
    relevant: {
        "E"   : { color:  "orange" },
        "F#"  : { color:  "green" },
        "G#"  : { color:  "green" },
    }
});
</script>