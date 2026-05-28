const genderBtn = document.querySelectorAll(".gender-btn");
const bmiInputGroup = document.querySelectorAll("input[name='bmi-input']");
const userHeight = document.getElementById("input-height");
const userAge = document.getElementById("input-age");
const userWeight = document.getElementById("input-weight");
const bmiResult = document.getElementById("bmi-result");

function errorMessage(elem, message){
    let errorMsg = document.createElement("span");
    errorMsg.classList.add("error-msg");
    errorMsg.style.color = "red";
    errorMsg.textContent = message;
    console.log(errorMsg);
    elem.nextElementSibling(errorMsg);
}


bmiInputGroup.forEach(element => {
   element.addEventListener("input", (e)=>{
        // if(e.target.id == "input-height"){
        //     if(e.target.value < 50){
        //         e.target.closest(".input-error").textContent = "hi";
        //        document.querySelector(".input-error").textContent = "Height should be greater than 50cm"
        //     }else if(e.target.value > 350){
        //         "Height should be less than 350 cm"
        //     }
        // }
        
        if(userWeight.value > 200){
            errorMessage(element, "Weight should not be more than 200 kgs");
            // let errorMsg = element.closest(".input-error");
            // errorMsg.style.color = "red";
            // errorMsg.textContent = "Weight should not be more than 200 kgs"
            // console.log(errorMsg);
        }


        if(userWeight.value && userAge.value && userHeight.value){
            // 26.81
            // 84/Math.pow(1.77, 2)

            //Convert Height cm to meter
            let newHeight = userHeight.value/100;
            let newWeight = userWeight.value;
            let result = newWeight / Math.pow(newHeight , 2);
            bmiResult.textContent = (result % 100).toFixed(2);
        }
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

// Height should be greater than 50cm
// Height should be less than 350 cm

// https://www.axismaxlife.com/insurance-calculators/bmi-calculator