function calculatorBMI(){
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.querySelector(".result");


    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if(isNaN(height) || isNaN(weight)){
        resultDiv.innerHTML = "Please enter valid height and weight.";
        return;

    }
    var bmi = weight/((height/100) ** 2);
    var category = "";

    if(bmi <18.5){
        category = "underweight";
    }else if(bmi <25){
        category = "Normal Weight";
    }else if(bmi <30){
        category = "Overweight";
    }else{
        category = "obsses";
    }

    resultDiv.innerHTML = "Yout BMI is " +bmi.toFixed(2) + "(" +category+")";
}

