
function calculate(){
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height ** 2);
    let result = document.getElementById('result');
    result.innerText = bmi;
}
