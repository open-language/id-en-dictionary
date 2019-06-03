const AllLine = require('./all.line')

describe('Test parsing an all line', () => {
    test('Parse an all line', () => {
        let item = new AllLine('00001740-a	B	L	paling berkebolehan')
        expect(item.synsetOffset).toBe(1740)
        expect(item.pos).toBe('adjective')
        expect(item.language).toBe('Bahasa msa')
        expect(item.goodness).toBe('automatic, probably bad (low)')
        expect(item.lemma).toBe('paling_berkebolehan')

        item = new AllLine('00002956-a	I	X	terutama mengenai otot')
        expect(item.synsetOffset).toBe(2956)
        expect(item.pos).toBe('adjective')
        expect(item.language).toBe('Indonesian ind')
        expect(item.goodness).toBe('hand checked and bad')
        expect(item.lemma).toBe('terutama_mengenai_otot')

        item = new AllLine('00004492-v	B	L	milik')
        expect(item.synsetOffset).toBe(4492)
        expect(item.pos).toBe('verb')
        expect(item.language).toBe('Bahasa msa')
        expect(item.goodness).toBe('automatic, probably bad (low)')        
        expect(item.lemma).toBe('milik')
    })
})