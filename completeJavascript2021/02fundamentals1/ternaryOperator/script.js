let ter = document.getElementById('ter');

ter.innerHTML = 10 > 77 ?'<h1> I am true </h1>' : '<h1> I am False </h1 >';

const age = 23;

age > 18 ? alert('you can vote') : alert('sleep');

// ternary operator with template literals
alert(`He can drink ${age > 25 ? 'Wine' : 'Soup'}`);

// tip calculatot
let bill = 250;

let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;

alert(`<h1>${tip}</h1>`)