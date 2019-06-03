const reader = require('./reader')
const dictionary = require('./dictionary')

const idDictionary = {
    init: async () => {
        await dictionary.init()
        await reader.init()
        return dictionary
    },

}

module.exports = idDictionary