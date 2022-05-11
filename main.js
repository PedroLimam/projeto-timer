function seconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
let timer;
let segundos = 0
const relogio = document.querySelector(".relogio")
const pausar = document.querySelector(".pausar")
const containerTimer = document.querySelector(".container-timer")

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = seconds(segundos)
    }, 1000);
    
}

document.addEventListener("click", function(e){
    let elClick = e.target

    if(elClick.classList.contains('iniciar')){
        clearInterval(timer)
        iniciaRelogio()
        pausar.classList.remove('pausado')
        containerTimer.style.animationName = "none"
    }

    if( elClick.classList.contains('pausar')){
        clearInterval(timer)
        pausar.classList.add('pausado')
        containerTimer.style.animationName = "alert"
    } 

    if(elClick.classList.contains('zerar')){
        clearInterval(timer)
        relogio.innerHTML = "00:00:00"
        segundos = 0
        pausar.classList.remove('pausado')
        containerTimer.style.animationName = "none"
    }
})
