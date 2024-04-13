const wordnet = require("id-wordnet").default;
import Database from './index'

const database = new Database(wordnet.get('1.2'))

describe("Test the database", () => {

    beforeAll(async () => {
        console.time('dictionary.init')
        await database.init()
        console.timeEnd('dictionary.init')
    }, 20000)

    test('Test getSize ', () => {
        expect(database.getSize().count).toBe(149019)
    })

    test('Test indexLemmaSearch', () => {
        const result = database.indexLemmaSearch(['mengerti'])
        expect(result.get('mengerti')![0].lemma).toBe('mengerti')
        expect(result.get('mengerti')![0].offset).toBe(588221)
    })

    test('Test indexOffsetSearch', () => {
        const result = database.indexOffsetSearch([588221])
        expect(result.get(588221)![0].offset).toBe(588221)
    })
})

