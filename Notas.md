# Notas y nomenclatura
El sistema de música occidental se base en la selección de entre todas las frecuencias posibles de solo 11 frecuencias únicas, relacionadas entre sí de forma que presentan 
una serie de propiedades matemáticas interesantes. En este capítulo generaremos dichas
notas. 

## Notas Musicales
Cada una de las 12 frecuencias anteriormente mencionadas constituye una **Nota**. 

Sin embargo, solo siete de estas doce notas poseen nombre propio. Son estas las 7 notas
musicales que conocemos popularmente:

> Do, Re, Mi, Fa, Sol, La, Si

Olvidemos momentáneamente la existencia de las 4 notas sin nombre que restan para completar las 11 totales y prosigamos la explicación como si verdaderamente sólo existiesen 7 notas.

## Octavas
Es ingenuo pensar que la música se compone estrictamente de solo 7 frecuencias 
únicas y que todas las variaciones que escuchamos se deben en exclusiva al _timbre_ de los instrumentos. En realidad, una vez pasamos de la séptima nota (Si), lo que 
ocurre es que comenzamos a repetir la lista de notas desde el inicio, pero en una
versión más aguda de las mismas. Surge así la idea de la **octava**, que como
su nombre sugiere, hace alusión a la posición de una nota con respecto a otras,
refiriéndose a la octava nota.

- Octava: Nota que se encuentra a 8 notas de distancia de la nota original.

Esto implica que las notas se repiten indefinidamente. Veamos por ejemplo
las distancias entre dos ocurrencias de la nota Do

| Distancia  / Nota | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 10 |
| - | - | - | - | - | - | - | - | - | - | - | - | 
| | __Do__ | Re | Mi | Fa | Sol | La | Si | *__Do__* | _Re_ | _Mi_ |...|

> El concepto de octava es aplicable a cualquier nota, por ejemplo, vemos
que tras la segunda ocurrencia de la nota Do, surgen repeticiones de Re y Mi.

Ahora bien, con esto únicamente hemos definidio el comportamiento qué tienen las notas, pero no hemos explicado por qué sucede esto.

Una definición más formal de octava sería "aquella nota cuya frecuencia es el doble 
de otra nota inmediatamente anterior". Es decir, para una nota X de 100Hz, obtendríamos una octava en una frecuencia de 200Hz. Si continuamos la secuencia, la siguietne octava aparecería en 400Hz (pues es el doble de la octava previa, 200Hz).

Esto se debe a que el cerebro interpreta las frecuencias con dicha relación como con
_características musicales_ similares, considerándolas como versiones cada vez más 
agudas de un mismo **tono**.

?> Cuando nombramos una nota, la podemos acompañar con su número de octava. 
Por ejemplo, en el caso anterior, Podríamos decir X1, X2, X3 para refereirnos 
a octavas cada vez más agudas de nuestra hipotética nota X. En un caso con notas reales, hablamos por ejemplo de un _Do5_ como la octava siguiente a _Do4_.

Entendiendo pues que las octavas se comportan siguiendo una progresión geométrica de razón 2, completemos una tabla para nuestra hipotética nota X, cuya octava 1 tiene una frecuencia de 100Hz.

| Nota | Número de Octava| Hz |
| -| -| - |
| X-2 |-2 | 25    |
| X-1 |-1 | 50    |
| X0  | 0 | 100   |
| **X1**  | **1** | **100**   |
| X2  | 2 | 200   |
| X3  | 3 | 400   |
| X4  | 4 | 800   |
| X5  | 5 | 1600  |
| X6  | 6 | 3200  |
| X7  | 7 | 6400  |
| X8  | 8 | 12800 |

De aquí podemos extraer que para esta nota X1 a 100Hz, la octava máxima audible es 
la 8 (X8), puesto que X9 implica una oscilación a 25.600Hz, la cual es mayor
al límite supeior del oido humano (20.000Hz).

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

## Distancias y Temperamento
El concepto de octava nos ha permitido generar a partir de cualquier frecuencia (nota)
las consecuentes versiones más agudas de la misma nota. Por ejemplo, podemos 
averiguar todos las notas Do (Do1, Do2, Do3, etc.) que existen siempre que conozcamos 
la frecuencia de alguna octava de Do. Sin embargo, aún no sabemos como obtener el 
resto de notas (Re, Mi, Fa, etc.). 

Para ser honestos, podríamos seleccionar un número de frecuencias cualesquiera, 
construir sus octavas y combinarlas para producir música.
Este planteamiento es perfectamente válido y es la razón por la que a lo largo
de la historia han existido diferentes sistemas musicales. Sin embargo, para el
sistema occidental que nos ataña, la relación de frecuencias entre las notas
es crucial y se sigue un sistema denominado **Temperamento Igual**, donde la 
palabra _temperamento_ hace referencia a la relación existente entre notas.

### Temperamento igual
Recuperemos ahora las 4 nota decidimos apartar temporalmente en el apartado 
[Notas Musicales](Notas). Como ya hemos adelantado, nuestro sistema musical 
únicamente emplea 12 notas (junto a sus respectivas octavas). 
La forma en que las frecuencias de estas 12 notas son seleccionadas **no** es 
dividiendo en 12 partes iguales las frecuencias contenidas entre dos octavas 
como se podría entender del nombre, sino estableciendo una relación entre frecuencias
que tras repetirse 12 veces genera la siguietne octava. Esta condición es que, 
la frecuencia de una nota cualquiera siempre es el resultado de multiplicar la 
frecuencia de la nota inmediatamente anterior por la razón 2^(1/12) => 1,059463094. 

Consideremos nuestra nota ficticia X y sus octavas X1 = 100Hz y X2 = 200Hz

|  | Nota 1 (X1) | Nota 2 | Nota 3 | Nota 4 | Nota 5 | Nota 6 | Nota 7 | Nota 8 | Nota 9 | Nota 10 | Nota 11 | Nota 12 | Nota 13 (X2) |
| - | - | -| -| - | -| - | - | - | - | - | - | - | - |
| Relación | 100Hz | 100 * 1,059 | 105,9463 * 1,059 |  112,197 * 1,059| 118,816 * 1,059 | 125,826 * 1,059| 133,249 * 1,059 | 141,110 * 1,059 | 149,435 * 1,059 | 158,251 * 1,059 | 167,587 * 1,059 | 187,944 * 1,059 | 187,944 * 1,059 |
| Frecuencia | 100Hz | 105,9463Hz | 112,197Hz | 118,816Hz | 125,826Hz | 133,249Hz | 141,110Hz | 149,435Hz | 158,251Hz | 167,587Hz | 177,474Hz | 187,944Hz | 200Hz |

Se aprecia como tras repetir el proceso 12 veces obtenemos la octava X2, la cual
sabemos que es correcta puesto que cumple la condición de tener una frecuencia 
igual al doble de X1.

### Tonos y Semitonos






### 


. Ahora que volvemos a tener 11 notas musicales diferentes

Empieza a ser claro que hay una importancia en las distancias entre las frecuencias
para generar el sistema musical. 


Esto se construye seleccionando una frecuencia arbitraria y obteniendo nuevas frencuencias como múltiplos de la primera. Para ello se emplea una relación -razón- de _raiz doceaba de dos_, es decir, 1.0594630943592953... 

## Construyendo la escala

Tomemos por ejemplo como frecuencia inicial 100 Hz. A partir de aquí habremos de obtener las 10 frecuencias (notas) restantes.

Haremos esto según la siguiente fórmula

Nota Final = Frecuencia Inicial x Número de nota buscada x Razón

| Número de Nota |Frecuencia Inicial| Razón | Frecuencia Resultante |
|-|-|-|-|
| 1  | 100  |   |   |
| 2  | 100  |   |   |
| 3  | 100  |   |   |
| 4  | 100  |   |   |
| 5  | 100  |   |   |
| 6  | 100  |   |   |
| 7  | 100  |   |   |
| 8  | 100  |   |   |
| 9  | 100  |   |   |
| 10 | 100  |   |   |
| 11 | 100  |   |   |

Qué pasa con la doceaba?


| 11 |   |   |   |
 