
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
    pauseGame: '#pause-game',

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
    var time = 3;
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
    console.log("hello");
}
var mainTimer = function() {
    setTimeout(reset, 3000);
}

    // var answerList = '<li>' + element.answers.join('</li><li>') + '</li>';

    // $("ul li").each(function() { optionTexts.push($(this).text()) });

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
                newAnsArr.push(`<input type='radio' value=question-${index}  name=question-${index} id=${i}> ${array[i]} <br />`);
            } 
        };
        answerListF(element.answers);
        answerDiv.append(newAnsArr);
    
        $('#question').append(questionDiv);
        $(questionDiv).append(answerDiv);


    });
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
    console.log("game started!");
});

$(document).on('click', elements.pauseGame, function() {
    clearInterval(timerS);
});

$('.question-container').click(function() {
    if($('#answer-0').is(':checked')) { alert("it's checked"); }
 });

 $(document).on('click', function() {
    if($("input:radio").is(':checked')) {
        var id = $(this).attr('id');
        console.log(id);
    }
})

// https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3


// https://www.dyn-web.com/tutorials/forms/radio/get-selected.php



//incorrect
// for (var i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i * 1000)
// }

// // correct solution
// json.objects.forEach(function(obj,index,collection) {
//     setTimeout(function(){
//         console.log('foobar');
//         self.insertDesignJsonObject(obj, index);
//     }, index * 5000);
// });

// json.objects.forEach(function(obj, index) {
//     setTimeout(function(){
//       // do whatever
//     }, 5000 * (index + 1));
// });