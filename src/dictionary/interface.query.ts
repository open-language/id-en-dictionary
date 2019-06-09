interface Query {
    offset: number,
    pos: string,
    language: string,
    lemma: string,
    words: string,
    glossary: string[],
    englishWords: string[],
    definition: string,
}

export default Query