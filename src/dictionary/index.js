import enDictionary from 'en-dictionary'
import wordnet from 'en-wordnet'
import Database from '../database'
import Index from '../parser/interface.index';
import Query from './interface.query';

class Dictionary {

    path: string
    english: any
    database: Database

    constructor(path: string) {
        this.path = path
        this.english = new enDictionary(wordnet.get('3.0')!)
        this.database = new Database(path)
    }

    async init() {
        await this.database.init()
        await this.english.init()
    }

    query(search: string) {
        let output = new Map<number, Query>()

        const offsets: number[] = []
        const lemmaResults = this.database.indexLemmaSearch([search])
        lemmaResults.get(search)!.forEach((index) => {
            offsets.push(index.offset)
            output.set(index.offset, {
                offset: index.offset,
                pos: index.pos,
                language: index.language,
                lemma: index.lemma,
                words: '',
                glossary: [],
                englishWords: [],
                definition: ''
            })
        })

        const offsetResults = this.database.indexOffsetSearch(offsets)
        offsetResults.forEach((indexes, offset) => {
            const offsetResult = output.get(offset)!
            offsetResult.words = indexes.map(item => item.lemma).join(', ')
            output.set(offset, offsetResult)
        })

        const englishResults = this.english.searchOffsetsInDataFor(offsets)
        englishResults.forEach((results: any, offset: number) => {
            const offsetResults = output.get(offset)!
            offsetResults.englishWords = results.words.join(', ')
            offsetResults.glossary = results.glossary
            output.set(offset, offsetResults)
        })

        return output
    }
}

export default Dictionary