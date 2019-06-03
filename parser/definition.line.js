const configs = require('./configs')

class DefinitionLine {
    constructor(line) {
        this.synsetOffset = 0
        this.pos = 0
        this.def = ''
        this.glossary = []

        this.line = line

        const params = line.split('\t')
        const [offset, posAbbr] = params.shift().split('-')
        this.synsetOffset = parseInt(offset, 10)
        this.pos = configs.pos[posAbbr]
        this.def = params.shift()
        params.shift().split(';').forEach((gloss) => {
            this.glossary.push(gloss.trim())
        })

        return this
    }
}

module.exports = DefinitionLine