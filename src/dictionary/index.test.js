import wordnet from 'id-wordnet'
import Dictionary from './index'

const dictionary = new Dictionary(wordnet.get('1.2')!)

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
        expect(result.get(589738)!.words).toEqual('memahami, mengerti, faham')
    })

    test('Weird check on query', () => {
        let result = dictionary.query('prospect')
        expect(result.size).toBe(0)
        result = dictionary.query(' ')
        expect(result.size).toBe(0)
    })

})

