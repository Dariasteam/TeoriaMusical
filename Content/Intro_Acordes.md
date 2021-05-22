<h1> Introducción a los acordes </h1>

> Un acorde es un conjunto de tres o más notas que al ser tocadas
simultáneamente producen una sonoridad característica.

Para generar un acorde necesitamos una nota inicial, a la que llamaremos *tónica* o *fundamental* y una serie de intervalos medidos desde la tónica
que nos permitan obtener el resto de notas implicadas. El nombre del acorde será una combinación de la nota que actúe como tónica y los intervalos utilizados.

Veamos un ejemplo con un acorde inventado, al que llamaremos acorde *icónico*:

Nuestro acorde estará compuesto por los siguientes elementos

- Tónica
- Intervalo de cuarta justa con respecto a la tónica
- Intervalos de quinta justa con respecto a la tónica

Esta sería pues la definición del _acorde Icónico_, a partir de la cual generamos
acordes para tónicas concretas, por ejemplo Re sostenido o Do.

<div id ="iconic_0" class="piano_container"></div>

> Acorde _icónico_ de Re sostenido con su tónica señalada en rosado

<div id ="iconic_1" class="piano_container"></div>
arpegio
> Acorde _icónico_ de Do con su tónica señalada en rosado


Si el lector no tiene el oido acostumbrado quizá considere que tienen una
sonoridad diferenciada al reproducir las notas simultáneamente. Si se reproducen
en secuencia, queda patente que, como se explico con los intervalos, ambos acordes presentan las mismas propiedades sonoras a pesar de tener distintas tónicas,
puesto que la relación entre notas es la misma.

!> Si no tocamos las notas de un acorde simultáneamente sino en una secuencia en la que se puede distinguir cada nota individualmente, diremos que estamos tocando un **arpegio**.
Para nuestro piano, haremos apregios pulsando sobre los botones con flechas
cuando las teclas señaladas en rojo forman un acorde.

---

Si bien las posibles combinaciones son gigantescas, no todas presentan mismas propiedades
ni suenan igual de agradable al oido. Si aprovechamos lo que sabemos
sobre la sonoridad de cada intervalo podemos conseguir efectos musicales concretos
que nos sirvan en nuestras piezas.

En el apartado siguiente exploraremos el tipo
de acorde más simple y a la vez más relevante: la triada. Tras ello proseguiremos
con otros apartados, dejando una lista más extensa con otros tipos de acordes y sus explicaciones en el apartado [Acordes](s) para que el lector la consulte cuando considere.

<h2> Triadas </h2>

> Acorde de tres notas compuesto por Tónica, Tercera y Quinta.

Existen cuatro tipos diferenciados

<h3> Acordes Mayores </h3>

- Tónica
- **Tercera Mayor**
- Quinta Justa

Se representa simplemente con la letra de la tónica,
aunque a veces se añade una M mayúscula. Por ejemplo, Do mayor es C ó CM. La distinición entre el acorde Do Mayor (C) y la nota aislada Do (C) se realiza por contexto.

<div id ="piano_2" class="piano_container"></div>

> Do Mayor o C

?> Los acordes Mayores suenan alegres y agradables. Su uso es mayoritario en
géneros como el pop, reggae o ska.

<h3> Acordes Menores </h3>

- Tónica
- **Tercera Menor**
- Quinta Justa

Se representa con la letra de la tónica y una m minúscula,
por ejemplo, Dm para Re menor.

<div id ="piano_3" class="piano_container"></div>

> Do Menor o Cm

?> Los acordes menores suenan melancólicos y oscuros. Son predominantes
en baladas, hard rock y derivados.

<h3> Acordes Disminuidos </h3>

- Tónica
- **Tercera Menor**
- **Quinta Disminuida** / **Cuarta Aumentada**

Se representa con la letra de la tónica y el símbolo º,
por ejemplo, Fº para Fa disminuido.

<div id ="piano_4" class="piano_container"></div>

> Do Disminuido o Cº

?> Los acordes disminuidos ya no son tan tan agradables al oido como los
mayores y menores y su uso es considerablemente menos frecuente, además de que no
suelen usarse de forma predominante sino como acordes de transición entre
otros con una sonido más _estable_. Esto se debe a que contiene un _tritono_, el
intervalo que según dijimos se considera de mayor disonancia. Prueba a tocar el
acorde y a continuación pulsar la tecla de Mi (E). Verás como la melodía _cierra_
de una forma agradable.

<h3> Acordes Aumentados </h3>

- Tónica
- **Tercera Mayor**
- **Quinta Aumentada**

Se representa con la letra de la tónica y el símbolo +,
por ejemplo, G#+ para Sol sostenido disminuido.

<div id ="piano_5" class="piano_container"></div>

> Do Aumentado o C+

?> Con un efecto parecido a los disminuidos, estos acordes generan una tensión
que resulta difícil mantener mucho tiempo sin resolver hacia otra nota o acorde.
En este caso por ejemplo, la nota F tocada tras el acorde resulta agradable y
aporta la sensación de clausura.

<h2> Orden de las notas </h2>
En el ejemplo anterior hemos usado las notas en el mismo orden que las hemos generado
con los intervalos. De esta forma, la nota más grave, a la que llamaremos _bajo_
ha coincidido con la tónica. En realidad un acorde se puede tocar con las notas
colocadas en cualquier orden usando las octavas que se quieran siempre que sean
notas que cumplen los intervalos correspondientes. "Desordenar" los acordes
será necesario por diferentes motivos como facilitar la transición entre dos acordes,
acentuar una nota en concreta (por ejemplo usándola como bajo) para complementar
con la melodía, producir arpegios más interesantes, etc. Incluso hay instrumentos como la guitarra donde la forma estándar de tocar acordes es con notas "desordenadas".

Ejemplo de varias versiones del acorde de Re menor

<div id ="d_1" class="piano_container"></div>

<div id ="d_2" class="piano_container"></div>

<div id ="d_3" class="piano_container"></div>

<div id ="d_4" class="piano_container"></div>

> Aunque todas estas versiones producen la sonoridad menor característica,
los arpegios no son igual de interesantes, así como el acento en
el bajo varía.

En el apartado inversiones de la sección [acordes]() se profundiza más en este
concepto.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "iconic_0",
    octaves: 1,
    names: "all",
    number: "relevant",
    tonic: "D#",
    relevant: {
        "D#"  : { color: "violet" },
        "G#"  : { color: "orange" },
        "A#"  : { color: "orange" },
    },
    pressed: ["D#", "G#", "A#"],
    controls: ["sync", "spring"]
});
piano({
    tag: "iconic_1",
    octaves: 1,
    names: "all",
    number: "relevant",
    tonic: "C",
    relevant: {
        "C"  : { color: "violet" },
        "F"  : { color: "orange" },
        "G"  : { color: "orange" },
    },
    pressed: ["C", "F", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_2",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G", "C"],
    number: "pressed",
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_3",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "D#", "G", "C"],
    number: "pressed",
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_4",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "D#", "F#", "C"],
    number: "pressed",
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_5",
    octaves: 2,
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G#", "C"],
    number: "pressed",
    controls: ["sync", "spring"]
});
piano({
    tag: "d_1",
    octaves: 2,
    names: "all",
    tonic: "D",
    pressed: ["D", "F", "A", "D"],
    number: "pressed",
    controls: ["sync", "spring", "up", "down"]
});
piano({
    tag: "d_2",
    octaves: 2,
    names: "all",
    tonic: "D",
    pressed: ["F", "A", "D", "A"],
    number: "pressed",
    controls: ["sync", "spring", "up", "down"]
});
piano({
    tag: "d_3",
    octaves: 2,
    names: "all",
    tonic: "D",
    pressed: ["A", "D", "F", "A"],
    number: "pressed",
    controls: ["sync", "spring", "up", "down"]
});
piano({
    tag: "d_4",
    octaves: 2,
    names: "all",
    tonic: "D",
    pressed: ["D", "F", "A", "A"],
    number: "pressed",
    controls: ["sync", "spring", "up", "down"]
});
</script>