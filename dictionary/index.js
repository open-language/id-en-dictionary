const enDictionary = require('en-dictionary')

const utils = {
    getArray: (query) => {
        return (!Array.isArray(query)) ? [query] : query
    },
}

const datastore = {
    isReady: false,
    ready: () => {
        datastore.isReady = true
    },
    getSize: () => {
        return {
            count: datastore.index.length + datastore.definitions.length,
            indexes: Object.keys(datastore.indexOffsetIndex).length + Object.keys(datastore.indexLemmaIndex).length
        }
    },

    index: [],
    addIndex: (item) => {
        datastore.index.push(item)

        if (!Array.isArray(datastore.indexLemmaIndex[item.lemma])) {
            datastore.indexLemmaIndex[item.lemma] = []
        }
        datastore.indexLemmaIndex[item.lemma].push(item)

        if (!Array.isArray(datastore.indexOffsetIndex[item.offset])) {
            datastore.indexOffsetIndex[item.offset] = []
        }
        datastore.indexOffsetIndex[item.offset].push(item)

    },

    indexLemmaIndex: {},
    indexLemmaSearch: (query) => {
        const output = {}
        utils.getArray(query).forEach((lemma) => {
            output[lemma] = datastore.indexLemmaIndex[lemma]
        })
        return output
    },
    indexOffsetIndex: {},
    indexOffsetSearch: (query) => {
        const output = {}
        utils.getArray(query).forEach((offset) => {
            output[offset] = datastore.indexOffsetIndex[offset]
        })
        return output
    },

    definitions: [],
    addDefinition: (data) => {
        datastore.definitions.push(data)
    },

}

const dictionary = {
    
    english: null,
    init: async () => {
        dictionary.english = await enDictionary.init()
    },

    enOffsetSearch: (synset) => {
        return dictionary.english.query(synset, 'synset', false)
    },


    query: (search) => {
        const output = {}
        const offsets = []
        const lemmaOffsets = datastore.indexLemmaSearch(search)
        lemmaOffsets[search].forEach((item) => {
            output[item.offset] = item
            offsets.push(item.offset)
        })

        const offsetLemmas = datastore.indexOffsetSearch(offsets)
        Object.keys(offsetLemmas).forEach((offset) => {
            output[offset].words = offsetLemmas[offset].map(item => item.lemma).join(', ')
        })
        
        return output
    },

}

module.exports = {
    db: datastore,
    init: dictionary.init,
    query: dictionary.query
    // searchWord: queries.searchWord
}