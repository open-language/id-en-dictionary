const reader = require('../reader')
// const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async (done) => {
        // await dictionary.initEnDictionary()
        await reader.init()
        done()
    })

    test('do something', () => {
        
    })
})

