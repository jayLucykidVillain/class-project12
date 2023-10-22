function getTriviaQuestions() {
  $.get(
    "https://opentdb.com/api.php?amount=5&category=12&type=multiple",
    (param) => {
      console.log(param.results);
      let firstQuestion = param.results[0];
      loadQuestion(firstQuestion.question);
      loadAnswers(firstQuestion.correct_answer, firstQuestion.incorrect_answers);
    }
  );
}


function loadQuestion(param) {
    let $musicTrivia = $("#musicTriviaQuestion");
    $musicTrivia.html(param);
}

function loadAnswers(correctAnswer, incorrectAnswers) {
    $("#response01").html(correctAnswer);
    $("#response02").html(incorrectAnswers[0]);
    $("#response03").html(incorrectAnswers[1]);
    $("#response04").html(incorrectAnswers[2]);
}


function lockOutButtons() {
  $("#response01").prop("disabled", true);
  $("#response02").prop("disabled", true);
  $("#response03").prop("disabled", true);
  $("#response04").prop("disabled", true);
}

function correctAnswer() {
  $('.answerMessage').css('background-color', '#69f587');
  $('.answerMessage').append('<p>Yes, that is correct.</p>');
}

function incorrectAnswer() {
  $('.answerMessage').css('background-color', '#f76065');
  $('.answerMessage').append('<p>Sorry, that is incorrect.</p>');
}

getTriviaQuestions();

$("#response01").on("click", () => {
  lockOutButtons();
  correctAnswer()
});

$("#response02").on("click", () => {
  lockOutButtons();
  incorrectAnswer();
});

$("#response03").on("click", () => {
  lockOutButtons();
  incorrectAnswer();
});

$("#response04").on("click", () => {
  lockOutButtons();
  incorrectAnswer();
});
