const wordnet = require('id-wordnet')
const Reader = require('./reader')
const Dictionary = require('./dictionary')

const idDictionary = {
    init: async () => {
        const dictionary = new Dictionary()
        await dictionary.init()

        const reader = new Reader(wordnet['1.2'])
        await reader.init()
        return dictionary
    },

}

module.exports = idDictionary