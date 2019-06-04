const reader = require('./index')
const dictionary = require('../dictionary')

describe("Test the reader functionality", () => {
    test("Test initialization", async () => {
        await reader.init()
        expect(dictionary.db.getSize().count).toBe(149019)
    }, 20000)
})