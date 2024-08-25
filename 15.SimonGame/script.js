$('document').ready(function(){

    // close button
    $('#close').click(function(){
        $('.preloader').remove();
    });

    
    // computer selecting a tile
    function computerSelection(){
        // random number
        let randomNumber = Math.floor(Math.random()*4) + 1;
        // alert(randomNumber)
        if (randomNumber == 1){
            $('.yellow').css('opacity', '1');
        }else if (randomNumber == 2){
        $('.blue').css('opacity', '1');
        }else if (randomNumber == 3){
            $('.orange').css('opacity', '1');
        }else if (randomNumber == 4){
            $('.green').css('opacity', '1');
        }
        return randomNumber;
    }

// object
const obj = {
    "yellow" : 1,
    "blue" : 2,
    "orange" : 3,
    "green" : 4,
};

const ranNumberComputer = computerSelection();

// get clicked number 
$('.square').click(function(){
    const clicked = $(this).attr("class");
    const clicked1 = obj[clicked.split(' ')[0]];
    // alert(typeof(clicked1))
    alert(clicked1);
    alert(ranNumberComputer);
    if (clicked1 == ranNumberComputer){
        alert("You won");
    } else {
        alert("You lose");
    }
})














});