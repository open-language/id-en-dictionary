const DefinitionLine = require('./definition.line')

describe('Test parsing a definition line', () => {
    test('Parse a definition line', () => {
        let item = new DefinitionLine('00001740-a	ind:def	memiliki sarana yang diperlukan')
        expect(item.offset).toBe(1740)
        expect(item.pos).toBe('adjective')
        expect(item.def).toBe('ind:def')
        expect(item.glossary).toEqual(['memiliki sarana yang diperlukan'])

        item = new DefinitionLine('12477583-n	ind:def	tumbuhan, tinggi hingga 2 m, daunnya berukuran 1–2 m, berwarna hijau tua kebiru-biruan berduri tajam pada tepi dan ujungnya dan mengandung serat yang diolah dijadikan tenunan; nanas betawi')
        expect(item.offset).toBe(12477583)
        expect(item.pos).toBe('noun')
        expect(item.def).toBe('ind:def')
        expect(item.glossary).toEqual(['tumbuhan, tinggi hingga 2 m, daunnya berukuran 1–2 m, berwarna hijau tua kebiru-biruan berduri tajam pada tepi dan ujungnya dan mengandung serat yang diolah dijadikan tenunan', 'nanas betawi'])

        item = new DefinitionLine('01358259-n	ind:def	bakteri fotosintetik ditemukan di air tawar dan air asin; ganggang yang berwarna biru atau biru kehijau-hijauan, di antaranya digunakan sebagai makanan alami utama bagi ikan bandeng di tambak air payau')
        expect(item.offset).toBe(1358259)
        expect(item.pos).toBe('noun')
        expect(item.def).toBe('ind:def')
        expect(item.glossary).toEqual(['bakteri fotosintetik ditemukan di air tawar dan air asin', 'ganggang yang berwarna biru atau biru kehijau-hijauan, di antaranya digunakan sebagai makanan alami utama bagi ikan bandeng di tambak air payau'])
    })
})