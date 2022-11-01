class LoggerDecorator {
  component = undefined
  repeat = 1

  constructor (component) {
    this.component = component
  }

  operation() {
    const start = new Date().getTime()
    const executionTime = () => new Date().getTime() - start

    try {
      for (let count = 1; count <= this.repeat; count++) {
        // console.log(`repeating ${count}/${this.repeat}`)
        this.component.operation()
      }
      console.log('finished', this.component.constructor.name, { executionTime: executionTime() / this.repeat })
    } catch (error) {
      console.log('crashed', { error: error.message, executionTime: executionTime() })
      throw error
    }
    

  }
}


// const loggerDecorator = (fn, fullMessage) => {

//   const fnName = fn.name || 'anonymous function'

//   const logged = (...args) => {
//     const extraFields = { function: fnName, args: JSON.stringify(args), fullMessage }
//     console.log(`calling ${fnName}`, extraFields)

//     const start = new Date().getTime()
//     const executionTime = () => new Date().getTime() - start

//     try {
//       const result = fn(...args)
//       console.log(`${fnName} finished`, { ...extraFields, result: JSON.stringify(result), executionTime: executionTime() })
//       return result
//     } catch (error) {
//       console.log(`${fnName} crashed`, { ...extraFields, error: error.message, executionTime: executionTime() })
//       throw error
//     }
//   }

//   return logged
// }

module.exports = LoggerDecorator