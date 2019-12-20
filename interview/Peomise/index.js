class Promise {
  constructor (fn) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined

    let resolve = value => {
      if (this.state === 'pending') {
        this.value = value
        this.state = 'fullfilled'
      }
    }

    let reject = value => {
      if (this.state === 'pending') {
        this.reason = value
        this.state = 'rejected'
      }
    }
    try {
      fn (resolve, reject) 
    } catch (error) {
      reject(error)
    }
  } 

  then(onFullfilled, onRejected) {
    switch (this.state) {
      case 'fullfiled':
        onFullfilled()
        break
      case 'rejected':
        onRejected()
        break
      default:
    }
  }
}