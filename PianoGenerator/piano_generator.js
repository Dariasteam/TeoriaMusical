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

let names = [
    "1",
    "2m",
    "2M",
    "3m",
    "3M",
    "4",
    "4A",
    "5",
    "5A",
    "6",
    "7m",
    "7M"
]

function getName (index) {
    return names[index % 12];
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
        text: "",
        keyType: isWhite ? "white" : "black"
    };

    handleObjectWithOptionals(parameters, obj)

    return `
    <div class="${obj.keyType}-key"
         style="background: ${obj.background};
                color: ${obj.color};
         ">
        <span>
            ${obj.text}
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

function handleConfig (noteName, config, note_ac) {
    let obj = {
        name: noteName,
    };

    let pressed = false;
    if (config.pressed.length > 0) {
        let candidate = config.pressed[0];
        if (candidate == noteName) {
            pressed = true;
            config.pressed.shift();
            obj["background"] = "red";
        }
    }

    let pos = config.relevant[noteName];
    if (pos != undefined) {
        if (pos.color)
            obj["background"] = pos.color;
        if(pos.text)
            obj["text"] = pos.number;
    }

    switch (config.number) {
        case "all":
            obj["text"] = getName(note_ac);
            break;
        case "pressed":
            if (pressed)
                obj["text"] = getName(note_ac);
            break;
        case "relevant":
            if (Object.keys(config.relevant).includes(noteName))
                obj["text"] = getName(note_ac);
        case "none":
            break;
    }

    return obj;
}

function setTonicOffset(tonic) {
    let i = 0;
    for (const [noteName, isWhite] of Object.entries(notes)) {
        if (tonic == noteName)
            return 12-i;
        i++;
    }
}

function generate (parameters) {
    let config = {
        tag: "",
        octaves: 1,
        number: "none",
        tonic: "C",
        relevant: {},
        pressed: []
    };

    handleObjectWithOptionals(parameters, config)

    let whiteKeys = [];
    let blackKeys = [];
    let note_ac = setTonicOffset(config.tonic);
    let n_keys = config.octaves;
    for (let i = 0; i < n_keys; i++) {
        for (const [noteName, isWhite] of Object.entries(notes)) {
            let obj = handleConfig(noteName, config, note_ac);
            let key = generateKey(obj, isWhite);
            if (isWhite)
                whiteKeys.push(key)
            else
                blackKeys.push(key)
            note_ac++;
        }
    }

    document.getElementById(config.tag).innerHTML += `
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