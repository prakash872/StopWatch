const display = document.getElementById("display")

let timer = null
let starttime = 0
let elaspedtime =0
let isRunning = false

function start(){
   if(!isRunning){
    starttime = Date.now() - elaspedtime
    timer = setInterval(update,10)
    isRunning = true
   }
}
function update(){
    const currenttime = Date.now()
    elaspedtime = currenttime - starttime
    let hours = Math.floor(elaspedtime / (1000 * 60 * 60))
    let minitues = Math.floor(elaspedtime / (1000 * 60) % 60)
    let seconds = Math.floor(elaspedtime / 1000 % 60)
    let milliseconds = Math.floor(elaspedtime % 1000 / 10)

    display.textContent = `${hours}:${minitues}:${seconds}:${milliseconds}`
}