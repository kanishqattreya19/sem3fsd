//console.log("Hello, I am Harshit Bhardwaj");

//synchronous programming
console.log("Start");

for(i=0; i<5; i=i+1){
    console.log("iteration",i)
}

console.log("end")

//asynchronous programming
sole.log("start asyncs");   

promiseHooks.resolve().then(()=>{
    console.log("miscrotask queue");
})

setTimeout(()=>{
    console.log("macrotask queue")
},2000);
