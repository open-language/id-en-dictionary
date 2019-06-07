const readline = require('readline')
const fs = require('fs')
const parser = require('../parser')

class Reader {
    constructor(db) {
        this.isReady = false
        this.readRemaining = 2
        this.fileTypes = ['wn-ind-def.tab', 'wn-msa-all.tab']
        this.db = db
    }

    async init() {
        return new Promise((resolve) => {
            this.fileTypes.forEach((fileType) => {
                const file = `${this.db.path}/${fileType}`
                const readerInterface = readline.createInterface({
                    input: fs.createReadStream(file),
                    output: false
                })
        
                readerInterface.on('line', (line) => {
                    if (fileType === 'wn-ind-def.tab') {
                        const item = new parser.DefinitionLine(line)
                        this.db.addDefinition(item)
                    } else {
                        const item = new parser.AllLine(line)
                        if (item.isGood) {
                            this.db.addIndex(item)
                        }
                    }
                })
        
                readerInterface.on('close', () => {
                    this.readRemaining -= 1
                    if (this.readRemaining === 0) {
                        this.isReady = true
                        this.db.markReady()
                        resolve()
                    }
                })

                // Ignoring close, pause, resume, SIGCONT, SIGINT, SIGTSTP
            })
        })
    }
}


module.exports = Reader