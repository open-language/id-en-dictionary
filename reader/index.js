const readline = require('readline')
const fs = require('fs')
const parser = require('../parser')
const database = require('../database')

class Reader {
    constructor(path) {
        this.isReady = false
        this.readRemaining = 2
        this.fileTypes = ['wn-ind-def.tab', 'wn-msa-all.tab']
        this.path = path
    }

    async init() {
        return new Promise((resolve) => {
            this.fileTypes.forEach((fileType) => {
                const file = `${this.path}/${fileType}`
                const readerInterface = readline.createInterface({
                    input: fs.createReadStream(file),
                    output: false
                })
        
                readerInterface.on('line', (line) => {
                    if (fileType === 'wn-ind-def.tab') {
                        const item = new parser.DefinitionLine(line)
                        database.addDefinition(item)
                    } else {
                        const item = new parser.AllLine(line)
                        if (item.isGood) {
                            database.addIndex(item)
                        }
                    }
                })
        
                readerInterface.on('close', () => {
                    this.readRemaining -= 1
                    if (this.readRemaining === 0) {
                        this.isReady = true
                        database.ready()
                        resolve()
                    }
                })

                // Ignoring close, pause, resume, SIGCONT, SIGINT, SIGTSTP
            })
        })
    }
}


module.exports = Reader