<h1> Acordes Suspendidos </h1>

Los acordes suspendidos son un tipo de acorde de tres notas pero que no contienen intervalo de tercera, y por tanto, no generan la sensación sonora de mayor o menor. Esto es tremendamente útil para producir sensaciones _etéreas_ o _abiertas_, además de servir como acordes de paso. Pueden ser vistos como triadas cuyas terceras hemos desplazado hasta ocupar la posición de segunda o cuarta y que resuelven cómodamente sobre la triada original.

<h2> Acordes suspendido de segunda o sus2 </h2>

Se construye a partir de una tónica, una _segunda mayor_ y una quinta justa.

<h3> Ejemplo de Csus2 </h3>

<div id ="Csus2" class="piano_container"></div>

Nuevos intervalos contenidos:

- 2M - 5: Distancia de una cuarta justa.

!> Fíjate como el acorde puede resolver indistintamente en una triada mayor o menor
siempre que tenga la misma tónica.

<div id ="C1" class="piano_container"></div>

<div id ="Cm1" class="piano_container"></div>

---

<h2> Acordes suspendido de cuarta o sus4 </h2>

Se construye a partir de una tónica, una _cuarta justa_ y una quinta justa.

<h3> Ejemplo de Csus2 </h3>

<div id ="Csus4" class="piano_container"></div>

Nuevos intervalos contenidos:

- 4 - 5: Distancia de una segunda mayor.

!> Igual que en el caso anterior, un acorde sus4 puede resolver indistintamente
en una triada mayor o menor de misma tónica.

<div id ="C2" class="piano_container"></div>

<div id ="Cm2" class="piano_container"></div>

---

<h3> Ejemplo de uso en una progresión - Show Must Go On de Queen. </h3>

Esta canción está compuesta en su mayoría en Si menor (a excepción de la segunda estrofa que hace una subida de tono hasta Do sostenido menor y una sección del final que pasa a modo mayor). La progresión "básica" tanto de estrofa como estribillo sería la siguiente:

    Bm G Em F# Em

Siguiendo estos acordes, podríamos cantar la melodía de la voz y esta funcionaría perfectamente. No obstante faltaría _algo_ que le da el toque característico a este tema,
esto es, que todos los acordes pasan por al menos una de sus versiones sus2 o sus4. La progresión real es:


    Bm Bmsus2 Bmsus4 Bm | G Gsus2 Gsus4 G | Emsus4 Em | F#sus4 F#  | Em


Esta progresión es mucho más rica y respeta la tonalidad de la progresión "básica" de antes. Verás que la mayoría de las veces los acordes suspendidos son usados tan solo como decoración y transición.

> Puedes probar en los teclados de arriba a pulsar Cm Csus2 Csus4 Cm para conseguir una
versión un semitono más aguda de los primeros acordes de la canción.

----


<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "Csus2",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "D", "G","C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "C1",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "E", "G", "C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "Cm1",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "D#", "G", "C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "Csus4",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "F", "G","C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "C2",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "E", "G", "C"],
    controls: ["sync", "spring"]
});
piano({
    tag: "Cm2",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    pressed: ["C", "D#", "G", "C"],
    controls: ["sync", "spring"]
});
</script>