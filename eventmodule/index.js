// events module

const EventEmitter = require('events');

// Example 1- Registering for the event to be fired only one time using once.
// Example2-Create an event emitter instance and registeracouple of callbacks
// Example 3- Registering for the event with callback parameters

const event = new EventEmitter();

// event defination exampl 1
event.on('logMyName',()=>{ 
    console.log("your name is divayraj");
})             

// example 2
event.on('logMyName',()=>{ 
    console.log("your name is sinh");
})                                           
event.on('logMyName',()=>{ 
    console.log("your name is rana");
})                                           
    
event.emit('logMyName'); // event fire

//example 3
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and message is ${msg}`)
})

event.emit("checkPage",200,"ok")  
