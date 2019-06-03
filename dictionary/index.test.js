const reader = require('../reader')
const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async () => {
        await dictionary.init()
        await reader.init()
    })

    test('do something', () => {
        
    })
})

