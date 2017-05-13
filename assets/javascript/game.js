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
    var questionsArray = ["Who does Harry accidentally 'blow up' causing him to run away from Privet Drive?", "Which type of magical creature carries Sirius Black away from Hogwarts?", "Which of the following was NOT a Death Eater?", "Who destroys a horcrux first?"];
    var answersArray = [
        ["Marge Dursley", "Petunia Dursley", "Vernon Dursley", "Dudley Dursley"],
        ["Dragon", "Hippogriff", "Unicorn", "Thestral"],
        ["Lucious Malfoy", "Bathilda Bagshot", "Bartemious Crouch, Jr", "Bellatrix Lestrange"],
        ["Ron Weasley", "Hermoine Granger", " Albus Dumbledore", "Harry Potter"]
    ];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    // FUNCTIONS
    // ===============================================

    // When page loads, start button will be shown in order to start game
    function startScreen() {
        // creating the start button
        startBtn = "<p class='text-center main-button-container'><a class='btn btn-lg start-button' href='#' role='button'>I Solemnly Swear That I Am Up To No Good</a></p>";
        // pushing button into html
        $('#startButton').html(startBtn);
    }

    // Function to start timer countdown
    function startTimer() {
        // Start timer countdown function
        //  Set our number counter to 100.
        var number = 60;

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
                scoreCounter();

                // Allows user to reset game
                // reset();
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

        // Array of multiple choice questions
        var questionsArray = ["Who does Harry accidentally 'blow up' causing him to run away from Privet Drive?", "Which type of magical creature carries Sirius Black away from Hogwarts?", "Which of the following was NOT a Death Eater?", "Who destroys a horcrux first?"];
        // Multiple choice answers
        var answersArray = [
            ["Marge Dursley", "Petunia Dursley", "Vernon Dursley", "Dudley Dursley"],
            ["Dragon", "Hippogriff", "Unicorn", "Thestral"],
            ["Lucious Malfoy", "Bathilda Bagshot", "Bartemious Crouch, Jr", "Bellatrix Lestrange"],
            ["Ron Weasley", "Hermoine Granger", " Albus Dumbledore", "Harry Potter"]
        ];

        // Question 1
        $('#question1').html("<br>" + questionsArray[0]);

        // Arrary of Question 1 answers
        $('#answers1').html('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="correct" value="option1">' + answersArray[0][0] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option2">' + answersArray[0][1] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[0][2] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[0][3] + '</label>')

        // Question 2
        $('#question2').html("<br>" + questionsArray[1]);

        // Arrary of Question 2 answers
        $('#answers2').html('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option1">' + answersArray[1][0] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="correct" value="option2">' + answersArray[1][1] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[1][2] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[1][3] + '</label>')

        // Question 3
        $('#question3').html("<br>" + questionsArray[2]);

        // Arrary of Question 3 answers
        $('#answers3').html('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option1">' + answersArray[2][0] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="correct" value="option2">' + answersArray[2][1] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[2][2] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[2][3] + '</label>')

        // Question 4
        $('#question4').html("<br>" + questionsArray[3]);

        // Arrary of Question 4 answers
        $('#answers4').html('<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option1">' + answersArray[3][0] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option2">' + answersArray[3][1] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="wrong" value="option3">' + answersArray[3][2] + '</label><label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="correct" value="option3">' + answersArray[3][3] + '</label>')
    }

    function scoreCounter() {

        // Variables to count correct/wrong answers
        var correctAnswers = 0;
        var wrongAnswers = 0;
        // var unanswered = 0;

        // For loop that runs through answersArray checking for id of wrong/correct in order to properly count score
        for (i = 0; i < answersArray.length; i++) {

            if ($('#correct:checked').length > 0) {
                correctAnswers++;
            } else if ($('#wrong:checked').length > 0) {
                wrongAnswers++;
            }
        }

        // Displaying score to log
        console.log("Right: " + $('#correct:checked').length);
        console.log("Wrong: " + $('#wrong:checked').length);

        // Writing score to html, overwriting gameprocess
        $('.gameProcess').html('<h3>Times Up!</h3><br><h3>Number Of Correct Answers: ' + $('#correct:checked').length +
            '</h3><br><h3>Number Of Wrong Answers: ' + $('#wrong:checked').length + '</h3>');
    }

    // function reset() {

    //     // creating the reset button
    //     resetBtn = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Mischeif Managed</a></p>";
    //     // pushing button into html
    //     $('.gameProcess').append(resetBtn);
    // }

    // MAIN PROCESS
    // ===============================================

    // Calling Screen load function
    startScreen();

    // When start button gets clicked, game will start and populate questions and answers as radio buttons, timer countdown will start. 
    $('.start-button').click(function() {

        // Hide start button
        $(this).css("display", "none");

        // Trivia title initially hidden on page load, this query will write title when start button is clicked
        $('.jumbotron').html("<h1>Harry Potter Triva</h1>");

        // Calling function to start timer
        startTimer();
        // Call function to display questions and answers
        gameProcess();
    });

    // $('.reset-button').click(function() {

    //     // Calling Screen load function

    //     // Call to reset function for timer
    //     // startTimer();

    //     // And start game process again.
    //     // gameProcess();
    // });
});
