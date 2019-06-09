const pos = new Map<string, string>()
    .set("n", "noun")
    .set("v", "verb")
    .set("a", "adjective")
    .set("s", "ajective satellite")
    .set("r", "adverb")

const language = new Map<string, string>()
    .set('B', 'Bahasa msa')
    .set('I', 'Indonesian ind')
    .set('M', 'Malay zsm')

const goodness = new Map<string, string>()
    .set('Y', 'hand checked and good')
    .set('O', 'automatic high quality (good)')
    .set('M', 'automatic medium quality (ok)')
    .set('L', 'automatic, probably bad (low)')
    .set('X', 'hand checked and bad')

export default {
    pos,
    language,
    goodness
}