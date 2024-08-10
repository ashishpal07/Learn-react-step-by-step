const dummyApi = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

const promiseArray = [dummyApi(1000), dummyApi(5000), dummyApi(10000)];

const promisePolyFill = (promiseArray) => {
  return new Promise((resolve, reject) => {
    const output = []
    promiseArray.map((promise, index) => {
      promise.then((res) => {
        output[index] = res
        if (index === promiseArray.length-1) {
          resolve(output)
        }
      }).catch ((err) => {
        reject(err)
      })
    })
  })
}

promisePolyFill(promiseArray).then((op) => {
 console.log(op)
}).catch((err) => {
  console.log(err)
})