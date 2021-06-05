<h1> Acordes de Séptima </h1>

Se trata de triadas a las que se les ha añadido un intervalo de séptima, pudiendo este ser mayor o menor. Aunque se pueden formar con triadas aumentadas o disminuidas, lo más usual es utilizarlo sobre triadas Mayores y menores. Aparecen entonces cuatro combinaciones posibles posibles.

| Triada base | Tipo de séptima | Nombre del acorde | Contracción para la tónica Do |
| - | -| - | - |
| Mayor | Mayor | Acorde Mayor séptima Mayor |  CMaj7  |
| Mayor | menor | Acorde Mayor séptima       |  C7     |
| menor | Mayor | Acorde menor séptima Mayor |  CmMaj7 |
| menor | menor | Acorde menor séptima       |  Cm7    |


Fíjate como la nomenclatura para especificar el tipo de séptima no es igual que la utilizada para el tipo de tercera. Por defecto se considera que una séptima es siempre menor, a no ser que se especifique lo contrario añadiendo la palabra maj. Además, esta se coloca antes del 7.

<h2> Acorde Mayor séptima </h2>

También llamado séptima de dominante. O si se quisiera explicitar el tipo de séptima, acorde Mayor séptima menor. Para construirlo, a una triada mayor le añadimos la séptima menor con respecto a la tónica.

<h3> Ejemplo de C7 </h3>

<div id ="C7" class="piano_container"></div>

<h3> Acorde C normal para comparar. </h3>

<div id ="C1" class="piano_container"></div>

Estudiemos ahora los nuevos intervalos que incluye el acorde haciendo todas las combinaciones con la nueva nota.

- 3M - 7m: Distancia de 6 semitonos, __tritono__, es decir, mucha disonancia.
- 5 - 7M: Distancia de 3 semitonos, tercera menor.
- 1 - 7M: Séptima menor, disonante. Si se añade una octava de la tónica como hemos hecho, la 7m está participando también en un intervalo de segunda mayor.

?> Musicalmente, el acorde mayor séptima es una versión inestable del acorde mayor. En muchos casos podemos añadir en una progresión de acordes mayores variaciones con sus séptimas para añadir o quitar inestabilidad según necesitemos. Se usan asiduamente en el blues, donde la progresión "clásica" está construida en exclusiva con estos acordes.

!> Desde un punto de vista de la armonía funcional, para el modo Mayor de la escala diatónica, este acorde aparece naturalmente en el grado dominante (V) al añadirle una séptima. Esto quiere decir que, restringidos a los grados (notas) de esta escala, solo podremos formar este acorde para la quinta triada. Debido a su inestabilidad, V7 trata de resolver en I aún más fuerte que simplemente V.

---

<h2> Acorde menor séptima </h2>

O si se quisiera explicitar el tipo de séptima, acorde menor séptima menor. Para construirlo, a una triada menor le añadimos la séptima menor con respecto a la tónica.

<h3> Ejemplo de Cm7 </h3>

<div id ="Cm7" class="piano_container"></div>

<h3> Acorde Cm normal para comparar. </h3>

<div id ="Cm1" class="piano_container"></div>

Nuevos intervalos contenidos:

- 3m - 7m: Distancia de 7 semitonos, quinta justa. No hay disonancia
- 5 - 7m: Distancia de 3 semitonos, tercera menor.
- 1 - 7m: Séptima menor, disonante. Si se añade una octava de la tónica como hemos hecho, la 7m está participando también en un intervalo de segunda mayor.

?> Al no contener un tritono como si ocurría en el acorde Mayor Séptima, este acorde produce una menor tensión. Su diferencia con respecto a la triada menor es también menos destacada.

!> En armonía funcional, para el modo Mayor de la escala diatónica, este acorde se presenta en los grados ii, iii y vi (Supertónica, Mediante y Superdominante)

---

<h2> Acorde Mayor séptima Mayor </h2>

Construido a partir de una triada mayor a la que le añadimos la séptima mayor con respecto a la tónica.

<h3> Ejemplo de CMaj7 </h3>

<div id ="CMaj7" class="piano_container"></div>

<h3> Acorde C normal para comparar. </h3>

<div id ="C2" class="piano_container"></div>

Nuevos intervalos contenidos:

- 3M - 7M: Distancia de 7 semitonos, quinta justa. No hay disonancia
- 5 - 7M: Distancia de 4 semitonos, tercera mayor.
- 1 - 7M: Séptima mayor, disonante. Si se añade una octava de la tónica como hemos hecho, la 7M está participando también en un intervalo de segunda menor, también disonante.

?> Añade tensión pero al carecer nuevamente de tritono, no alcanza el grado de incomodidad del acorde Mayor Séptima.

!> En armonía funcional, para el modo Mayor de la escala diatónica, este acorde se presenta en los grados I, IV (Tónica y Subdominante)

---

<h2> Acorde menor séptima Mayor </h2>

Construido a partir de una triada menor a la que le añadimos la séptima mayor con respecto a la tónica.

<h3> Ejemplo de CmMaj7 </h3>

<div id ="CmMaj7" class="piano_container"></div>

<h3> Acorde Cm normal para comparar. </h3>

<div id ="Cm2" class="piano_container"></div>

Nuevos intervalos contenidos:

- 3m - 7M: Distancia de 8 semitonos, quinta aumentada. Ligera disonancia.
- 5 - 7M: Distancia de 4 semitonos, tercera mayor.
- 1 - 7M: Séptima mayor, disonante. Si se añade una octava de la tónica como hemos hecho, la 7M está participando también en un intervalo de segunda menor, también disonante.

?> No posee un tritono pero sí una quinta aumentada, la cual también es inestable por naturaleza.

!> NO puede formarse en el contexto de la escala diatónica.


<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "C7",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    relevant: {
        "A#"  : { color: "lime" },
    },
    pressed: ["C", "E", "G", "A#", "C"],
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
    tag: "Cm7",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    relevant: {
        "A#"  : { color: "lime" },
    },
    pressed: ["C", "D#", "G", "A#", "C"],
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
    tag: "CMaj7",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    relevant: {
        "B"  : { color: "lime" },
    },
    pressed: ["C", "E", "G", "B", "C"],
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
    tag: "CmMaj7",
    octaves: 2,
    names: "all",
    number: "pressed",
    tonic: "C",
    relevant: {
        "B"  : { color: "lime" },
    },
    pressed: ["C", "D#", "G", "B", "C"],
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