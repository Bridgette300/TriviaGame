$(document).ready(function(){
// global variables

let questions = [
    {
        "question": "What is my favorite color?",
        "answers" : ["pink", "purple", "black", "aqua"],
        "correctAnswer": "purple"
    },
    {
        "question": "What month is my birthday in?",
        "answers" : ["January", "December", "October", "July"],
        "correctAnswer": "October"
    },
    {
        "question": "Do I own pets?",
        "answers" : ["Yes", "No"],
        "correctAnswer": "Yes"
    },
    {
        "question": "What is my favorite thing to do?",
        "answers": ["sleep", "study", "go out", "watch tv"],
        "correctAnswer": "sleep"
    }
  
]

//functions

function startGame(){
    //populate questions div
    for (var i = 0; i < questions.length; i++) {
        $('.js-questions').append('<p>' + questions[i].question + '</p>');

        //loop through answers
        for (var j = 0; j < questions[i].answers.length; j++) {
            $('.js-questions').append('<input type="radio" value="' + questions[i].answers[j] + '" name="q' + i + '">' + " " + questions[i].answers[j] + '</input>' + "    ");
        
            $('.js-questions').append('&nbsp;');
        }
        $('.js-questions').append('<br><hr>');
    }

    $('.js-start').hide();
}

//events

//click start button will start the game

$('.js-start').on('click', function(){
    //execute instructons
    startGame();
})

// need a timer or counter


//need to grab value of every anwser and store in variable

//need to calculate which answer the user click on

//need to calculate if that is the right answer

//need to define right answer

//when timer hits 0; Game over

//game end screen should have correct and wrong answers

//if all correct; game win screen

});