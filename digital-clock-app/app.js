const clock = document.getElementById("clock");
const date = document.getElementById("clock");
const btn = document.querySelectorAll(".switch-btn");

btn.forEach((element) =>{
    element.addEventListener("click", ()=>{

        

        btn.forEach(item => {
            item.classList.remove("active");
        });

        element.classList.add("active");

        //clicking same active button
        if(element.classList.contains("active")){
            btn.forEach(item =>{
                item.classList.add("active");
            });
            element.classList.remove("active");
        }
    })
});


/*
Nodelist vs htmlcollection 
getElementsByClassName -  html collection
querySelectorAll - NodeList

contains() - class
includes() - array

*/