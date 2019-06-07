const wordnet = require('id-wordnet')
const Database = require('./index')

const database = new Database(wordnet['1.2'])

describe("Test the dictionary", () => {

    beforeAll(async () => {
        console.time('dictionary.init')
        await database.init()
        console.timeEnd('dictionary.init')
    }, 20000)

    test('Test getSize ', () => {
        expect(database.getSize().count).toBe(149019)
    })

    test('Test indexLemmaSearch', () => {
        const result = database.indexLemmaSearch('mengerti')
        expect(result.mengerti[0].lemma).toBe('mengerti')
    })

    test('Test indexOffsetSearch', () => {
        const result = database.indexOffsetSearch(588221)
        expect(result['588221'][0].offset).toBe(588221)
    })
})

