const Reader = require('../reader')

class Database {
    constructor(path) {
        this.isReady = false
        this.isProcessing = false
        this.index = []
        this.indexLemmaIndex = {}
        this.indexOffsetIndex = {}
        this.definitions = []
        this.reader = null
        this.path = path
    }

    async init() {
        if (!this.isReady || !this.isProcessing) {
            this.reader = new Reader(this)
            this.isProcessing = true
            await this.reader.init()
        }
    }

    markReady() {
        this.isReady = true
        this.isProcessing = false
    }

    getSize() {
        return {
            count: this.index.length + this.definitions.length,
            indexes: Object.keys(this.indexOffsetIndex).length + Object.keys(this.indexLemmaIndex).length
        }
    }

    addIndex(item) {
        this.index.push(item)

        if (!Array.isArray(this.indexLemmaIndex[item.lemma])) {
            this.indexLemmaIndex[item.lemma] = []
        }
        this.indexLemmaIndex[item.lemma].push(item)

        if (!Array.isArray(this.indexOffsetIndex[item.offset])) {
            this.indexOffsetIndex[item.offset] = []
        }
        this.indexOffsetIndex[item.offset].push(item)
    }

    static copyIndex(item) {
        return {
            offset: item.offset,
            pos: item.pos,
            language: item.language,
            lemma: item.lemma
        }
    }

    indexLemmaSearch(query) {
        const output = {}
        Database.getArray(query).forEach((lemma) => {
            output[lemma] = []
            this.indexLemmaIndex[lemma].forEach((item) => {
                output[lemma].push(Database.copyIndex(item))
            })
        })
        return output
    }

    indexOffsetSearch(query) {
        const output = {}
        Database.getArray(query).forEach((offset) => {
            output[offset] = []
            this.indexOffsetIndex[offset].forEach((item) => {
                output[offset].push(Database.copyIndex(item))
            })
        })
        return output
    }

    addDefinition(data) {
        this.definitions.push(data)
    }

    static getArray(query) {
        return (!Array.isArray(query)) ? [query] : query
    }

}

module.exports = Database