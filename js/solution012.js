// Calculate BMI 
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// used if/else statement but could be done using multiple ternary operators too I believe, will refactor one day :)
function bmi(weight, height) {
    i = (weight/(height ** 2))
    if (i <= 18.5){
      return("Underweight")
    }else if (i <= 25){
      return("Normal")
    }else if (i <= 30){
      return("Overweight")
    }else if (i > 30){
      return("Obese")
    }
  }