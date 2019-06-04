const configs = require('./configs')

class AllLine {
    constructor(line) {
        this.synsetOffset = 0
        this.pos = 0
        this.language = ''
        this.goodness = ''
        this.lemma = ''

        this.line = line

        const params = line.split('\t')
        const [offset, posAbbr] = params.shift().split('-')
        this.synsetOffset = parseInt(offset, 10)
        this.pos = configs.pos[posAbbr]
        this.language = configs.language[params.shift()]
        
        const goodness = params.shift()
        this.isGood = ['Y', 'O', 'M'].includes(goodness)
        this.lemma = params.shift().split(' ').join('_')
        
        return this
    }
}

module.exports = AllLine