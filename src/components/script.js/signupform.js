
let prevbtn=document.getElementById("took-previous-step");
let nextbtn=document.getElementById("took-next-step");
    let currentStep = 1;
    nextbtn.addEventListener("click",()=>{
        nextStep();
    });
    prevbtn.addEventListener('click', ()=> {
        prevStep();
    })

    function showStep(step) {
        const steps = document.querySelectorAll('.step');
        steps.forEach(element => {
            element.classList.remove('active')
        });
        document.querySelector(`.step-${step}`).classList.add('active');
    } 
     
     function nextStep(step) {
        currentStep ++
        showStep(currentStep);
     }

     function prevStep(step) {
        currentStep --;
        console.log(currentStep);
        showStep(currentStep);
     }
    document.addEventListener ("DOM contentLoaded",() =>{
        showStep(currentStep);
    });
