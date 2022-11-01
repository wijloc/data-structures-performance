const LoggerDecorator = require('./decorator.js')

class InsertEnd extends LoggerDecorator {
    constructor(numberOfItems) {
        super()
        this.NUMBER_OF_ITEMS = numberOfItems
    }

    operation() {
        const items = []
        for (let i = 0; i < this.NUMBER_OF_ITEMS; i++) {
            items.push(i)
        }
    }

}

class InsertStart extends LoggerDecorator {
    constructor(numberOfItems) {
        super()
        this.NUMBER_OF_ITEMS = numberOfItems
    }

    operation() {
        const items = []
        for (let i = 0; i < this.NUMBER_OF_ITEMS; i++) {
            if (items.length > 0) {
                items.push(items[items.length - 1])
                for (let j = items.length - 1; j > 0; j--) {
                    items[j] = items[j-1]
                }
                items[0] = i
            } else {
                items.push(i)
            }
        }
    }

}

class RemoveEnd extends LoggerDecorator {
    constructor(numberOfItems) {
        super()
        this.NUMBER_OF_ITEMS = numberOfItems
    }

    operation() {
        const items = Array.from(Array(this.NUMBER_OF_ITEMS))
        for (let i = 0; i < this.NUMBER_OF_ITEMS; i++) {
            items.pop()
        }
    }

}

class RemoveStart extends LoggerDecorator {
    constructor(numberOfItems) {
        super()
        this.NUMBER_OF_ITEMS = numberOfItems
    }

    operation() {
        const items = Array.from(Array(this.NUMBER_OF_ITEMS))
        for (let i = 0; i < this.NUMBER_OF_ITEMS; i++) {
            items.shift()
        }
    }

}

const numberOfItems = 300000//100000000

const insertEnd = (new LoggerDecorator(new InsertEnd(numberOfItems))).operation()

const removeEnd = (new LoggerDecorator(new RemoveEnd(numberOfItems))).operation()

const removeStart = (new LoggerDecorator(new RemoveStart(numberOfItems))).operation()

// const insertStart = (new LoggerDecorator(new InsertStart(numberOfItems))).operation()
