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

function normalTimer(){
    const currentDate = new Date();
    const h = (currentDate.getHours() % 12) < 10 ? `0${currentDate.getHours() % 12}` : currentDate.getHours() % 12 ;
    const m = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}`: currentDate.getMinutes();
    const s = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    let currentTime = `${h}:${m}:${s}`;
    clock.textContent = currentTime;
}

function railwayTimer(){
    const currentDate = new Date();
    let h = currentDate.getHours() > 10 ? currentDate.getHours() : `0${currentDate.getHours()}`;
    let m = currentDate.getMinutes() > 10 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`;
    let s = currentDate.getSeconds() > 10 ? currentDate.getSeconds() : `0${currentDate.getSeconds()}`;
    let currentTime = `${h}:${m}:${s}`;
    dateText.textContent = currentDate.toDateString();
    clock.textContent = currentTime;
}


let onloadTimer = setInterval(()=>{
    railwayTimer();
}, 1000);

btn.forEach((element) =>{
    element.addEventListener("click", ()=>{

        clearInterval(onloadTimer);

        btn.forEach(item => {
            item.classList.remove("active");
        });

        element.classList.add("active");

        let railwayTimerInit = setInterval(() => {
            railwayTimer();
        }, 1000);

        let normalTimerInit = setInterval(() => {
            normalTimer();
        }, 1000);

        if(element.innerHTML == "12h"){
            console.log("12")
            clearInterval(railwayTimerInit);
        }else{
            console.log("24")
           clearInterval(normalTimerInit);
        }

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
getElementsByClassName -  html collection
querySelectorAll - NodeList

contains() - class
includes() - array

*/