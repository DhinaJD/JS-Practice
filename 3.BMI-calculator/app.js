const genderBtn = document.querySelectorAll(".gender-btn");
const bmiInput = document.querySelectorAll("input[name='bmi-input']");



bmiInput.forEach(element => {
   element.addEventListener("ch", ()=>{

   });
});

genderBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        genderBtn.forEach(btn => {
            btn.classList.remove("active");
        });

        element.classList.add("active");
    });
});