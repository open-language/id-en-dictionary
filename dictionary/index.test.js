const reader = require('../reader')
const dictionary = require('./index')

describe("Test the dictionary", () => {

    beforeAll(async (done) => {
        await dictionary.initEnDictionary()
        reader.init()
        const retrier = () => {
            setTimeout(() => {
                if(reader.isReady) {
                    done()
                } else {
                    retrier()
                }
            }, 100)
        }
        retrier()
    })

    test('do something', () => {
        
    })
})

