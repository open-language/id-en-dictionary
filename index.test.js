const idDictionary = require('./index')

describe("Test the index file for IdDictionary", () => {
    test("Test initialization", async () => {
        const dict = await idDictionary.init()
        const result = dict.query('preposterous')
        expect(result.word).toBe('preposterous')
        expect(result.synsets[2570643].words).toEqual([
            "absurd",
            "cockeyed",
            "derisory",
            "idiotic",
            "laughable",
            "ludicrous",
            "nonsensical",
            "preposterous",
            "ridiculous"
        ])
    })
})