
gsap.from(".bmi-wrapper", {
    duration: 1.5,
    opacity: 0,
    scale: 0.95,
    ease: "elastic.out(1, 0.75)",
});

document.querySelector("button.btn-primary").addEventListener("mouseenter", (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.1,
        boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.5)",
    });
});

gsap.registerPlugin(ScrollToPlugin);


document.getElementById("bmi-form").addEventListener("submit", (e) => {
    e.preventDefault();
    calculateBMI();
    animateResults();


});

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const unit = document.getElementById("weight-unit").value;
    let bmi;

    if (unit === "kg") {
        bmi = weight / (height * height);
    } else {
        bmi = (weight / (height * height)) * 703;
    }

    //progress bar
     const progressBar = document.getElementById("bmiProgress");

     let progressValue = 0;
     let progressClass = '';
 
     if (bmi < 18.5) {
         progressValue = 25;
         progressClass = "underweight";
     } else if (bmi >= 18.5 && bmi < 24.9) {
         progressValue = 50;
         progressClass = "normal";
     } else if (bmi >= 25 && bmi < 29.9) {
         progressValue = 75;
         progressClass = "overweight";
     } else {
         progressValue = 100;
         progressClass = "obese";
     }
 
     gsap.to(progressBar, {
         duration: 1,
         value: progressValue,
         ease: "power2.out",
     });
 
     progressBar.className = progressClass;
   

    document.getElementById("display-result").innerText = bmi.toFixed(1);
    displayBMIMeaning(bmi);
    document.getElementById("result-section").style.display = "block";
    document.getElementById("routine-section").style.display = "block";
    document.getElementById("bmimeans-section").style.display = "block";
}

function displayBMIMeaning(bmi) {
    let meaning = "";
    let routine = "";
    let bmimeans = "";

    if (bmi < 16) {
        meaning = "Severely Underweight";
        bmimeans = "If you're underweight, it might indicate that you're not receiving enough essential nutrients, vitamins, and minerals. This can lead to issues like poor skin, hair, or dental health, and you may feel more tired than usual. For women, it can cause irregular periods and increase the risk of weak bones (osteoporosis). It’s important to talk to a doctor to understand the cause and learn how to gain weight in a healthy way. "
        routine = "Focus on strength training to build muscle mass. Include light weightlifting, bodyweight exercises like push-ups and squats, and short cardio sessions for stamina. Aim for 30 minutes, 3-4 times a week. Ensure you're eating enough to support muscle gain.";
    } else if (bmi >= 16 && bmi < 18.5) {
        meaning = "Underweight";
        bmimeans = "If you're underweight, it might indicate that you're not receiving enough essential nutrients, vitamins, and minerals. This can lead to issues like poor skin, hair, or dental health, and you may feel more tired than usual. For women, it can cause irregular periods and increase the risk of weak bones (osteoporosis). It’s important to talk to a doctor to understand the cause and learn how to gain weight in a healthy way."
        routine = "Focus on strength training to build muscle mass. Include light weightlifting, bodyweight exercises like push-ups and squats, and short cardio sessions for stamina. Aim for 30 minutes, 3-4 times a week. Ensure you're eating enough to support muscle gain.";
    } else if (bmi >= 18.5 && bmi < 25) {
        meaning = "Healthy weight";
        bmimeans = "Having a BMI in the healthy range means your weight is appropriate for your height. However, BMI doesn’t give a full picture of your body composition – such as how much muscle or fat you have. It’s important to monitor your diet, exercise regularly, and stay aware of your overall health to maintain a healthy balance."
        routine = "Maintain a balance between cardio (walking, running, cycling) and strength training (bodyweight or weights) for overall fitness. Aim for 150 minutes of moderate exercise per week, plus strength exercises 2 days a week to keep muscles strong.";
    } else if (bmi >= 25 && bmi < 30) {
        meaning = "Overweight";
        bmimeans = "A BMI in the overweight range may put you at a higher risk for conditions like type 2 diabetes, heart disease, gallstones, and some cancers. It’s a good idea to consult a healthcare professional to explore ways to manage your weight and lower your risk."
        routine = "Start with low-impact cardio exercises like walking, swimming, or cycling. Gradually include strength training to build muscle and boost metabolism. Aim for 30 minutes of activity, 5 days a week. Slowly increase intensity as fitness improves.";
    } else if (bmi >= 30 && bmi < 35) {
        meaning = "Obese Class I";
        bmimeans = "If your BMI is between 30 and 35, this indicates Class 1 obesity, and between 35 and 40 is Class 2. Being in this range increases the likelihood of health complications. It’s advisable to speak with a doctor to create a plan to lower your BMI through healthy weight loss."
        routine = "Begin with gentle exercises such as brisk walking, water aerobics, or stationary cycling. Gradually add resistance training with light weights to increase strength. Start with 20-30 minutes of activity 5 times a week, increasing as endurance grows.";
    } else if (bmi >= 35 && bmi < 40) {
        meaning = "Obese Class II";
        bmimeans = "If your BMI is between 30 and 35, this indicates Class 1 obesity, and between 35 and 40 is Class 2. Being in this range increases the likelihood of health complications. It’s advisable to speak with a doctor to create a plan to lower your BMI through healthy weight loss."
        routine = "Begin with gentle exercises such as brisk walking, water aerobics, or stationary cycling. Gradually add resistance training with light weights to increase strength. Start with 20-30 minutes of activity 5 times a week, increasing as endurance grows.";
    } else {
        meaning = "Obese Class III";
        bmimeans = "A BMI of 40 or above falls into the Class 3 (severe) obesity category. This can significantly impact A BMI of 40 or above falls into the Class 3 (severe) obesity category. This can significantly impact to get professional medical advice to safely reduce your BMI and improve your health."
        routine = "Opt for low-impact activities like water exercises or chair workouts to avoid strain on joints. Focus on gradually increasing activity levels. Begin with 10-20 minutes of exercise daily, progressing as your stamina builds.";
    }

    document.getElementById("bmi-meaning").innerText = meaning;
    document.getElementById("routine-description").innerText = routine;
    document.getElementById("bmi-means").innerText = bmimeans;
}   


const inputFields = document.querySelectorAll("#weight, #height");
inputFields.forEach(input => {
    input.addEventListener("focus", () => {
        gsap.to(input, { duration: 0.2, scale: 1.05, boxShadow: "0 0 10px rgba(0, 123, 255, 0.8)" });
    });
    input.addEventListener("blur", () => {
        gsap.to(input, { duration: 0.2, scale: 1, boxShadow: "none" });
    });
});

document.querySelector(".scroll-btn").addEventListener("click", (e) => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#result-section", offsetY: 70 }, ease: "power2.out" });
});


gsap.from("#result-section", {
    duration: 1.5,
    opacity: 0,
    y: 50, 
    ease: "power4.out",
});



