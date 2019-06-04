const enDictionary = require('en-dictionary')

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
    addIndex: (index) => {
        datastore.index.push(index)
        return datastore.getSize()
    },

    indexLemmaIndex: {},
    indexLemmaSearch: (query) => {
        return datastore.index.filter((item) => {
            return (item.lemma === query) && (['Y', 'O', 'M'].includes(item.goodness))
        })
    },
    indexOffsetIndex: {},
    indexOffsetSearch: (query) => {
        return datastore.index.filter((item) => {
            return (query.includes(item.synsetOffset)) && (['Y', 'O', 'M'].includes(item.goodness))
        })
    },

    definitions: [],
    addDefinition: (data) => {
        datastore.definitions.push(data)
        return datastore.getSize()
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
        return search
    },

}

module.exports = {
    db: datastore,
    init: dictionary.init
    // searchWord: queries.searchWord
}