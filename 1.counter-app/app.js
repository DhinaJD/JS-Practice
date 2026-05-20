const increment_btn = document.getElementById("increment-btn");
const decrement_btn = document.getElementById("decrement-btn");
let resetBtn = document.getElementById("reset-btn");
const counter = document.getElementById("count");
let count = 0;
const modalPopup = document.querySelector(".modal-overlay");
const popupCancelBtn = document.getElementById("popup-cancel");
const popupProceedBtn = document.getElementById("popup-proceed");

function updateCounterUI(){
   if(sessionStorage.getItem("count_increment")){
        let str = String(sessionStorage.getItem("count_increment"));
        count = str;
        counter.innerHTML = str.padStart("4", "0");
    }else{
        counter.innerHTML = "0000";
        count = 0;
    }
}

function updateCount(newValue){
    count = newValue;
    sessionStorage.setItem("count_increment", count);
    updateCounterUI();
}

increment_btn.addEventListener("click", ()=>{
    count++;
    updateCount(count);
});

decrement_btn.addEventListener("click", ()=>{
    if(count <= 0){
        return;
    }
    count--;
    updateCount(count);
});

resetBtn.addEventListener("click", ()=>{
    modalPopup.style.display = "flex";
});

document.addEventListener("click", (e)=>{
    if(modalPopup.getBoundingClientRect().height){
        if(e.target.className == "modal-overlay"){
            modalPopup.style.display = "none";
        }
    }
});

document.addEventListener("keydown", (e)=>{
    if(modalPopup.getBoundingClientRect().height){
        if(e.keyCode == "27"){
            console.log("user clicked excape");
            modalPopup.style.display = "none";
        }
    }
});

popupProceedBtn.addEventListener("click", ()=>{
    sessionStorage.removeItem("count_increment");
    counter.innerHTML = "0000";
    updateCounterUI();
    modalPopup.style.display = "none";
});

popupCancelBtn.addEventListener("click", ()=>{
    modalPopup.style.display = "none";
});

document.addEventListener("DOMContentLoaded", ()=>{
    updateCounterUI();
});


/*
let dhina = "5";
dhina.padStart("4", "0");
keypress - deprecared
use keydown - for all keys(esc, tab, shift)

getBoudningClientRect() - elemeent width and heihgt get
=> 0005

session.clear() -> remove everythings use sesstion.removeitem

*/