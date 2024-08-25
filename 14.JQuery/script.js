
// ready method
$(document).ready(function(){
    
    $('h1').css('color', 'blue')
});

// selecting elements
// selecting all button tags
$('button').css('background-color', 'yellow')

// manioulating css
$('button').on('click', function(){
    $(this).css('background-color', 'red');
    // adding class 
    $('h1').addClass('big-title margin-50');
});

// selecting first using jq
$('button').first().on('click', function(){
    $('h1').removeClass('big-title');
})

// hasClass method is used to check an tag has a class
$('button').last().on('click', function(){
    alert($('h1').hasClass('big-title'));
});

// changing text in jquery
$('h1').text("Good bbbbqq");

//adding html
$('button').html('<i>Hey</>');

//manipulating attributes
$('#france').on('click', function(){
    $('img').attr('src', 'france2.jpg');
});

// adding event listeners
$('h1').click(function(){
    $('h1').css('color', 'purple');
});

//keypress event listener
$('input').keypress(function(event){
    $('textarea').text(event.key);
});

//mouseover event
$('h1').on('mouseover', function(){
    $('h1').css('color', 'grey');
});

// adding elements in jquery
// append inserts inside target element
// after inserts outside target element
// prepend is inside and before is outside.
$('#append').click(function(){
    $('#append').after('<p>Hello World</p>');
})

// remove method is used to remove an element.
$('textarea').remove();

//Animations
// hide, show, toggle
$('div').on('click', function(){
    $('div').hide();
})
$('a').on('click', function(){
    $('div').show();
});
// fadeIn, fadeOut, fadeToggle.
// custom animation
$('button').click(function(){
    $('h1').animate({
        opacity: 0.5,
        color: "black",
        background : "black",
        width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
    }, 2000, "linear", function(){
        // call back after animation completed.
        location.reload();
    })
});

// chaining methods in jquery.
$('h1').fadeOut(200).fadeIn(200)

