
// Time remaining fn
    // display time left
    // once time is over reset game

// Display question and answers

// Get user input for answer

// Determine correct/wrong, move on to next question

/* 
Element strings for jQuery functions
*/

var elements = {
    startGameBtn: '#start-game',
    timerId: '#timer',
    submitGame: '#submit-game',

    //new elements
};

var timerS;
var counter = 0;
var correctQ = 0;
var incorrectQ = 0;
var currentQ;
var questions = [
    {
        question: "This is the first question",
        answers: ["q1-answer1", "q1-answer2", "q1-answer3", "q1-answer4"],
        correctA: 1 
    },
    {
        question: "This is the second question",
        answers: ["q2-answer1", "q2-answer2", "q2-answer3", "q2-answer4"],
        correctA: 1 
    },
    {
        question: "This is the third question",
        answers: ["q3-answer1", "q3-answer2", "q3-answer3", "q3-answer4"],
        correctA: 3 
    },

];


/*
TIMERS
*/

// Timer
var startTimer = function () {

    setInterval(calculate, 1000);
    var time = 5;
    function calculate() {
        if (time > 0) {
            time--;
            console.log(time);
            $("#timer").text(time); //move out of function
        } else {
            // reset game
        }
    }

};


// Main SetTimeout

var reset = function() {
    isChecked();
    displayScore();
    hideElements();
    showElements();
}
var mainTimer = function() {
    setTimeout(reset, 5000);
}

/*
Display Functions
*/

// Printing all questions

var printQuestions = function() {
    questions.forEach(function (element, index, collection) {
        var questionDiv = $("<div class='question-container'>");
        var answerDiv = $("<form class='answer-container'>");
        answerDiv.attr("id", "question-" + index);

        questionDiv.append(element.question);

        var newAnsArr = [];
        var answerListF = function(array) {
            for (i=0; i<array.length; i++) {
                newAnsArr.push(`<input type='radio' value=${i} name=question-${index} class='radio-button-${index}'> ${array[i]} <br />`);
            } 
        };
        answerListF(element.answers);
        answerDiv.append(newAnsArr);
    
        $('#question').append(questionDiv);
        $(questionDiv).append(answerDiv);


    });
}

var hideStartGameBtn = function() {
    $('#start-game').hide();
}

var showSubmitButton =function() {
    $('#submit').removeClass('hide-div');
}


// var displayTimer = function() {
//     $("#timer").text(time);
// }

$("#score").append(counter);

// jQuery events
$(document).on('click', '#start-game', function(){
    printQuestions();
    startTimer();
    mainTimer();
    hideStartGameBtn();
    showSubmitButton();
    console.log("game started!");
});

$(document).on('click', elements.submitGame, function() {
    reset();
});

$('.question-container').click(function() {
    if($('#answer-0').is(':checked')) { alert("it's checked"); }
 });


var isChecked = function() {
    for (i=0; i < questions.length; i++) {
        var answerVal = parseInt(($('.radio-button-'+i + ':checked').val()));
        console.log(typeof(answerVal));
        if (questions[i].correctA == answerVal) {
            correctQ++;
        } else {
            incorrectQ++;
        }
    }
    console.log(correctQ);
    console.log(incorrectQ);
}

var displayScore = function() {
    $('#correct-a').append(correctQ);
    $('#incorrect-a').append(incorrectQ);
}

var hideElements = function() {
    $(".section").hide();
    $(".lead").hide();
}

var showElements = function() {
    $('#score-div').removeClass('hide-div');
}