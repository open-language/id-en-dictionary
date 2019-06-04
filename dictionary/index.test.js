const reader = require('../reader')
const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async () => {
        console.time('dictionary.init')
        await dictionary.init()
        console.timeEnd('dictionary.init')
        console.time('reader.init')
        await reader.init()
        console.timeEnd('reader.init')
    }, 10000)

    test('Test something', () => {
        
    })

})

