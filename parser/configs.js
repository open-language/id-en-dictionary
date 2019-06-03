const pos = {
    "n": "noun",
    "v": "verb",
    "a": "adjective",
    "s": "ajective satellite",
    "r": "adverb"
}

const language = {
    'B': 'Bahasa msa',
    'I': 'Indonesian ind',
    'M': 'Malay zsm'
}

const goodness = {
    'Y': 'hand checked and good',
    'O': 'automatic high quality (good)',
    'M': 'automatic medium quality (ok)',
    'L': 'automatic, probably bad (low)',
    'X': 'hand checked and bad'
}

module.exports = { pos, language, goodness }