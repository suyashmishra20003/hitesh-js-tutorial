/*
*       Javascript
todo        Synchronous
todo        Single Threaded

*       Execution Context (execute one line of code at a time)
todo        each option waits for the last one to complete before executing
todo        CALL STACK      MEMORY HEAP

*       BLOCKING CODE
todo        Blocks the flow of program (Read file Sync)

*       NON BLOCKING CODE   
todo        Does not block execution (Read file Async)


*/
const timeout =  setTimeout(()=>{
        console.log('Suyash Mishra');
},5000)

let interval ;

document.getElementById('start').addEventListener('click',()=>{
    interval  =  setInterval(()=>{
        document.body.style.backgroundColor = generateRandomHexCode()
        // document.querySelector('h1').innerHTML = 'Shikar Mishra ' + count
    },1000)
})

document.getElementById('stop').addEventListener('click', ()=>{
    document.querySelector('h1').innerHTML = 'Interval Cleared'
    clearInterval(interval)
    clearTimeout(timeout)
    console.log('Timeout Cleared !!!');
    interval = null
})


function generateRandomHexCode(){
    const red = Math.floor(Math.random() * (256 - 0 + 1)) + 0
    const green = Math.floor(Math.random() * (256 - 0 + 1)) + 0
    const blue = Math.floor(Math.random() * (256 - 0 + 1)) + 0
    const rgb = `rgb(${red},${green},${blue})`
    console.log(rgb);
    return rgb
}