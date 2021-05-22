<h1> Tonalidades </h1>

El concepto de tonalidad es ligeramente ambiguo y en muchos casos se confunde o utiliza como sinónio de escala. La mejor definición de tonalidad que se me ocurre es la de "una restricción auditiva producida por las notas que tocamos y que podemos manejar". Lo cierto es que de buenas a primeras parece bastante raro, pero veremos que en realidad se trata de una idea bastante intuitiva. La tonalidad
de una melodía es algo que se va desarrollando a medida que incorporamos notas
a la misma, así que demostrémosla realizando ese mismo proceso.

Comencemos por una única nota en el piano. Una nota aislada no nos da ninguna
información sobre la tonalidad. Tras ella podríamos tocar cualquier otra nota
que, independientemente del efecto asociado al intervalo implicado, no nos resultaría "ajena" a la melodía (puesto que esta practicamente no existe aún).

Usemos por ejemplo la nota Do como nota de inicio de una melodía y probemos a
añadir una segunda nota cualquiera.

<div id ="piano_1" class="piano_container"></div>

<div id ="piano_2" class="piano_container"></div>

<div id ="piano_3" class="piano_container"></div>

<div id ="piano_4" class="piano_container"></div>

> Posibles melodías empezando por Do

Vemos que cada una sonará de una forma particular, pero no ocurre nada demasiado
destacable. Al tener muy pocas notas, ninguna nos ha dado demasiada información
para que nuestro cerebro establezca la tonalidad.

Incorporemos algunas notas nuevas a continuación. Al aportar más información el cerebro va estableciendo progresivamente qué relaciones existen entre las notas y se acostumbra a ellas. A esto ayuda también la repetición de notas.

<div id ="piano_5" class="piano_container"></div>

> Melodía posible empezando en Do con más notas

Aumentemos a una segunda octava la melodía para potenciar el efecto

<div id ="piano_6" class="piano_container"></div>

> Melodía anterior con una expansión de dos octavas

Ahora aprovechemos esta segunda octava para mover hacer uan pequeña variación,
cambiaremos el Fa sostenido por una Fa natural.

<div id ="piano_7" class="piano_container"></div>

> Melodía anterior con variación en la segunda octava


¿Qué ha pasado? Esta claro que algo algo ha ocurrido que ha resultado incómodo
al oido. Podríamos pensar que la culpa es del intervalo de segunda menor
generado entre el Mi y el Fa que sabemos debe sonar disonante, pero si nos fijamos, llevamos usando una segunda menor todo este tiempo entre Fa sostenido
y Sol sin que nos resulara desagradable. Lo que ha pasado realmente es que hemos
tocado una nota __fuera de la tonalidad__. Al acostumbrar el oido a la nota Fa
sostenido durante este tiempo (y durante la primera octava de este último piano)
cuando suena el Fa natural es inesperado y, en este caso probablemente, desagradable. Nada nos impide utilizar Fa natural para una melodía si acostumbramos el oido a ello, por ejemplo esta otra melodía es una versión de la
segunda octava de la anterior y no es desagradable.

<div id ="piano_8" class="piano_container"></div>

> Melodía similar pero con Fa natural en todos los casos


!> La sensación de tonalidad se desarrolla a medida que escuchamos notas
en una melodía y una vez nos encontramos en una es difícil cambiar a otra
con suavidad.

<h2> Relación entre Tonalidad y Escalas </h2>
Al tocar notas de una escala inevitablemente se genera la sensación de tonalidad
de dicha escala. Esto resulta obvio, si tocamos una serie de notas restringidas
esta claro que nos acostumbraremos a las mismas. Tocar notas la escala de Do mayor hace que se genere la tonalidad de Do Mayor. Sin embargo, ¿Qué pasa si no
tocamos _todas_ las notas de la escala? Acabamos de ver que la tonalidad fue
desarrollándose con más fuerza a medida que incorporábamos notas. Si utilizamos
pocas notas y somos hábiles podremos tocar una melodía que pertenezca a dos
escalas simultáneamente, pudiendo "inclinarnos" hacia la tonalidad asociada a la escala que nos interese a voluntad.

En este ejemplo, utilizaremos notas que pertenecen a las escalas de Do Mayor y
Sol Mayor para movernos de una tonalidad a otra de forma suave.


    Escala de Do Mayor y sus intervalos:

    C D E F G A B C
     2 2 1 2 2 2 1

    Escala de Sol Mayor y sus intervalos:

    G A B C D E F# G
     2 2 1 2 2 2  1

La estrategia que vamos a seguir es comenzar tocando notas del acorde de Do Mayor
que sabemos que pertenece a las dos escalas y continuar una melodía que un caso
utilizará Fa natural y en el otro Fa sostenido. Al tocar una después de la otra
no se apreciará un efecto tan brusco como ocurrió anteriormente.

<div id ="piano_9" class="piano_container"></div>

> Melodía que se inclina hacia Do Mayor

<div id ="piano_10" class="piano_container"></div>

> Melodía que se inclina hacia Sol Mayor

<h2> Uso de cambios de tonalidad </h2>

En general los cambios de tonalidades son una herramienta que nos permite acceder
a sonoridades a las que estaríamos restringidos por usar una sola tonalidad. Esto no es solo por el hecho de que una pieza que use dos escalas de distintas características tendrá efectivamente ambas, sino por el hecho de que salirse de
una tonalidad es un efecto aprovechable en si mismo.

En muchas ocasiones es interesante realizar cambios de tonalidad bruscos con objetivos concretos. Los casos más comunes son _subir_ y _bajar_ de tono, que consisten simplemente en, de forma drástica, mover toda la molodía a una versión más aguda o grave de la misma escala. Por ejemplo pasar de Do Mayor a Re Mayor
produce una sensación alegre y energética. Hacerlo al contrario da una sensación
de "ralentizamiento" igualmente útil según qué contextos.

<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_1",
    octaves: 2,
    pressed: ["C", "D#"],
    controls: ["up"]
});
piano({
    tag: "piano_2",
    octaves: 2,
    pressed: ["C", "D"],
    controls: ["up"]
});
piano({
    tag: "piano_3",
    octaves: 2,
    pressed: ["C", "E"],
    controls: ["up"]
});
piano({
    tag: "piano_4",
    octaves: 2,
    pressed: ["C", "F"],
    controls: ["up"]
});
piano({
    tag: "piano_5",
    octaves: 2,
    pressed: ["C", "E", "F#", "G"],
    controls: ["spring"]
});
piano({
    tag: "piano_6",
    octaves: 2,
    pressed: ["C", "E", "F#", "G", "C", "E", "F#", "G"],
    controls: ["spring"]
});
piano({
    tag: "piano_7",
    octaves: 2,
    pressed: ["C", "E", "F#", "G", "C", "E", "F", "G"],
    controls: ["spring"]
});
piano({
    tag: "piano_8",
    octaves: 2,
    pressed: ["C", "E", "F", "G", "C", "E", "F", "G"],
    controls: ["spring"]
});
piano({
    tag: "piano_9",
    octaves: 2,
    pressed: ["C", "E", "G", "C", "E", "F", "E"],
    controls: ["spring"]
});
piano({
    tag: "piano_10",
    octaves: 2,
    pressed: ["C", "E", "G", "C", "E", "F#", "G"],
    controls: ["spring"]
});
</script>