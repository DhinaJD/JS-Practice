const increment_btn = document.getElementById("increment-btn");
const decrement_btn = document.getElementById("decrement-btn");
let resetBtn = document.getElementById("reset-btn");
const counter = document.getElementById("count");
var count = 0;
const modalPopup = document.querySelector(".modal-overlay");
const popupCancelBtn = document.getElementById("popup-cancel");
const popupProceedBtn = document.getElementById("popup-proceed");


increment_btn.addEventListener("click", ()=>{
    count++;
    sessionStorage.setItem("count_increment", count);
});

 counter.innerHTML = sessionStorage.getItem("count_increment");

decrement_btn.addEventListener("click", ()=>{
    if(count <= 0){
        return;
    }

    count--;
    counter.innerHTML = count;
});
resetBtn.addEventListener("click", ()=>{
    modalPopup.style.display = "flex";
});

popupProceedBtn.addEventListener("click", ()=>{
    count = 0;
    counter.innerHTML = count;
    modalPopup.style.display = "none";
});

popupCancelBtn.addEventListener("click", ()=>{
    modalPopup.style.display = "none";
});