const p = require('./index')

describe("Test the index file for IdDictionary", () => {
    test("Test package initialization", async () => {
        const dict = await p.init()
        const result = dict.query('mengerti')
        expect(result['589738'].words).toEqual('memahami, mengerti, faham')
    }, 20000)
})