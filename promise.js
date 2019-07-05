// Promise mean do promise promoise is accepted or rejected depend on you promise you can fullfill that promise or not do that deppended on you
// i can clear it with very simple example


let promise  = new Promise((resolve,reject)=>{
  resolve("Promise is resolve")
})


promise.then(()=>{ console.log("the promise is resolve") })



// i can explain with conditions ,if you pass promise in parameters then also apply the conditions base on your requrments
// if i write a pure name isRequire it mean i pass also for checking the conditions depend on you but i pass true or false

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
      resolve("Promise 2 resolve")
    }else{
      reject("Promise 2 can reject ")
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
// --------------------------------------------------------------------------------------------------------

/* 
 so that we can dicuss the method of promise that can use to less the code so we dicuss in detail firstly we can 
 work on 'all' method is javascript.Promisein this method you can target the Multple promises in one arry then use it.
*/
Promise.all([promise1(true),promise2(true),promise3(true)]).then((msg)=>{
  console.log("Promose!!",msg)
}).catch((err)=>console.log("Err:",err))



/**
 * if we check it properly then you can check it with time 
 */

let promise1 = (isRequire)=>{
  return new Promise((resolve,reject)=>{
    //        method name , time ,message
    setTimeout(resolve,300,"Done promise 1")
  })
}

let promise2 = (isRequire) =>{
  return new Promise((resolve,reject)=>{
       //        method name , time ,message
       setTimeout(resolve,100,"Done promise 2")
  })
}

let promise3 = (isRequire) => {
  return new Promise((resolve,reject)=>{
      //        method name , time ,message
      setTimeout(resolve,100,"Done promise 3")
  })
}

Promise.all([promise1(true),promise2(true),promise3(true)]).then((msg)=>{
  console.log("Promose!!",msg)
}).catch((err)=>console.log("Err:",err))

/**
 * in the above example if you can use all cannot specify the response when the first file accure but in "race"
  cannot do the same race method can  run that response that can be run in very small bit of time so we can understand it using example
  above promise is same just check who one done first using race method
  in race all promises resolve otherwise Error show
 */
let promise1 = (isRequire)=>{
  return new Promise((resolve,reject)=>{
    //        method name , time ,message
    setTimeout(resolve,200,"Done promise 1")
  })
}

let promise2 = (isRequire) =>{
  return new Promise((resolve,reject)=>{
       //        method name , time ,message
       setTimeout(resolve,300,"Done promise 2")
  })
}

let promise3 = (isRequire) => {
  return new Promise((resolve,reject)=>{
      //        method name , time ,message
      setTimeout(resolve,100,"Done promise 3")
  })
}

 Promise.race([promise1(),promise2(),promise3()]).then((msg)=>console.log(msg)).catch((err)=>console.log("Error:",err))
















