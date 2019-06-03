const enDictionary = require('en-dictionary')

const datastore = {
    index: [],
    definitions: []
}

const dictionary = {
    isReady: false,
    english: null,

    init: async () => {
        const start = Date.now()
        dictionary.english = await enDictionary.init()
        console.log(`Time to boot EN: ${(Date.now() - start)/1000}s`)
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

    query: () => {
    }
}

module.exports = dictionary