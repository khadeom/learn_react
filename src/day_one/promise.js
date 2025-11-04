//Set time cout


// setTimeout(()=>{
//     console.log('This is late')
// }, 500)

// console.log('End')

// promise
// const promise = new Promise((resolve) => {
//     setTimeout(() => resolve('ava'), 2000)
// })

// promise.then(result => console.log("this is",result))


async function runTask(){
    console.log('Start')
    promise = new Promise(resolve=> setTimeout(()=>resolve(`Type ${typeof resolve}`), 2000))


    promise.then(result => console.log("this is",result))
    // await new Promise(resolve=> setTimeout(resolve, 2000))
    console.log("Done")
}
runTask()