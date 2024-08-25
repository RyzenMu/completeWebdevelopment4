function calculate(){
    let result = document.getElementById('result');
    result1 = result.innerText;
    let today = Date.now();
    result1 = new Date(today);
    console.log(result1);
    result.innerText = result1;
    console.log(result1.getFullYear());
    let dob = document.getElementById('date').value;
    console.log(dob);
    let diff = result1.getFullYear() - new Date(dob).getFullYear();
    console.log(diff);
    result.innerText = diff;
    if (diff >= 18 && diff <= 60){
        console.log('you can vote');
    } else if (diff >18 && diff <= 60){
        console.log('You are a eligible candiatate');
    } else {
        console.log('You can vote 2 votes');
    }

}