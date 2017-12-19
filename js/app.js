
$(function() {
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);
}); // end window onload


//===================
// EVENT HANDLERS
// ==================

let runInterval = 0;

var startTimer = function() {
    runInterval = setInterval(function() {
    let currentTime = Number($('#stopwatch').text());
    currentTime++;
	  $('#stopwatch').text(currentTime);
}, 1000);
};

var stopTimer = function() {
  clearInterval(runInterval);
};

var resetTimer = function() {
  clearInterval(runInterval);
  $('#stopwatch').text("0");
};

var countdownTimer = function () {
  clearInterval(runInterval);
  runInterval = setInterval(function() {
    let time = Number($('#stopwatch').text());
    time--;
    if (time === 0) {
      clearInterval(runInterval);
    }
    $('#stopwatch').text(time);
  }, 1000);
};
