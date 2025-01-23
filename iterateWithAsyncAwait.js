// async function iterateWithAsyncAwait (values) {
//     for (const value of values) {
//         await new Promise((resolve)=>
//             setTimeout(resolve,3000)
//         )   
//         console.log(value)

//     }
// }

// iterateWithAsyncAwait([3,4,5,6])

// task 2

// async function awaitCall () {
//     try {
//         const response = await new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve({data:{name:"unkown", alive:true}})
//             },2000)
//         })
//         console.log('data recieved',response.data)
//     } catch (error) {
//         console.log('error',error.message)
        
//     }
// }
// awaitCall()

//task 3
async function awaitCall () {
    try {
        const response = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({data:{name:"unkown", alive:true}})
                reject(new Error('error at fetching data'))
            },2000)
        })
        console.log('data recieved',response.data)
    } catch (error) {
        console.log('error',error.message)
        
    }
}
awaitCall()

