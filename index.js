const wordnet = require('id-wordnet')
const Dictionary = require('./dictionary')

const idDictionary = {
    init: async () => {
        const dictionary = new Dictionary(wordnet['1.2'])
        await dictionary.init()
        return dictionary
    },

}

module.exports = idDictionary