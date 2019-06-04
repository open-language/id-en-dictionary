const wordnet = require('id-wordnet')
const readline = require('readline')
const fs = require('fs')
const parser = require('../parser')
const dictionary = require('../dictionary')

const version = "1.2"
const wordnetPath = wordnet[version]

const fileTypes = ['wn-ind-def.tab', 'wn-msa-all.tab']

const reader = {
    isReady: false,
    readRemaining: 2,

    init: async () => {
        return new Promise((resolve) => {
            fileTypes.forEach((fileType) => {
                const file = `${wordnetPath}/${fileType}`
                const readerInterface = readline.createInterface({
                    input: fs.createReadStream(file),
                    output: false
                })
        
                readerInterface.on('line', (line) => {
                    if (fileType === 'wn-ind-def.tab') {
                        const item = new parser.DefinitionLine(line)
                        dictionary.db.addDefinition(item)
                    } else {
                        const item = new parser.AllLine(line)
                        if (item.isGood) {
                            dictionary.db.addIndex(item)
                        }
                    }
                })
        
                readerInterface.on('close', () => {
                    reader.readRemaining -= 1
                    if (reader.readRemaining === 0) {
                        reader.isReady = true
                        dictionary.db.ready()
                        resolve()
                    }
                })

                // Ignoring close, pause, resume, SIGCONT, SIGINT, SIGTSTP
            })
        })
    }
}

module.exports = reader