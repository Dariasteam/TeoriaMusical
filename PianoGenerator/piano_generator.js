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

let interval_names = [
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

let audio_files = {}

function getIntervalName (index) {
    return interval_names[index % 12];
}

function handleObjectWithOptionals (obj, defaultObj) {
    for (const [key, value] of Object.entries(defaultObj)) {
        let p = obj[key]
        if (p != undefined)
            defaultObj[key] = p;
    }
}

function generateKey (parameters, isWhite, noteName, octave) {
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
         onclick="event.stopPropagation(); playNote('${noteName + octave}');"
         style="background: ${obj.background}; color: ${obj.color};"
        >
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

function handleConfig (noteName, config, note_ac, pressed_notes, octave) {
    let obj = {};

    let pressed = false;
    if (config.pressed.length > 0) {
        let candidate = config.pressed[0];
        if (candidate == noteName) {
            pressed = true;
            let fileName = "" + config.pressed[0] + octave;
            pressed_notes.push (fileName);
            config.pressed.shift();
            obj["background"] = "red";
        }
    }

    let pos = config.relevant[noteName];
    if (pos != undefined) {
        if (pos.color)
            obj["background"] = pos.color;
        if(pos.text)
            obj["text"] = pos.text;
    }

    switch (config.number) {
        case "all":
            obj["text"] = getIntervalName(note_ac);
            break;
        case "pressed":
            if (pressed)
                obj["text"] = getIntervalName(note_ac);
            break;
        case "relevant":
            if (Object.keys(config.relevant).includes(noteName))
                obj["text"] = getIntervalName(note_ac);
        case "none":
            break;
    }

    switch (config.names) {
        case "all":
            obj["name"] = noteName;
            break;
        case "pressed":
            if (pressed)
                obj["name"] = noteName;
            break;
        case "relevant":
            if (Object.keys(config.relevant).includes(noteName))
                obj["name"] = noteName;
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

function piano (parameters) {
    let config = {
        tag: "",
        names: "relevant",
        octaves: 1,
        number: "none",
        tonic: "C",
        relevant: {},
        pressed: [],
        controls: []
    };

    handleObjectWithOptionals(parameters, config)

    let pressed_notes = [];

    let whiteKeys = [];
    let blackKeys = [];
    let note_ac = setTonicOffset(config.tonic);
    let n_keys = config.octaves;
    for (let i = 0; i < n_keys; i++) {
        for (const [noteName, isWhite] of Object.entries(notes)) {
            let obj = handleConfig(noteName, config, note_ac, pressed_notes, i);
            let key = generateKey(obj, isWhite, noteName, i);
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

    <div>
        ${generateControls(pressed_notes, config.controls)}
    </div>
    `
}

function generateControls (pressed_notes, controls) {
    let c = ``;

    if (pressed_notes.length > 0) {
        let p_notes = "['" + pressed_notes[0] + "'";
        pressed_notes.shift();
        pressed_notes.forEach(noteName => {
            p_notes += ",'" + noteName + "'";
        })
        p_notes += "]";

        if (controls.includes("sync"))
            c += `
                    <i class="bSync" onclick="playSync(${p_notes});"></i>
                  `
        if (controls.includes("up"))
            c += `
                  <i class="bUp" onclick="playUp(${p_notes});"></i>
                  `
        if (controls.includes("down"))
            c += `
                    <i class="bDown" onclick="playDown(${p_notes});"></i>
                  `
        if (controls.includes("spring"))
            c += `
                  <i class="bSpring" onclick="playSpring(${p_notes});"></i>
                  `
    }
    return c;
}

function playNote(note) {
    audio_files[note].play();
}

async function playPiano (notes, timeOffset) {
    let audios = [];
    let ac = 0;
    notes.forEach(note =>  {
        audios.push(audio_files[note]);
    });
    audios.forEach(async audio => {
        setTimeout(() => {audio.play();}, ac)
        ac += timeOffset;
    });
}

function playUp (notes) {
    playPiano(notes, 500);
}

function playDown (notes) {
    playPiano(notes.reverse(), 500);
}

function playSpring (notes) {
    let notes1 = [...notes];
    let notes2 = notes.reverse();
    notes2.shift();
    notes2.forEach(note => {
        notes1.push(note);
    });
    playPiano(notes1, 500);
}

function playSync(notes) {
    playPiano(notes, 0);
}

function preloadAudioFiles() {
    for (let i = 0; i < 2; i++) {
        for (const [key, value] of Object.entries(notes)) {
            let note = key.replace("#", "sharp");
            let file = "PianoGenerator/Notes/" + note + i + ".ogg";
            audio_files[key + i] =  new Audio(file);
        }
    }
}

preloadAudioFiles();