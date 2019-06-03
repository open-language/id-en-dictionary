const enDictionary = require('en-dictionary')

const datastore = {
    index: [],
    definitions: []
}

const dictionary = {
    isReady: false,
    english: null,

    init: async () => {
        dictionary.english = await enDictionary.init()
    },

    addIndex: (index) => {
        datastore.index.push(index)
        return dictionary.getDatastoreSize()
    },

    addDefinition: (data) => {
        datastore.definitions.push(data)
        return dictionary.getDatastoreSize()
    },

    getDatastoreSize: () => {
        return datastore.index.length + datastore.definitions.length
    },

    readComplete: async () => {
        dictionary.isReady = true
    },

    indexLemmaSearch: (search) => {
        return datastore.index.filter((item) => {
            return (item.lemma === search) && (['Y', 'O', 'M'].includes(item.goodness))
        })
    },

    indexSynsetSearch: (synset) => {
        return datastore.index.filter((item) => {
            return (synset.includes(item.synsetOffset)) && (['Y', 'O', 'M'].includes(item.goodness))
        })
    },

    englishSynsetSearch: (synset) => {
        return dictionary.english.query(synset, 'synset', false)
    },

    query: (search) => {
        const output = {}
        const result = dictionary.indexLemmaSearch(search)
        const offsets = []
        result.forEach((item) => {
            offsets.push(item.synsetOffset)
            output[item.synsetOffset] = { pos: item.pos, lemma: item.lemma, words: [] }
        })

        const syns = dictionary.indexSynsetSearch(offsets)
        syns.forEach((item) => {
            output[item.synsetOffset].words.push(item.lemma)
            output[item.synsetOffset].englishWords = dictionary.englishSynsetSearch(item.synsetOffset).synsets[item.synsetOffset].words
            output[item.synsetOffset].englishGlossary = dictionary.englishSynsetSearch(item.synsetOffset).synsets[item.synsetOffset].glossary
        })

        return output
    },

}

module.exports = dictionary