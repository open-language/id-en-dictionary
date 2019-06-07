const database = {

    init: () => {

    },

    isReady: false,
    ready: () => {
        database.isReady = true
    },
    getSize: () => {
        return {
            count: database.index.length + database.definitions.length,
            indexes: Object.keys(database.indexOffsetIndex).length + Object.keys(database.indexLemmaIndex).length
        }
    },

    index: [],
    addIndex: (item) => {
        database.index.push(item)

        if (!Array.isArray(database.indexLemmaIndex[item.lemma])) {
            database.indexLemmaIndex[item.lemma] = []
        }
        database.indexLemmaIndex[item.lemma].push(item)

        if (!Array.isArray(database.indexOffsetIndex[item.offset])) {
            database.indexOffsetIndex[item.offset] = []
        }
        database.indexOffsetIndex[item.offset].push(item)

    },

    indexLemmaIndex: {},
    indexLemmaSearch: (query) => {
        const output = {}
        database.getArray(query).forEach((lemma) => {
            output[lemma] = database.indexLemmaIndex[lemma]
        })
        return output
    },
    indexOffsetIndex: {},
    indexOffsetSearch: (query) => {
        const output = {}
        database.getArray(query).forEach((offset) => {
            output[offset] = database.indexOffsetIndex[offset]
        })
        return output
    },

    definitions: [],
    addDefinition: (data) => {
        database.definitions.push(data)
    },

    getArray: (query) => {
        return (!Array.isArray(query)) ? [query] : query
    },


}

module.exports = database