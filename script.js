const hrElem = document.querySelector("#hr");
const minElem = document.querySelector("#min");
const secElem = document.querySelector("#sec");
const msElem = document.querySelector("#ms");
const resetBtn = document.querySelector(".reset-btn");
const stopBtn = document.querySelector(".stop-btn");
const startBtn = document.querySelector(".start-btn");
const modeBtn = document.querySelector(".dark-light");
const body = document.body;

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = false;

startBtn.addEventListener('click', () => {
    timer = true
    let TimerId = setInterval(() => {
        if (timer == true) {
            msElem.textContent = ms = ms + 1
            if (ms == 60) {
                ms = 0;
                msElem.textContent = ms
                secElem.textContent = sec = sec + 1;
            }
            if (sec == 60) {
                sec = 0;
                secElem.textContent = sec;
                minElem.textContent = min = min + 1;
            }
            if (min == 60) {
                min = 0;
                minElem.textContent = min;
                hrElem.textContent = hr = hr + 1
            }

            if (ms < 10) {
                msElem.textContent = "0" + ms
            }
            if (sec < 10) {
                secElem.textContent = "0" + sec
            }
            if (min < 10) {
                minElem.textContent = "0" + min
            }
            if (hr < 10) {
                hrElem.textContent = "0" + hr
            }

            stopBtn.addEventListener('click', () => {
                clearInterval(TimerId)
            })
        }
    }, 20);

    resetBtn.addEventListener('click', () => {
        timer = false;
        hrElem.textContent = "00"
        minElem.textContent = "00"
        secElem.textContent = "00"
        msElem.textContent = "00"

        let arr = [0, 0, 0, 00];
        hr = arr[0];
        min = arr[1];
        sec = arr[2];
        ms = arr[3]
    })

});

modeBtn.addEventListener('click',((e)=>{
    if(e.detail==2){
        body.style.backgroundColor = "#fff";
        modeBtn.textContent = "DARK MODE"
        body.style.transition= "500ms" 
        hrElem.style.color = "black";
        minElem.style.color = "black"
        secElem.style.color = "black"
        msElem.style.color = "black"
    }
    if(e.detail==1){
        body.style.backgroundColor = "rgb(26, 25, 32)";
        modeBtn.textContent = "LIGHT MODE"
        body.style.transition= "500ms"
        hrElem.style.color = "yellow";
        minElem.style.color = "yellow"
        secElem.style.color = "yellow"
        msElem.style.color = "yellow"
    }
    console.log(e);
}))

