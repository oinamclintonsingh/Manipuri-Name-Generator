const nouns = {
    ꯀ: ["ꯀꯅꯥꯗꯥ", "ꯀꯅꯥꯗꯥꯒꯤ", "ꯀꯛꯄ", "ꯀꯂꯥ",],
    ꯁ: ["ꯁꯟꯅꯥꯡꯃꯆꯥ", "ꯁꯝꯂꯞꯄ", "ꯁꯔꯨ",],
    ꯂ: ["ꯂꯐꯣꯏ", "ꯂꯝꯖꯦꯜꯂꯣꯏ",],
    ꯃ: ["ꯃꯇꯨꯡ", "ꯃꯇꯥꯏ", "ꯃꯈꯥ", "ꯃꯁꯥ", "ꯃꯃꯤꯡ", "ꯃꯈꯨꯝ", "ꯃꯔꯝ", "ꯃꯌꯥꯏ",],
    ꯄ: ["ꯄꯔꯦꯡ",],
    ꯆ: ["ꯆꯍꯤ", "ꯆꯍꯤꯆꯥ",],
    ꯇ: ["ꯇꯜ",],
    ꯉ: ["ꯉꯝꯕ", "ꯉꯝꯈꯩ", "ꯉꯝꯈꯩ",],
    ꯊ: ["ꯊꯕꯛ", "ꯊꯕꯛ",],
    ꯍ: ["ꯍꯛꯆꯥꯡ",],
    ꯎ: ["ꯎꯆꯦꯛ", "ꯎꯄꯨ", "ꯎꯄꯨ",],
    ꯏ: ["ꯏꯅꯦ", "ꯏ", "ꯏꯌꯥꯝꯕ", "ꯏꯕꯥꯏ",],
    ꯐ: ["ꯐꯠꯇꯕ", "ꯐꯖꯕ", "ꯐꯃꯨꯡ", "ꯐꯝꯄꯥꯛ",],
    ꯑ: ["ꯑꯋꯥꯡꯕꯥ", "ꯑꯁꯥꯎꯕ", "ꯑꯌꯥꯕ", "ꯑꯏꯕ", "ꯑꯄꯥꯝꯕꯥ", "ꯑꯆꯧꯕ", "ꯑꯃꯨꯕ", "ꯑꯍꯥꯡꯕ", "ꯑꯁꯣꯡꯕ",],
    ꯕ: ["ꯕꯁ",],
    ꯗ: ["ꯗꯔꯤ", "ꯗꯂꯥꯟ",],
    // Add more letters and nouns
};

const adjectives = {
    ꯀ: ["ꯀꯊꯣꯛꯄ",],
    ꯁ: ["ꯁꯝꯂꯞꯄ",],
    ꯃ: ["ꯃꯀꯣꯛ", "ꯃꯇꯨꯡ",],
    ꯅ: ["ꯅꯞꯄ",],
    ꯇ: ["ꯇꯝꯊꯤꯕ", "ꯇꯟꯕ", "ꯇꯁꯦꯡꯕ", "ꯇꯁꯦꯡꯕ",],
    ꯈ: ["ꯈꯟꯕ",],
    ꯍ: ["ꯍꯛꯊꯦꯡꯅꯅ",],
    ꯐ: ["ꯐꯖꯕ", "ꯐꯠꯇꯕ",],
    ꯑ: ["ꯑꯔꯨꯕ", "ꯑꯐꯕ", "ꯑꯁꯤꯕ", "ꯑꯃꯝꯕ", "ꯑꯆꯣꯠꯄ", "ꯑꯁꯣꯀꯄꯥ", "ꯑꯉꯥꯎꯕ", "ꯑꯌꯤꯡꯕ", "ꯑꯌꯥꯎꯕ", "ꯑꯀꯟꯕ", "ꯑꯀꯪꯕꯥ", "ꯑꯁꯤꯡꯕ", "ꯑꯁꯦꯡꯕ", "ꯑꯍꯣꯡꯕ", "ꯑꯉꯥꯟꯕ", "ꯑꯅꯤꯃꯛ", "ꯑꯆꯧꯕ", "ꯑꯀꯥꯕ", "ꯑꯃꯨꯕ", "ꯑꯍꯥꯡꯕ", " ꯑꯉꯛꯄ", "ꯑꯀꯪꯕꯥ", "ꯑꯔꯤꯕ", "ꯑꯍꯤꯡꯕ",],
    // Add more letters and adjectives
};

function toggleLetterInputs() {
    const letterInput = document.getElementById('letterInput');
    const secondLetterInput = document.getElementById('secondLetterInput');
    const provideStartingLetter = document.getElementById('provideStartingLetter').checked;

    letterInput.style.display = provideStartingLetter ? 'block' : 'none';

    if (!provideStartingLetter) {
        letterInput.value = '';
        secondLetterInput.value = '';
    }
}

function toggleSecondLetterInput(show) {
    const secondLetterInput = document.getElementById('secondLetterInput');
    const provideStartingLetter = document.getElementById('provideStartingLetter').checked;

    if (show && provideStartingLetter) {
        secondLetterInput.style.display = 'block';
    } else {
        secondLetterInput.style.display = 'none';
        secondLetterInput.value = ''; // Reset the input value
    }
}

function generateName() {
    const provideStartingLetter = document.getElementById('provideStartingLetter').checked;
    const letterInput = document.getElementById('letterInput').value.trim().toLowerCase();
    const secondLetterInput = document.getElementById('secondLetterInput').value.trim().toLowerCase();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const nameLength = document.querySelector('input[name="nameLength"]:checked').value;
    const output = document.getElementById('output');

    let firstLetterValid = true;
    if (provideStartingLetter) {

        if (!letterInput || letterInput.length !== 1 || !/^[ꯀꯁꯂꯃꯄꯅꯆꯇꯈꯉꯊꯋꯌꯍꯎꯏꯐꯑꯒꯓꯔꯕꯖꯗꯘꯙꯚꯛꯜꯝꯞꯟꯠꯡꯢꯣꯤꯥꯦꯧꯨꯩꯪ꯭]$/.test(letterInput)) {
            firstLetterValid = false;
            output.textContent = "Please enter a valid single letter.";
            return;
        }
        // if (!letterInput || letterInput.length !== 1 || !/^[a-z]$/.test(letterInput)) {
        //     firstLetterValid = false;
        //     output.textContent = "Please enter a valid single letter.";
        //     return;
        // }
    }

    let nounList = provideStartingLetter ? nouns[letterInput] : getRandomNounList();
    let adjectiveList = provideStartingLetter ? adjectives[letterInput] : getRandomAdjectiveList();

    if (!nounList || !adjectiveList) {
        output.textContent = "No names available for the given letter.";
        return;
    }

    let generatedName;
    if (nameLength === "OneWord") {
        const randomWord = Math.random() > 0.5 ? getRandomElement(nounList) : getRandomElement(adjectiveList);
        generatedName = `${gender} - ${randomWord}`;
    } else {
        const randomAdjective = getRandomElement(adjectiveList);
        let randomNoun;

        if (secondLetterInput && secondLetterInput.length === 1 && /^[ꯀꯁꯂꯃꯄꯅꯆꯇꯈꯉꯊꯋꯌꯍꯎꯏꯐꯑꯒꯓꯔꯕꯖꯗꯘꯙꯚꯛꯜꯝꯞꯟꯠꯡꯢꯣꯤꯥꯦꯧꯨꯩꯪ꯭]$/.test(secondLetterInput)) {
            const secondNounList = nouns[secondLetterInput];
            if (secondNounList) {
                randomNoun = getRandomElement(secondNounList);
            } else {
                randomNoun = getRandomElementFromAllNouns();
            }
        } else {
            randomNoun = getRandomElementFromAllNouns();
        }

        // if (secondLetterInput && secondLetterInput.length === 1 && /^[a-z]$/.test(secondLetterInput)) {
        //     const secondNounList = nouns[secondLetterInput];
        //     if (secondNounList) {
        //         randomNoun = getRandomElement(secondNounList);
        //     } else {
        //         randomNoun = getRandomElementFromAllNouns();
        //     }
        // } else {
        //     randomNoun = getRandomElementFromAllNouns();
        // }

        generatedName = `${gender} - ${randomAdjective} ${randomNoun}`;
    }

    output.textContent = `Generated Name: ${generatedName}`;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomElementFromAllNouns() {
    const allNouns = Object.values(nouns).flat();
    return getRandomElement(allNouns);
}

function getRandomNounList() {
    const allNounLists = Object.values(nouns);
    return getRandomElement(allNounLists);
}

function getRandomAdjectiveList() {
    const allAdjectiveLists = Object.values(adjectives);
    return getRandomElement(allAdjectiveLists);
}