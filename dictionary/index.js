const enDictionary = require('en-dictionary')
const database = require('../database')

class Dictionary {
    constructor() {
        this.english = null
    }

    async init() {
        this.english = await enDictionary.init()
    }

    query(search) {
        const output = {}
        const offsets = []
        const lemmaOffsets = database.indexLemmaSearch(search)
        lemmaOffsets[search].forEach((item) => {
            output[item.offset] = item
            offsets.push(item.offset)
        })

        const offsetLemmas = database.indexOffsetSearch(offsets)
        Object.keys(offsetLemmas).forEach((offset) => {
            output[offset].words = offsetLemmas[offset].map(item => item.lemma).join(', ')
        })

        const offsetEnglishDetails = this.english.searchOffsetsInData(offsets)
        Object.keys(offsetEnglishDetails).forEach((offset) => {
            output[offset].glossary = offsetEnglishDetails[offset].glossary
            output[offset].englishWords = offsetEnglishDetails[offset].words
        })
        
        return output
    }
}


module.exports = Dictionary