const enDictionary = require('en-dictionary')
const reiterator = require('reiterator')
const Database = require('../database')

const obj = reiterator.objects

class Dictionary {
    constructor(path) {
        this.path = path
        this.english = null
        this.database = new Database(path)
    }

    async init() {
        await this.database.init()
        this.english = await enDictionary.init()
    }

    query(search) {
        const output = {}
        const offsets = []

        if (!obj.isString(search)) {
            return output
        }

        const lemmaOffsets = this.database.indexLemmaSearch(search)

        if ( Object.keys(lemmaOffsets).length === 0 ) {
            return output
        }

        lemmaOffsets[search].forEach((item) => {
            output[item.offset] = item
            offsets.push(item.offset)
        })

        const offsetLemmas = this.database.indexOffsetSearch(offsets)
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