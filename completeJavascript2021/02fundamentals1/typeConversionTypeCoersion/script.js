function calculate(){

    // type conversion
    let result = document.getElementById('result');
    let dob = document.getElementById('dob').value;
    dob = new Date(dob).getFullYear(); // text converted to string
    dob = dob + 10;
    result.innerText = dob;
    alert(typeof(dob));
    dob1 = String(dob);
    alert(typeof(dob1));
    
    // type coersion
    alert ("I am " + 38 + " years old") // here number converted to string.
    alert('23' - '10' -3);
    alert(('23'-10)+'4');
    alert('50' * '4');
    alert('100' / '4');
    alert('30' > '20');
    alert(2+3+4);
    alert(2+3+4+'5');
    alert('10'-'5' + 2 -'4');


}