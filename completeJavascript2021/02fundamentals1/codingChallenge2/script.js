let scoreList = [];


function addFunction(){
    let unorderedList = document.getElementById('ul');
    let newItem = document.createElement('li');
    let score = document.getElementById('score').value;
    document.getElementById('result').innerText = 'The Average is : ';


    // insert score to webpage
    newItem.innerText = score;
    unorderedList.appendChild(newItem);

    //collect scores
    scoreList.push(score);
    
    document.getElementById('score').value = '';
    
    //avg
    let avg = 0;
    let tot = 0;
    for (let i=0; i<scoreList.length; i++){
        tot += Number(scoreList[i]);
        avg = tot / scoreList.length; 
    }

    console.log(avg);
    document.getElementById('result').innerText = `The Average is : ${avg}`;

}


