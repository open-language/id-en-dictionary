const wordnet = require('id-wordnet')
const Reader = require('./index')
const database = require('../database')

describe("Test the reader functionality", () => {
    test("Test initialization", async () => {
        const reader = new Reader(wordnet['1.2'])
        await reader.init()
        expect(database.getSize().count).toBe(149019)
    }, 20000)
})