const wordnet = require('id-wordnet')
const Dictionary = require('./index')

const dictionary = new Dictionary(wordnet['1.2'])

describe("Test the dictionary", () => {

    beforeAll(async () => {
        console.time('dictionary.init')
        await dictionary.init()
        console.timeEnd('dictionary.init')
    }, 20000)

    test('Test query', () => {
        console.time('query-mengerti')
        const result = dictionary.query('mengerti')
        console.timeEnd('query-mengerti')
        expect(result['589738'].words).toEqual('memahami, mengerti, faham')
    })

})

