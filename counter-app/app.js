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
        str.padStart("4", "0");
        counter.innerHTML = str.padStart("4", "0");
        console.log("if");
        console.log("count", count);
    }else{
        counter.innerHTML = "0000";
        count = 0;
        console.log("else");
        console.log("count", count);
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

    if(modalPopup.getBoundingClientRect().height){
        document.addEventListener("click", (e)=>{
            console.log(e.target.className);
            if(e.target.className !== "modal-card"){
                console.log("clicked")
            }
        })
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
})



/*
let dhina = "5";
dhina.padStart("4", "0");
=> 0005

session.clear() -> remove everythings use sesstion.removeitem

*/