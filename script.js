let number = 0
let cron 
let p = document.querySelector(".numero")
function start(){
    cron = setInterval(function(){
        number++
        p.innerHTML = number
    }, 1)
}
function stop(){
    clearInterval(cron)
}