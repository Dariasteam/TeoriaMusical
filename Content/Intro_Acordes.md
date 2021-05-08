<h1> Introducción a los acordes </h1>

> Un acorde es un conjunto de tres o más notas que al ser tocadas
simultáneamente producen una sonoridad característica.

De una manera similar a las escalas, para generar un acorde necesitamos
una tónica (o fundamental) y los intervalos con los que obtener el resto de notas. Los acordes "pertenecen" a las escalas en el sentido de que con las notas de una escala concreta podremos hacer un número determinado de acordes. Aquellos acordes con notas que no estén en una escala no perteneceran a la misma. Análogamente a las escalas, la nota que se esté usando como tónica servirá para dar nombre al acorde. Veamos un ejemplo con la escala Mayor de Do.

<div id ="piano_0" class="piano_container"></div>

> Posible acorde en la escala de Do Mayor. En este caso tanto la tónica de la escala
como del acorde son la nota Do.

<div id ="piano_1" class="piano_container"></div>

> Este otro acorde no pertenece a Do Mayor dado que contiene las notas Fa# y Sol#. Sin embargo, si pertenece, por ejemplo, a la escala de La Mayor. En tal caso, la tónica de la escala
es La mietnras la tónica del acorde sería Mi.

Escala de La Mayor y sus intervalos:


    A B C# D E F# G# A
     1 1  2 1 1  2  1


!> Si no tocamos las notas de un acorde simultáneamente sino en una secuencia en la que se puede distinguir cada nota individualmente, diremos que estamos tocando un **arpegio**. En nuestro piano eso significa utilizar cualquiera de los botones de reproducción menos el de play.



<h2> Introducción a las Triadas </h2>
Hagamos a continuación un ejercico para construir los acordes fundamentales. Utilizando la escala de Do Mayor por su simpleza, vamos a crear acordes siguiendo una estrategia basada en las posiciones de las notas en la escala. El esquema a seguir consistirá en coger tres notas de la siguiente forma:

- Tónica. La consideraremos situada en la posicion 1
- Tercera: Nota situada en la posición 3 respecto a la tónica
- Quinta: Nota situada en la posición 5 respecto a la tónica

Veamos un ejemplo para la tónica Do:

    Escala Do Mayor:

    C D E F G A B C


Comenzando con Do como tónica, nos movemos a la posición tres y seleccionamos Mi. Respetimos el proceso moviéndonos hasta la posición 5 desde la tónica y seleccionamos Sol.

- Tónica: **C**
- Nota en la posición 3 respecto a la tónica: **E**
- Nota en la posición 5 respecto a la tónica: **G**

<div id ="piano_2" class="piano_container"></div>

Con estas tres notas habremos construido una triada.

> Triada: Acorde de tres notas compuesto por Tónica, Tercera y Quinta.

<h2> Acordes Mayores </h2>

Fíjate como hemos ignorado completamente los intervalos para este proceso y hemos trabajado únicamente con posiciones en la escala. Sin embargo, sabemos que distintos intervalos producen diferentes efectos musicales, por lo que obviamente habrán de influir en como suena nuestro acorde. Analicemos entonces los intervalos que lo componen. Únicamente tienen relevacia los intervalso en los que participa la tónica.

Escala Do Mayor y sus intervalos:


- C: Tónica
- Intervalo (C - E): Dos tonos ó cuatro semitonos. **Tercera Mayor**
- Intervalo (C - G): siete semitonos. **Quinta Justa**

<div id ="piano_3" class="piano_container"></div>

Presta atención a lo que ha ocurrido con la tercera nota. Desde un punto de vista
de escala, es simplemente la tercera nota desde la tónica, pero fijándonos en los intervalos
comprendemos que se trata concretamente de una Tercera Mayor. Hemos creado pues
el acorde de **Do Mayor**.

> Los acores Mayores suenan alegres

<h2> Acordes Menores </h2>
Continuemos el ejercicio de construcción de triadas. Ahora que ya hemos elegido
como tónica del acorde la primera nota de la escala de Do mayor, repitamos los pasos
para la segunda, es decir, Re.


    Escala Do Mayor y sus intervalos:

    C D E F G A B C
     1 1 2 1 1 1 2

- Tónica: **D**
- Nota en la posición 3 respecto a la tónica: **F**
- Nota en la posición 5 respecto a la tónica: **A**

<div id ="piano_4" class="piano_container"></div>

Fijándonos en los inervalos:

- D: Tónica
- Intervalo (D - F): **tres** semitonos. **Tercera Menor**
- Intervalo (F - A): siete semitonos. **Quinta Justa**

La tercera nota en este otro caso es una tercera menor, por tanto el acorde
que hemos construido en este caso es un **Re Menor**.

> Los acores menores suenan melancólicos


<h2> Sonoridad mayor Vs Sonoridad Menor </h2>
Resulta evidente que para cualquier tónica podemos construir un acorde tanto
mayor como menor (otro tema distinto será a qué escalas pertenezca cada uno
de ellos). Para enfatizar las diferencias de sonido, centrémonos ahora
en la tónica Do y comparemos como suenan el acorde mayor y menor respectivamente.


<div id ="piano_5" class="piano_container"></div>

?> Do Mayor

<div id ="piano_6" class="piano_container"></div>

?> Do menor


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
piano({
    tag: "piano_2",
    octaves: 1,
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_3",
    octaves: 1,
    number: "pressed",
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_4",
    octaves: 1,
    number: "pressed",
    names: "all",
    tonic: "D",
    pressed: ["D", "F", "A"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_5",
    octaves: 1,
    number: "pressed",
    names: "all",
    tonic: "C",
    pressed: ["C", "E", "G"],
    controls: ["sync", "spring"]
});
piano({
    tag: "piano_6",
    octaves: 1,
    number: "pressed",
    names: "all",
    tonic: "C",
    pressed: ["C", "D#", "G"],
    controls: ["sync", "spring"]
});
</script>