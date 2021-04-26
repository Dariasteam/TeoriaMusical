let notes = {
    "C"  : true,
    "C#" : false,
    "D"  : true,
    "D#" : false,
    "E"  : true,
    "F"  : true,
    "F#" : false,
    "G"  : true,
    "G#" : false,
    "A"  : true,
    "A#" : false,
    "B"  : true
}

function handleObjectWithOptionals (obj, defaultObj) {
    for (const [key, value] of Object.entries(defaultObj)) {
        let p = obj[key]
        if (p != undefined)
            defaultObj[key] = p;
    }
}

function generateKey (parameters, isWhite) {
    let obj = {
        name: "",
        background: isWhite ? "white" : "black",
        color: isWhite ? "black" : "white",
        number: "",
        keyType: isWhite ? "white" : "black"
    };

    handleObjectWithOptionals(parameters, obj)

    return `
    <div class="${obj.keyType}-key"
         style="background: ${obj.background};
                color: ${obj.color};
         ">
        <span>
            ${obj.number}
            <br>
            ${obj.name}
        </span>
    </div>
   `
}

function blackKeysArrayToHtml (blackKeys) {
    let html = "";
    for (let i = 0; i < blackKeys.length / 5; i++) {
        let offset = i * 5;
        html += `
            <div class="black-left-margin"></div>
            <div class="black-margin"></div>
            ${ blackKeys[0 + offset] }
            <div class="black-margin"></div>
            <div class="black-margin"></div>
            ${ blackKeys[1 + offset] }
            <div class="black-margin"></div>
            <div class="black-left-margin"></div>
            <div class="black-left-margin"></div>
            <div class="black-margin"></div>
            ${ blackKeys[2 + offset] }
            <div class="black-margin"></div>
            <div class="black-margin"></div>
            ${ blackKeys[3 + offset] }
            <div class="black-margin"></div>
            <div class="black-margin"></div>
            ${ blackKeys[4 + offset] }
            <div class="black-margin"></div>
            <div class="black-left-margin"></div>
        `
    }
    return html;
}

function handleConfig (noteName, config) {
    let obj = {
        name: noteName,
    };

    if (config.pressed_notes.length > 0) {
        let candidate = config.pressed_notes[0];
        if (candidate == noteName) {
            config.pressed_notes.shift();
            obj["background"] = "red";
        }
    }

    let pos = config.relevant_notes[noteName];
    if (pos != undefined) {
        if (pos.color)
            obj["background"] = pos.color;
        if(pos.number)
            obj["number"] = pos.number;
    }

    return obj;
}

function generate (parameters) {
    let config = {
        octaves: 1,
        relevant_notes: {},
        pressed_notes: []
    };

    handleObjectWithOptionals(parameters, config)

    let whiteKeys = [];
    let blackKeys = [];

    let n_keys = config.octaves;
    for (let i = 0; i < n_keys; i++) {
        for (const [noteName, isWhite] of Object.entries(notes)) {
            let obj = handleConfig(noteName, config);
            let key = generateKey(obj, isWhite);
            if (isWhite)
                whiteKeys.push(key)
            else
                blackKeys.push(key)
        }
    }

    document.getElementById("container").innerHTML += `
    <div id="octave">
        <div class="blacks">
            ${blackKeysArrayToHtml(blackKeys)}
        </div>

        <div class ="whites">
            ${whiteKeys.join('')}
        </div>
    </div>
    `
}

document.addEventListener("DOMContentLoaded", function(event) {
    generate({
        octaves: 1,
        pressed_notes: ["C", "E", "G"],
        relevant_notes: {
            "C" : {
                number: 1,
                color: "yellow"
            },
            "E" : {
                number: 3,
                color: "blue"
            },
            "G" : {
                number: 5,
                color: "green"
            }
        }
    })
});

