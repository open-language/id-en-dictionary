const reader = require('../reader')
const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async () => {
        await dictionary.init()
        await reader.init()
    }, 10000)

    test('Test indexLemmaSearch', () => {
        const result = dictionary.indexLemmaSearch('mengerti')
        expect(result.length).toBe(12)
    })

    test('Test indexSynsetSearch', () => {
        const result = dictionary.indexSynsetSearch([589738])
        expect(result.length).toBe(3)
    })

    test('Test englishSynsetSearch', () => {
        const result = dictionary.englishSynsetSearch(589738)
        expect(result.word).toBe('follow')
    })

    test('Query dictionary', () => {
        const result = dictionary.query('mengerti')
        expect(Object.keys(result).length).toBe(12)
    }, 10000)
})

