import configs from './configs'
import Definition from './interface.definition'

class DefinitionLine {

    line: Definition

    constructor() {
        this.line = {
            offset: 0,
            pos: '',
            definition: '',
            glossary: []
        }
    }

    parse(line: string) {
        const params = line.split('\t')
        const [offset, posAbbr] = params.shift()!.split('-')
        this.line.offset = parseInt(offset, 10)
        this.line.pos = configs.pos.get(posAbbr)!
        this.line.definition = params.shift()!
        params.shift()!.split(';').forEach((gloss) => {
            this.line.glossary.push(gloss.trim())
        })

        return this.line
    }
}

export default DefinitionLine