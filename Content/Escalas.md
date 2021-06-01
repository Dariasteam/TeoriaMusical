Según esta definición, la escala más simple de todas es, naturalmente, aquella que
contiene todos los intervalos que conocemos. Esta se conoce como **Escala cromática**.
Por razones obvias, en esta escala es indiferente qué tónica elijamos.

<div id ="piano_0" class="piano_container"></div>

?> Todas las teclas / notas del piano conforman la escala cromática

Si bien se trata de una escala "válida", su utilidad normalmente se ve reducida a aplicarla en pasajes entre figuras hechas con otras escalas, ya que su sonido es muy inestable y poco melodioso.


<link rel="stylesheet" href="PianoGenerator/style.css">
<script>
piano({
    tag: "piano_0",
    octaves: 1,
    names: "all",
    relevant: {
        "C"  : { color: "fuchsia" },
        "C#" : { color: "purple" },
        "D"  : { color: "red" },
        "D#" : { color: "orange" },
        "E"  : { color: "yellow" },
        "F"  : { color: "lime" },
        "F#" : { color: "olive" },
        "G"  : { color: "green" },
        "G#" : { color: "teal" },
        "A"  : { color: "aqua" },
        "A#" : { color: "blue" },
        "B"  : { color: "navy" }
    },
    controls: [
        "up",
        "down",
        "spring"
    ]
});
</script>