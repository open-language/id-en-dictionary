import configs from './configs'
import Index from './interface.index'

class AllLine {

    line: Index

    constructor() {
        this.line = {
            offset: 0,
            pos: '',
            language: '',
            lemma: '',
            isGood: false 
        }
    }

    parse(line: string) {
        const params = line.split('\t')
        const [offset, posAbbr] = params.shift()!.split('-')
        this.line.offset = parseInt(offset, 10)
        this.line.pos = configs.pos.get(posAbbr)!
        this.line.language = configs.language.get(params.shift()!)!
        
        const goodness = params.shift()!
        this.line.isGood = ['Y', 'O', 'M'].includes(goodness)
        this.line.lemma = params.shift()!.split(' ').join('_')
        
        return this.line
    }
}

export default AllLine