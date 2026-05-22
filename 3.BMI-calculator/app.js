const genderBtn = document.querySelectorAll(".gender-btn");
const bmiInputGroup = document.querySelectorAll("input[name='bmi-input']");
const userHeight = document.getElementById("input-height");
const userAge = document.getElementById("input-age");
const userWeight = document.getElementById("input-weight");
const bmiResult = document.getElementById("bmi-result");


bmiInputGroup.forEach(element => {
   element.addEventListener("input", (e)=>{
        let elError = e.target.closest(".input-error");

        console.log(elError)

        // if(e.target.id == "input-height"){
        //     if(e.target.value < 50){
        //         e.target.closest(".input-error").textContent = "hi";
        //        document.querySelector(".input-error").textContent = "Height should be greater than 50cm"
        //     }else if(e.target.value > 350){
        //         "Height should be less than 350 cm"
        //     }
        // }

        if(userWeight.value && userAge.value && userHeight.value){
            //Convert Height cm to meter
            let newHeight = userHeight.value/100;
            let newWeight = userWeight.value = userWeight.value.toFixed(2);
            console.log(newHeight.toFixed(2));

            let result = (newWeight * Math.pow(newHeight.toFixed(2) , 2));
            bmiResult.textContent = result;
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