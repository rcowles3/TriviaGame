/* Psuedo Code
	1. HTML Structure of game needs to be built.
	2. When page loads, a start button will need to be pressed in order to start the game.
	3. After button is pressed, questions will populate, and a timer countdown will begin.
		- Will need to create an array to hold questions, and answers.
		- Create variables for correct/wrong/unanswered questions
		- Create Variable for timer countdown
	4. Each question must consist of radio buttons that are multiple choice anserwrs for each question.
	5. After time countdown hits 0, user will be shown a new page with correct answers, wrong answers, and unanswered questions. Regardless if they selected an answer for each question.
 */

// On game load

$(document).ready(function() {

    // VARIABLES 
    // ===============================================
    // var questionsArray = ["Who does Harry accidentally 'blow up' causing him to run away from Privet Drive?", "Which type of magical creature carries Sirius Black away from Hogwarts?"];
    // var answersArray = [
    //     ["Marge Dursley", "Petunia Dursley", "Vernon Dursley", "Dudley Dursley"],
    //     ["Dragon", "Hippogriff", "Unicorn", "Thestral"]
    // ];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    // FUNCTIONS
    // ===============================================

    // When page loads, start button will be shown in order to start game
    function startScreen() {
        // creating the start button
        startBtn = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Game!</a></p>";
        // pushing button into html
        $('#startButton').html(startBtn);
    }

    // Calling load function
    startScreen();

    // Function to start timer countdown
    function startTimer() {
        // Start timer countdown function
        //  Set our number counter to 100.
        var number = 10;

        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;

        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
            intervalId = setInterval(decrement, 1000);
        }

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            number--;

            //  Show the number in the #show-number tag.
            $('#timer').html("<h3>Time Remaining: " + number + "</h3>");


            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();

                //  Alert the user that time is up.
                console.log("Time Up!");

                // Provide user with stats function

            }
        }

        //  The stop function
        function stop() {

            //  Clears our intervalId
            //  We just pass the name of the interval
            //  to the clearInterval function.
            clearInterval(intervalId);
        }

        //  Execute the run function.
        run();
    }

    // Function to create questions
    function gameProcess() {

        var questionsArray = ["Who does Harry accidentally 'blow up' causing him to run away from Privet Drive?", "Which type of magical creature carries Sirius Black away from Hogwarts?", "Which of the following was NOT a Death Eater?", "Who destroys a horcrux first?"];

        var answersArray = [
            ["Marge Dursley", "Petunia Dursley", "Vernon Dursley", "Dudley Dursley"],
            ["Dragon", "Hippogriff", "Unicorn", "Thestral"], ["Lucious Malfoy", "Bathilda Bagshot", "Bartemious Crouch, Jr", "Bellatrix Lestrange"], ["Ron Weasley", "Hermoine Granger", " Albus Dumbledore", "Harry Potter"]
        ];

        // Question 1
        $('.gameProcess').html(questionsArray[0]);
        $('.gameProcess').append(
            '<br><div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[0][0] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[0][1] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[0][2] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[0][3]);
        
        // Question 2
        $('.gameProcess').append("<br>" + questionsArray[1]);
        $('.gameProcess').append(
            '<br><div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[1][0] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[1][1] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[1][2] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[1][3]);

        // Question 3
        $('.gameProcess').append("<br>" + questionsArray[2]);
        $('.gameProcess').append(
            '<br><div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[2][0] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[2][1] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[2][2] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[2][3]);

        // Question 4
        $('.gameProcess').append("<br>" + questionsArray[3]);
        $('.gameProcess').append(
            '<br><div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[3][0] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[3][1] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[3][2] + ' <div class="btn-group" data-toggle="buttons"><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="correct"</label>' + answersArray[3][3]);
    }

    // Function to tally up user score
    function userScore() {

        // If statement to determine correct answers


    }

    // When start button gets clicked, game will start and populate questions and answers as radio buttons, timer countdown will start. 
    $('.start-button').click(function() {

        // Calling function to start timer
        startTimer();
        // Call function to display questions and answers
        gameProcess();

    });
});
