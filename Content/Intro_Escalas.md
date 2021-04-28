<h1> Introducción a las escalas </h1>

> Una escala es un conjunto de intervalos y una nota raíz o **tónica** a partir de la cual podemos obtener una serie de notas concretas a las que restringirnos para usar en una melodía.

Cada escala posee unas características musicales propias. Conocerlas nos ayudará
a componer música con un cierto grado de conciencia, permitiéndonos conseguir piezas que _"suenen a"_  (un estilo concreto, una banda...) o _"suenen como"_ (un concepto, otra obra...) en lugar de vernos limitados a un sistema de prueba y error a ciegas.

Por ejemplo, una escala inventada podría ser aquella que contiene una tónica, su intervalo de tercera menor, su intervalo de tercera mayor y su intervalo de quinta.
Si llamamos a esta escala, "_Escala Icónica_", al utilizar Do como tónica obtendremos la "_Escala Icónica" de Do_.

<div id ="piano_0" class="piano_container"></div>

> "_Escala Icónica" de Do_. Para usar esta escala debemos restringirnos a tocar exclusivamente las teclas señaladas.

---

Tengamos en mente que una escala (al tratarse de una serie de intervalos) nos habla de propociones y no de notas per se. Por tanto, cambiando la **tónica** obtendremos
notas diferentes pero seguirá tratándose de la misma escala.


<div id ="piano_1" class="piano_container"></div>

> "_Escala Icónica" de Re_

Si el lector prueba a tocar melodías ascendentes y descendentes en ambas escalas
podrá comprobar como el efecto musical es el mismo, simplemente la segunda suena
más agudo.

---

Normalmente la forma de expresar una escala no es haciendo referencia todo el rato a la tónica como acabamos de hacer. En su lugar, describimos el número de semitonos con respecto al intervalo anterior en cada momento. Además, se incluye siempre una octava por enciam de la tónica. Veamos un ejemplo.

- Escala Icónica definida desde la tónica:


    - Tónica
    - 3m    <- Hay 3 semitonos de distancia con respecto a la tónioca (tercera menor)
    - 3M    <- Hay 4 semitonos de distancia con respecto a la tónica (tercera Mayor)
    - 5     <- Hay 5 semitonos de distancia con respecto a la tónica (quinta justa)
    - 8     <- Hay 12 semitonos de distancia con respecto a la tónica (octava)

- Escala Icónica definida con número de semitonos:


    - Tónica
    - 3     <- Hay 3 semitonos de distancia con su nota anterior.
    - 1     <- Hay 1 semitono de distancia con su nota anterior.
    - 3     <- Hay 3 semitonos de distancia con su nota anterior.
    - 5     <- Hay 5 semitonos de distancia con su nota anterior

Colocándolo en una sola línea -> Escala Icónica: `Tónica - 3 - 1 - 3 - 5.`

Otra forma de representarlas es utilizando símbolos que nos indiquen las distancias
en semitonos. Nostros usaremos a lo largo de esta guía **V** como semitono y **U** como tono.

Escala Icónica colocando los nombres de los intervalos:

    Tónica   (3m) (3M)  (5)   (8)
           VU    V    UV   UUV


- VU: Tono y medio = 3
- V: Medio tono    = 1
- UV: Tono y medio = 3
- UUV: Dos tonos y medio = 5

Normalmente esta manera se utiliza como primer paso para calcular las notas de una  escala para una tónica en concreto, completando entre los símbolos de tono y semitono las notas que se corresponden cono dichas distancias.


Escala Icónica de Re:

    D  F  F#   A      D
     VU  V  UV   UUUV


---

<h2> La Escala Diatónica o escala Mayor </h2>

Aún existiendo tantas escalas como combinaciones posibles de las 12 notas hay, indiscutiblemente la de mayor importancia es la **Escala diatónica**. La inmensa mayoría de música que conocerá el lector se habrá hecho utilizándola de una forma u otra. A pesar de que no es estrictamente correcto, nos referiremos a ella
como Escala Mayor durante algunas secciones hasta que podamos explicar más
detalladamente el por qué de esto.

Esta escala posee la siguiente relación de intervalos: `Tónica - 2 - 2 - 1 - 2 - 2 - 2 - 1`. Dado que el intervalo de mayor tamaño es de un tono, se puede escribir también con abreviaturas para tono y semitono: `Tónica - T - T - st - T - T - T - st`.

Escala Do Mayor:


    C D E F G A B C
     U U V U U U V


<div id ="piano_2" class="piano_container"></div>

> Escala de Do mayor en el piano con amplitud de dos octavas

?> Vemos que las notas que tienen nombre propio (y por ende tecla blanca en el piano) son justo las de la escala de de Do Mayor. Esto nos da una idea de la importancia de esta escala.

Otro ejemplo de la misma escala pero esta vez con tónica en La.

Escala de La Mayor:


    A B C# D E F# G# A
     U U  V U U  U  V


<div id ="piano_3" class="piano_container"></div>

> Escala de La mayor en el piano con amplitud de dos octavas

No incidiremos mucho aquí en la sonoridad musical que proporciona
ya que es un tema que se tratará en profundiad en el apartado de modos. Basta decir que suena agradable al oído, feliz y predecible.
Estamos muy acostumbrados a escucharla y sabemos cómo se comporta.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_0",
    octaves: 1,
    number: "relevant",
    names: "all",
    tonic: "C",
    relevant: {
        "C"  : { color: "orange" },
        "D#" : { color: "orange" },
        "E"  : { color: "orange" },
        "G"  : { color: "orange" },
    }
});
piano({
    tag: "piano_1",
    octaves: 1,
    number: "relevant",
    names: "all",
    tonic: "D",
    relevant: {
        "D"  : { color: "orange" },
        "F"  : { color: "orange" },
        "F#" : { color: "orange" },
        "A"  : { color: "orange" },
    }
});
piano({
    tag: "piano_2",
    octaves: 2,
    names: "relevant",
    tonic: "C",
    relevant: {
        "C" : { color: "orange" },
        "D" : { color: "orange" },
        "E" : { color: "orange" },
        "F" : { color: "orange" },
        "G" : { color: "orange" },
        "A" : { color: "orange" },
        "B" : { color: "orange" },
    }
});
piano({
    tag: "piano_3",
    octaves: 2,
    names: "relevant",
    tonic: "C",
    relevant: {
        "A" : { color: "orange" },
        "B" : { color: "orange" },
        "C#" : { color: "orange" },
        "D" : { color: "orange" },
        "E" : { color: "orange" },
        "F#" : { color: "orange" },
        "G#" : { color: "orange" },
    }
});
</script>