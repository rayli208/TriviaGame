$("#start").show();
$("#test").hide();
$("#finish").hide();

var number = 60;
var intervalId;
var correct = 0;
var incorrect = 0;
var result = correct/(correct+incorrect);

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





$("#correct").html(correct);
$("#wrong").html(incorrect);
$("#final").html(result);

