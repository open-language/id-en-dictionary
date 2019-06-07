const wordnet = require('id-wordnet')
const Reader = require('./index')
const dictionary = require('../dictionary')

describe("Test the reader functionality", () => {
    test("Test initialization", async () => {
        const reader = new Reader(wordnet['1.2'])
        await reader.init()
        expect(dictionary.db.getSize().count).toBe(149019)
    }, 20000)
})