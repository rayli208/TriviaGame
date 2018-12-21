$("#start").show();
$("#test").hide();
$("#finish").hide();

var number = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var result = correct / (correct + incorrect);

$("#beginTimer").on("click", run);
$("#submit").on("click", submit);
$("#restart").on("click", restart);



function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  $("#start").hide();
  $("#test").show();
}

function submit() {
  clearInterval(intervalId);
  number = 61;
  $("#test").hide();
  $("#finish").show();
}

function restart() {
  $("#finish").hide();
  $("#start").show();
  correct = 0;
  incorrect = 0;
}

function decrement() {
  number--;
  $("#timer").html(number);
  if (number === 0) {
    stop();
    $("#test").hide();
    $("#finish").show();
  }
}

function stop() {
  clearInterval(intervalId);
}


$('#question1').click(function () {
  if ($('#question1').is(':checked')) {
    correct = correct + 1;
    $("#correct").html(correct);
  }
});

$('#question2').click(function () {
  if ($('#question2').is(':checked')) {
    correct = correct + 1;
    $("#correct").html(correct);
  }
});

$('#question3').click(function () {
  if ($('#question3').is(':checked')) {
    correct = correct + 1;
    $("#correct").html(correct);
  }
});

$('#question4').click(function () {
  if ($('#question4').is(':checked')) {
    correct = correct + 1;
    $("#correct").html(correct);
  }
});

$('#question5').click(function () {
  if ($('#question5').is(':checked')) {
    correct = correct + 1;
    $("#correct").html(correct);
  }
});

$('.wrong').click(function () {
  if ($('.wrong').is(':checked')) {
    incorrect = incorrect + 1;
    $("#wrong").html(incorrect);
  }
});


$("#correct").html(correct);
$("#wrong").html(incorrect);
$("#final").html(result);