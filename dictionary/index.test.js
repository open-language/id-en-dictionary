const wordnet = require('id-wordnet')
const Reader = require('../reader')
const Dictionary = require('./index')

const dictionary = new Dictionary()

describe("Test the dictionary", () => {

    beforeAll(async () => {
        console.time('dictionary.init')
        await dictionary.init()
        console.timeEnd('dictionary.init')

        const reader = new Reader(wordnet['1.2'])
        console.time('reader.init')
        await reader.init()
        console.timeEnd('reader.init')
    }, 20000)

    test('Test query', () => {
        console.time('query-mengerti')
        const result = dictionary.query('mengerti')
        console.timeEnd('query-mengerti')
        expect(result['589738'].words).toEqual('memahami, mengerti, faham')
    })

})

