const configs = require('./configs')

class AllLine {
    constructor(line) {
        this.synsetOffset = 0
        this.pos = 0
        this.language = ''
        this.goodness = ''
        this.glossary = ''

        this.line = line

        const params = line.split('\t')
        const [offset, posAbbr] = params.shift().split('-')
        this.synsetOffset = parseInt(offset, 10)
        this.pos = configs.pos[posAbbr]
        this.language = configs.language[params.shift()]
        this.goodness = configs.goodness[params.shift()]
        this.glossary = [params.shift()]
        
        return this
    }
}

module.exports = AllLine