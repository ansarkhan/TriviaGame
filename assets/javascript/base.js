
// // start timer and display in proper div
// var startTimer = function (time) {

//     setInterval(calculate, 1000);
    
//     function calculate() {
//         if (time > 0) {
//             time--;
//         } else {
//             //do something
//         }
//     }

//   };



// var endGame = function () {
//     // hide elements

//     // tabulate scores

//     // Show option to play again

//     // Give tips for next time
// };

// // Timeout should be called once button is clicked

// // setTimeout(endGame, 3000-); //Timeout should be dynamically set based on timer

//     // $(elements.timerId).text(time); //should be a separate function 


// // countdown(5);
  

// //   (function () { 
// //     countdown('04/01/2333 05:00:00 PM'); 
// //   }());


// PAUSING TIMER

// function Timer(callback, delay) {
//     var timerId, start, remaining = delay;

//     this.pause = function() {
//         window.clearTimeout(timerId);
//         remaining -= new Date() - start;
//     };

//     this.resume = function() {
//         start = new Date();
//         window.clearTimeout(timerId);
//         timerId = window.setTimeout(callback, remaining);
//     };

//     this.resume();
// }

// var timer = new Timer(function() {
//     alert("Done!");
// }, 1000);

// timer.pause();
// // Do some stuff...
// timer.resume();

var printCharacters = function() {
    for (i=0; i < characters.length; i++) {
        // main div
        var characterContainer = $("<div>");
        var characterDescription = $("<div>")
        characterContainer.addClass("float-left character-container rounded");
        characterContainer.attr("id", characters[i].id);
        characterContainer.append('<img src="images/'+ i +'.jpg" class="image-class">');
        $(".character-container-main").append(characterContainer);
        // inside div
        characterDescription.addClass("character-description")
        characterDescription.append(
            "Name: " + characters[i].name 
            + "<br/>" + 
            "HP: " + characters[i].hp
            + "<br/>" +
            "AP: " + characters[i].ap);
        $(characterContainer).append(characterDescription);
    
        }
}

// var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
// var list = '<ul class="myList"><li class="ui-menu-item" role="menuitem"><a class="ui-all" tabindex="-1">' + countries.join('</a></li><li>') + '</li></ul>';