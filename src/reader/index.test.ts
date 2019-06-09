import wordnet from 'id-wordnet'
import Reader from './index'

describe("Test the reader functionality", () => {
    test("Test initialization", async () => {

        const mockDb = {
            path: wordnet.get('1.2')!,
            indexCount: 0,
            definitionCount: 0,
            isReady: false,
            addIndex: () => { mockDb.indexCount += 1 },
            addDefinition: () => { mockDb.definitionCount += 1 },
            markReady: () => { mockDb.isReady = true }
        }

        const reader = new Reader(mockDb)
        await reader.init()
        expect(mockDb.indexCount).toBe(135920)
        expect(mockDb.definitionCount).toBe(13099)
    }, 20000)
})