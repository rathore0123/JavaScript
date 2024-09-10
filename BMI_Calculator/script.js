const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    console.log(height,weight)
    if(height == ' ' || height <=0 || isNaN(height)){
        alert("Enter a Valid Height in CM")
    }else if(weight == ' ' || weight <=0 || isNaN(weight)){
        alert("Enter a Valid Weight in KG")
    }else{
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        alert(`Your BMI is : ${BMI}`)
    }
})