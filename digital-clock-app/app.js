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

function timeUpdate(){
    const currentDate = new Date();
    let currentTime = `${currentDate.getHours()}: ${currentDate.getMinutes()}: ${currentDate.getSeconds()}`

    dateText.textContent = currentDate.toDateString();
    clock.textContent = currentTime;
}

setInterval(() => {
    timeUpdate();
}, 1000);

btn.forEach((element) =>{
    element.addEventListener("click", ()=>{
        btn.forEach(item => {
            item.classList.remove("active");
        });

        element.classList.add("active");

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