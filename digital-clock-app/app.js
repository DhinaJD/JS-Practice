/*
Time Calculation

let minute = 1000 * 60; = 1min
let hour = minute * 60; = 1hours
let day = hours * 24; = 1Day
let year = day * 365 = 1Year
*/

const clock = document.getElementById("clock");
const dateText = document.getElementById("date");
const btn = document.querySelectorAll(".switch-btn");
// const defaultTimerBtn = document.getElementById("defaultTimer-btn");
// const railwayTimerBtn = document.getElementById("railwaytimer-btn");
let onloadTimer;
let normalTimerInit;

function timerInit(timeFormat){

    clearInterval(normalTimerInit);
    clearInterval(onloadTimer);

    if(timeFormat == "12h"){

        normalTimerInit = setInterval(()=>{
            console.log("12hr clock Running");
            const currentDate = new Date();
            const h = (currentDate.getHours() % 12) < 10 ? `0${currentDate.getHours() % 12}` : currentDate.getHours() % 12 ;
            const m = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}`: currentDate.getMinutes();
            const s = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
            let currentTime = `${h}:${m}:${s}`;
            clock.textContent = currentTime;
        }, 1000);

        // console.log("12h cliked");

    }else if(timeFormat == "24h"){

        onloadTimer = setInterval(()=>{
            console.log("24hr clock Running");
            const currentDate = new Date();
            let h = currentDate.getHours() > 10 ? currentDate.getHours() : `0${currentDate.getHours()}`;
            let m = currentDate.getMinutes() > 10 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`;
            let s = currentDate.getSeconds() > 10 ? currentDate.getSeconds() : `0${currentDate.getSeconds()}`;
            let currentTime = `${h}:${m}:${s}`;
            dateText.textContent = currentDate.toDateString();
            clock.textContent = currentTime;
        }, 1000)
        // console.log("24h clicked");

    }
}

let hourFormat = document.querySelector(".switch-btn.active").getAttribute("data-time");
timerInit(hourFormat);

//on load clock ticking
// railwayTimer();

// defaultTimerBtn.addEventListener("click", ()=>{
//     clearInterval(onloadTimer);
//     normalTimer();
// });

// railwayTimerBtn.addEventListener("click", ()=>{
//     clearInterval(normalTimerInit);
//     railwayTimer();
// });

btn.forEach((element) =>{
    element.addEventListener("click", ()=>{

        btn.forEach(item => {
            item.classList.remove("active");
        });

        element.classList.add("active");

        let hourFormat = element.getAttribute("data-time");
        timerInit(hourFormat);

        // tried setintevel methord inside loop but not working

        // let railwayTimerInit = setInterval(() => {
        //     railwayTimer();
        // }, 1000);

        // let normalTimerInit = setInterval(() => {
        //     normalTimer();
        // }, 1000);

        // if(element.innerHTML == "12h"){
        //     console.log("12")
        //     clearInterval(railwayTimerInit);
        // }else{
        //     console.log("24")
        //    clearInterval(normalTimerInit);
        // }

        //clicking same active button
        // if(element.classList.contains("active")){
        //     btn.forEach(item =>{
        //         item.classList.add("active");
        //     });
        //     element.classList.remove("active");
        // }
    })
});



/*

Nodelist vs htmlcollection 
getElementsByClassName - html collection
querySelectorAll - NodeList

contains() - class
includes() - array

!js is singlethreaded - onecall stack , one execution at time

!callstack - Track of function calls

!const receipt = orderFood(); 
! foos is already made , receit is just a ticket number same as
!let  timer = setInterval()
! it will be automaticaly runs (not inside function)

*/