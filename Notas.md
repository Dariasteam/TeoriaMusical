# Notas y Nomenclatura
El sistema de música occidental se basa en la selección de entre todas las
frecuencias posibles de solo 12 frecuencias únicas, las cuales se encuentran
relacionadas entre sí de forma que presentan una serie de propiedades matemáticas
interesantes y partir de las cuales podemos obtener múltiplos.
En este capítulo generaremos dichas notas.

## Notas Musicales
Cada una de las 12 frecuencias anteriormente mencionadas constituye una **Nota**.

Sin embargo, solo siete de estas doce notas poseen nombre propio. Son estas las 7 notas
musicales que conocemos popularmente:

> Do, Re, Mi, Fa, Sol, La, Si

Olvidemos momentáneamente la existencia de las 4 notas sin nombre que restan para completar las 12 totales y prosigamos la explicación como si verdaderamente sólo existiesen 7 notas.

## Octavas
Es ingenuo pensar que la música se compone estrictamente de solo 7 frecuencias
y que todas las variaciones que escuchamos se deben en exclusiva al _timbre_ de
los instrumentos. En realidad, una vez pasamos de la séptima nota (Si), lo que
ocurre es que comenzamos a repetir la lista de notas desde el inicio, pero en una
versión más aguda de las mismas. Surge así la idea de la **octava**, que como
su nombre sugiere, hace alusión a la posición de una nota con respecto a otras,
refiriéndose a la octava nota.

- Octava: Nota que se encuentra a 8 notas de distancia de la nota original.

Esto implica que las notas se repiten indefinidamente. Veamos por ejemplo
las distancias entre dos ocurrencias de la nota Do

| Distancia  / Nota | 1      | 2   | 3   | 4   | 5   | 6   | 7   | 8        | 9    | 10   | 10  |
| ----------------- | ------ | --- | --- | --- | --- | --- | --- | -------- | ---- | ---- | --- |
|                   | __Do__ | Re  | Mi  | Fa  | Sol | La  | Si  | *__Do__* | _Re_ | _Mi_ | ... |

> El concepto de octava es aplicable a cualquier nota, por ejemplo, vemos
que tras la segunda ocurrencia de la nota Do, surgen también repeticiones de Re y Mi.

Ahora bien, con esto únicamente hemos definidio el comportamiento qué tienen
las notas, pero no hemos explicado por qué sucede esto.

Una definición más formal de octava sería "aquella nota cuya frecuencia es el doble
de otra nota inmediatamente anterior". Es decir, para una nota X de 100Hz, obtendríamos
una octava en una frecuencia de 200Hz. Si continuamos la secuencia, la siguiente
octava aparecería en 400Hz (pues es el doble de la octava previa, 200Hz).

Esto se debe a que el cerebro interpreta las frecuencias con dicha relación como con
_características musicales_ similares, considerándolas como versiones cada vez más
agudas de un mismo **tono**.

?> Cuando nombramos una nota, la podemos acompañar con su número de octava.
Por ejemplo, en el caso anterior, Podríamos decir X1, X2, X3 para refereirnos
a octavas cada vez más agudas de nuestra hipotética nota X. En un caso con notas
reales, hablamos por ejemplo de un _Do5_ como la octava siguiente a _Do4_.

Entendiendo pues que las octavas se comportan siguiendo una progresión
geométrica de razón 2, completemos una tabla para nuestra hipotética nota X,
cuya octava 1 tiene una frecuencia de 100Hz.

| Nota   | Número de Octava | Hz      |
| ------ | ---------------- | ------- |
| X-2    | -2               | 25      |
| X-1    | -1               | 50      |
| X0     | 0                | 100     |
| **X1** | **1**            | **100** |
| X2     | 2                | 200     |
| X3     | 3                | 400     |
| X4     | 4                | 800     |
| X5     | 5                | 1600    |
| X6     | 6                | 3200    |
| X7     | 7                | 6400    |
| X8     | 8                | 12800   |

De aquí podemos extraer que para esta nota X1 a 100Hz, la octava máxima audible es
la 8 (X8), puesto que X9 implica una oscilación a 25.600Hz, la cual es mayor
al límite superior del oido humano (20.000Hz).

Vemos también que se pueden generar octavas por debajo de nuestra octava inicial X1,
obteniendo X0 = 50Hz y X-1 = 25Hz. Igual que en el caso anterior, X-2 = 12,5Hz queda
por debajo del límte inferior del oido humano (20Hz).

Es importante señalar que la selección de nuestro número de octava base ha sido
**completamente arbitraria**, podríamos tomar 25 Hz como la octava 1 y
obtendríamos los mismos valores, solo que en dicho caso solo existirían octavas
por encima y llegaríamos hasta la octava número 11. En ambos casos, la **cantidad total**
de octavas es la misma: 11.

!> Cualquier vibración con una frecuencia de α Hz puede ser vista simultáneamente como
una octava por encima de otra vibración de frecuencia (α/2) Hz y octava inferior a
otra vibración de frecuencia (2 *α) Hz

!> Dependiendo del contexto "Octava" también se utiliza para definir un rango
de notas. Por ejemplo, si decimos que un instrumento tiene 3 octavas
nos referimos a que es capaz de producir todas las notas existentes en ese rango.

## Distancias y Temperamento
Ahora ya sabemos como generar a partir de cualquier frecuencia (nota)
las consecuentes versiones más agudas de la misma. Por ejemplo, podemos
averiguar todos las notas Do (Do1, Do2, Do3, etc.) que existen siempre que conozcamos
la frecuencia de alguna octava de Do. Sin embargo, aún no sabemos como obtener el
resto de notas (Re, Mi, Fa, etc.).

Para ser honestos, podríamos seleccionar un número cualquiera de frecuencias
igualmente aleatorias, construir sus octavas y combinarlas para producir música.
Este planteamiento es perfectamente válido y es en parte la razón por la que a lo
largo de la historia han existido diferentes sistemas musicales. Sin embargo, para el
sistema occidental que nos ataña, la relación de frecuencias entre las notas
es crucial y se sigue un sistema denominado **Temperamento Igual**, donde la
palabra _temperamento_ hace referencia a la relación existente entre notas.

### Temperamento igual
Recuperemos ahora las 4 notas que decidimos apartar temporalmente en el apartado
[Notas Musicales](Notas). Como ya se ha descrito, nuestro sistema musical
únicamente emplea 12 notas, junto a sus respectivas octavas.
La forma en que las frecuencias de estas 12 notas son seleccionadas **no** es
dividiendo en 12 partes iguales las frecuencias contenidas entre dos octavas
como se podría ededucir del nombre, sino estableciendo una relación a pares entre
frecuencias que cumplen todas los pares de notas adyacentes. Esta condición es que,
partiendo de una nota cualquiera, la nota siguiente se produce como resultado
de multiplicar la frecuencia de la nota inicial por la razón 2^(1/12) => 1,059463094.

Consideremos nuestra nota ficticia X y sus octavas X1 = 100Hz y X2 = 200Hz

|            | Nota 1 (X1) | Nota 2      | Nota 3           | Nota 4          | Nota 5          | Nota 6          | Nota 7          | Nota 8          | Nota 9          | Nota 10         | Nota 11         | Nota 12         | Nota 13 (X2)    |
| ---------- | ----------- | ----------- | ---------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Relación   | 100Hz       | 100 * 1,059 | 105,9463 * 1,059 | 112,197 * 1,059 | 118,816 * 1,059 | 125,826 * 1,059 | 133,249 * 1,059 | 141,110 * 1,059 | 149,435 * 1,059 | 158,251 * 1,059 | 167,587 * 1,059 | 187,944 * 1,059 | 187,944 * 1,059 |
| Frecuencia | 100Hz       | 105,9463Hz  | 112,197Hz        | 118,816Hz       | 125,826Hz       | 133,249Hz       | 141,110Hz       | 149,435Hz       | 158,251Hz       | 167,587Hz       | 177,474Hz       | 187,944Hz       | 200Hz           |

Se aprecia como tras repetir el proceso 12 veces obtenemos la octava X2, la cual
sabemos que es correcta puesto que cumple la condición de tener una frecuencia
igual al doble de X1.

### Proporciones
De lo anteriormente descrito podemos extraer la siguiente afirmación:

> Dos notas siempre mantienen la misma relación de distancia con sus
respectivas notas inmediatamente anteriores, independientemente de qué dos
notas escojamos.

Parémonos a pensar en ello aprovechando el ejemplo de notas generadas
en el apartado previo. Comprobemos la distancia en frecuencia y la proporción
entre varios pares de notas.

- Calculamos la distancia como frecuencia mayor - frecuencia menor
- Calculamos la proporción como frecuencia mayor / distancia

| A      | Frecuencia A | B      | Frecuencia B | Distancia fB - fA | Proporción |
| ------ | ------------ | ------ | ------------ | ----------------- | ---------- |
| Nota 2 | 105,9463Hz   | Nota 4 | 118,816Hz    | 12,8697           | 9,23       |
| Nota 4 | 118,816Hz    | Nota 6 | 133,249Hz    | 14,433            | 9,23       |
| Nota 6 | 133,249Hz    | Nota 8 | 149,435Hz    | 16,195            | 9,23       |

Vemos que la proporción generada al movernos desde la Nota 2 a las Nota 4 (2 notas
de distancia) es exactamente la misma que al movernos de la Nota 6 a la Nota 8 (de
nuevo a dos notas de distancia). El cerebro igualmente interpreta el salto
desde la Nota 2 a la 4 como una versión musicalmente indéntica al salto de la
nota 6 a la 8, únicamente diferenciados por percibirse uno más grave que el otro.

¿Qué implicaciones tiene esto? Que podemos dejar de trabajar con frecuencias
y comenzar a trabajar con proporciones y distancias, ya que varios conjuntos de
notas siempre generarán el mismo efecto musical si mantienen una misma
proporción.

!> En la música occidental no son importantes las notas sino las proporciones entre las mismas

### Tonos y Semitonos

> Un semitono es la distancia entre dos notas consecutivas.

¿Qué dos notas? Da igual, como hemos visto, musicalmente solo importa que
sean consecutivas. Por ejemplo, la distancia de Nota 3 a Nota 4 es de un semitono,
como también lo es la de Nota 8 a Nota 9.

> Un tono es la distancia de dos semitonos.

Por ejemplo, la distancia de Nota 3 a Nota 5 es de un tono o dos semitonos.

?> Ahora también puedes interpretar una octava como dos notas que se encuentran a
exactamente 12 semitonos de distancia. Hurra!

### Sostenidos y Bemoles
Se trata de una forma de referirse a una nota en base a otra inmediatamente
anterior o posterior.

> Un bemol (♭) es una nota situada un semitono por detrás de la nota referida. Se
designa colocándo el símbolo ♭ o la palabra bemol inmediatamente después de
la nota referenciada. En inglés se conoce como _flat_.

Por ejemplo, Nota 5 bemol hace referencia a Nota 4. Nota2♭ = Nota1;

> Un sostenido (#) es una nota situada un semitono por delante de la nota referida.Se
designa colocándo el símbolo # o la palabra sostenido inmediatamente después de
la nota referenciada. En inglés se conoce como _sharp_.

Por ejemplo, Nota 5 sostenido hace referencia a Nota 6. Nota2# = Nota3.

!> Fíjate que Nota5 es al mismo tiempo Nota4# y Nota6♭. Dependiendo de la ocasión
resultará más práctico llamarlo de una manera o de otra.

## Notas del Sistema Occidental
Expliquemos finalmente que pasa con las 7 notas que en realidad son 12.
Simplemente, solo tienen nombre 7 notas y el resto se designan referenciándolas
como sostenidos o bemoles de las anteriores.

Hagamos una equivalencia con nuestro sistema de notas inventado para visaulizar
las distancias en semitonoes entre las notas y las dos formas de denominar las notas
sin nombre propio.

|                | Nota 1 | Nota 2 | Nota 3 | Nota 4 | Nota 5 | Nota 6 | Nota 7 | Nota 8 | Nota 9 | Nota 10 | Nota 11 | Nota 12 | Nota 13 |
| -------------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------- | ------- | ------- | ------- |
| Como sostenido | Do     | Do#    | Re     | Re#    | Mi     | Fa     | Fa#    | Sol    | Sol#   | La      | La#     | Si      | Do      |
| Como bemol     | Do     | Re♭    | Re     | Mi♭   | Mi     | Fa     | Sol♭  | Sol    | La♭   | La      | Si♭    | Si      | Do      |

Vemos que no todas las notas con nombre propio distan lo mismo con sus adyacentes
con nombre.

?> Aquellas notas que ya poseen nombre de por si es inusual denominarlas como
sostenidos o bemoles. Fíjate por ejemplo en el caso de Fa. Se encuentra a un semitono
de distancia de Mi, pero no se le llama Mi#. El mismo caso ocurre con Si y Do

Y ahora que sabemos generar todas las notas musicales del sistema occidental así como
sus octavas, solos nos queda saber una cosa: ¿Con qué frecuencia empezamos? Como vimos,
es necesario partir de una frecuencia inicial, para poder generar el resto.

Para nuestro ejemplo, el valor de X1 fue 100Hz, en la vida real, se utiliza
440Hz como valor estándar de la 4a octava de La, es decir, La4 = 440Hz.

!> Este valor es completamente arbitrario. Existen canciones populares cuyo La4
tiene una frecuencia distinta. Uno de los casos más populares es la canción Highway to Hell.
De hecho, reproducir música a mayor velocidad implica que cambien todas las frecuencias
y no por eso se pierden las características musicales de la pieza.

?> Aquí encontrarás una tabla con todas las notas y frecuencias que pueden tocarse
en un piano  https://es.wikipedia.org/wiki/Frecuencias_de_afinaci%C3%B3n_del_piano

¿Significa esto que solo se pueden utilizar las frecuencias exactas que hemos generado?
En líneas generales, **sí**. De hecho una gran cantidad de instrumentos ni
siquiera permiten tocar frecuencias intermedias. Por ejemplo, un piano afinado
solo nos dará las frecuencias de las 12 notas y sus octavas. Por contra, un instrumento
como el violín cuyas notas dependen del punto exacto en el que pulse la cuerda el
instrumentista, permiten crear cualquier frecuencia entre dos notas dadas. El
uso de estas "notas intermedias" queda restringido normalmente a efectos
momentáneos, como por ejemplo, frecuencias intermedias durante el desplazamiento suave
de una nota a otra. Esto es así debido a la __disonancia__ que producen,
concepto que se verá más adelante.

Un caso curioso es el de la guitarra, en la cual las notas
están restringidas por los trastes del mástil, pero se puede conseguir notas intermedias estirando
las cuerdas con el dedo en una técnica conocida como [bending](https://es.wikipedia.org/wiki/Bend)

## Nomenclatura Americana
En la forma europea de enumerar las notas consideramos Do
como la primera. No obstante, nada nos impide empezar
a contar a partir de otra. El sistema americano comienza a contar a partir de
la nota La y asigna letras del alfabeto consecutivas como nombres de las notas.

Equivalencia como sostenido

| A   | A#  | B   | C   | C#  | D   | D#  | E   | F   | F#  | G   | G#   | A   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- |
| La  | La# | Si  | Do  | Do# | Re  | Re# | Mi  | Fa  | Fa# | Sol | Sol# | La  |

Equivalencia como bemol

| A   | B♭  | B   | C   | D♭  | D   | E♭  | E   | F   | G♭   | G   | A♭  | A   |
| --- | ---- | --- | --- | ---- | --- | ---- | --- | --- | ----- | --- | ---- | --- |
| La  | Si♭ | Si  | Do  | Re♭ | Re  | Mi♭ | Mi  | Fa  | Sol♭ | Sol | La♭ | La  |

Nótese como solo cambia los nombres de las notas que también tienen nombre
propio en el sistema al que estamos acostumbrado, de forma que sigue sin existir
casos como B# (Si sostenido).

Es muy recomendable acostumbrarse a trabajar con este sistema dado que la
mayoría de recursos educativos lo emplean, independientemente del idioma utilizado.

