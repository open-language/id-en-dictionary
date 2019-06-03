const idDictionary = require('./index')

describe("Test the index file for IdDictionary", () => {
    test("Test initialization", async () => {
        await idDictionary.init()
    }, 10000)
})