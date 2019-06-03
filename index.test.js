const idDictionary = require('./index')

describe("Test the index file for IdDictionary", () => {
    test("Test initialization", async () => {
        const start = Date.now()
        await idDictionary.init()
        console.log(`Time to boot up ${(Date.now() - start)/1000}s`)
    })
})