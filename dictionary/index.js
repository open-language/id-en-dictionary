const enDictionary = require('en-dictionary')

const datastore = {
    index: [],
    definitions: []
}

const dictionary = {
    isReady: false,
    english: null,

    initEnDictionary: async () => {
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

    readComplete: () => {
        dictionary.isReady = true
    },

    query: () => {
    }
}

module.exports = dictionary