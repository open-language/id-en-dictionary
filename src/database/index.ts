import Reader from '../reader'
import Index from '../parser/interface.index';
import Definition from '../parser/interface.definition';

class Database {

    isReady: boolean
    isProcessing: boolean
    index: Index[]
    indexLemmaIndex: Map<string, Index[]>
    indexOffsetIndex: Map<number, Index[]>
    definitions: Definition[]
    path: string

    constructor(path: string) {
        this.isReady = false
        this.isProcessing = false
        this.index = []
        this.indexLemmaIndex = new Map()
        this.indexOffsetIndex = new Map()
        this.definitions = []
        this.path = path
    }

    async init() {
        if (!this.isReady || !this.isProcessing) {
            const reader = new Reader(this)
            this.isProcessing = true
            await reader.init()
        }
    }

    markReady() {
        this.isReady = true
        this.isProcessing = false
    }

    getSize() {
        return {
            count: this.index.length + this.definitions.length,
            indexes: Object.keys(this.indexOffsetIndex).length + Object.keys(this.indexLemmaIndex).length
        }
    }

    addIndex(item: Index) {
        this.index.push(item)

        let current = this.indexLemmaIndex.get(item.lemma)
        let latest: Index[] = []
        if (current != undefined) {
            latest = current   
        }
        latest.push(item)
        this.indexLemmaIndex.set(item.lemma, latest)

        current = this.indexOffsetIndex.get(item.offset)
        latest = []
        if (current != undefined) {
            latest = current   
        }
        latest.push(item)
        this.indexOffsetIndex.set(item.offset, latest)
    }

    static copyIndex(item: Index) {
        return {
            offset: item.offset,
            pos: item.pos,
            language: item.language,
            lemma: item.lemma,
            isGood: true
        }
    }

    indexLemmaSearch(query: string[]) {
        const output = new Map<string, Index[]>()
        query.forEach((lemma) => {
            const lemmaObjets : Index[] = []
            const lemmaIndexResults = this.indexLemmaIndex.get(lemma)
            if (lemmaIndexResults !== undefined) {
                this.indexLemmaIndex.get(lemma)!.forEach((item) => {
                    lemmaObjets.push(Database.copyIndex(item))
                })    
            }
            output.set(lemma, lemmaObjets)
        })
        return output
    }

    indexOffsetSearch(query: number[]) {
        const output = new Map<number, Index[]>()
        query.forEach((offset) => {
            const offsetObjects: Index[] = []
            this.indexOffsetIndex.get(offset)!.forEach((item) => {
                offsetObjects.push(Database.copyIndex(item))
            })
            output.set(offset, offsetObjects)
        })
        return output
    }

    addDefinition(data: Definition) {
        this.definitions.push(data)
    }

}

export default Database