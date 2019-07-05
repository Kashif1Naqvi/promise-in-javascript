// Promise mean do promise promoise is accepted ore rejected dpend on you promise you can do that promise or not do that deppended on you
// i can clear it with very simple example


let promise  = new Promise((resolve,reject)=>{
  resolve("Promise is resolve")
})


promise.then(()=>{ console.log("the promise is resolve") })



// i can explain with conditions

let promise = new Promise((res,rej)=>{
  let isRequire = true
  if(isRequire){
    res("Promise is Resolve!!!")
  }else{
    rej("promise cannot not be resolve!!!")
  }
})


promise.then((msg)=>console.log("Resolve",msg)).catch((err)=>console.log("error",err))


// so now we can dicuss the dependency is promices

let promise1 = new Promise((resolve,reject)=>{
  resolve("Promise1 is resolve")
})

let promise2 = new Promise((resolve,reject)=>{
  resolve("promise 2 is resolve")
})

let promise3 = new Promise((resolve,reject)=>{
  resolve("Promise 3 is resolve")
})

promise1().then((msg)=>{ 
   console.log("Promise1  is !!!",msg)
   return promise2() 
}).then((msg)=>{
  console.log("Promise 2",msg)
  return promise3()
}).catch((err)=>console.log("err!!",err))

// all dependency

let promise1 = (isRequire)=>{
  return new Promise((resolve,reject)=>{
    if(isRequire){
      resolve("Promise 1 is Resolved")
    }else{
      reject("Promise 1 can reject")
    }
  })
}

let promise2 = (isRequire) =>{
  return new Promise((resolve,reject)=>{
    if(isRequire){
      resolve("Promise 2 cannot resolve")
    }else{
      reject("Promise 2 canreject ")
    }
  })
}

let promise3 = (isRequire) => {
  return new Promise((resolve,reject)=>{
    if(isRequire){
      resolve("Promise 3 is Reolved ")
    }else{
      reject("Promise 3 is Reject")
    }
  })
}

promise1().then((msg)=>{
  console.log("Promise 1!!",msg)
  return promise2()
}).then((msg)=>{
  console.log("promise 2!!!",msg)
  return promise()
}).then((msg)=>{
  console.log("Promise 3!!! ",msg)
}).then((m)=>console.log("promise 3 is resolve",m))

.catch(err=>console.log("Err:",err))