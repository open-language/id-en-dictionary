const wordnet = require('id-wordnet')
const Reader = require('./reader')
const dictionary = require('./dictionary')

const idDictionary = {
    init: async () => {
        await dictionary.init()

        const reader = new Reader(wordnet['1.2'])
        await reader.init()
        return dictionary
    },

}

module.exports = idDictionary