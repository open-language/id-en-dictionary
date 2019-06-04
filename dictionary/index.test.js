const reader = require('../reader')
const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async () => {
        // console.time('dictionary.init')
        // await dictionary.init()
        // console.timeEnd('dictionary.init')
        console.time('reader.init')
        await reader.init()
        console.timeEnd('reader.init')
    }, 20000)

    test('Test getSize ', () => {
        expect(dictionary.db.getSize().count).toBe(149019)
    })

    test('Test indexLemmaSearch', () => {
        const result = dictionary.db.indexLemmaSearch('mengerti')
        expect(result.mengerti[0].lemma).toBe('mengerti')
    })

    test('Test indexOffsetSearch', () => {
        const result = dictionary.db.indexOffsetSearch(588221)
        expect(result['588221'][0].offset).toBe(588221)
    })

    test('Test query', () => {
        console.time('query-mengerti')
        const result = dictionary.query('mengerti')
        console.timeEnd('query-mengerti')
        expect(result['589738'].words).toEqual('memahami, mengerti, faham')
    })

    // test('Test enOffsetSearch', () => {
    //     const result = 
    // })

})

