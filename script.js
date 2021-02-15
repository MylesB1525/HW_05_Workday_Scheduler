$(document).ready(function () {
  var date = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").text(date);
  //displays hour in 24 hour format
  var time = 1 * moment().format("HH");

  //assigns colors based on the hour of the time variable.
  for (var i = 8; i <= 16; i++) {
    var $hour = $(".hr-" + i);
    var text = localStorage.getItem("hour" + i);

    // the following function removes the null value for empty storage spaces
    if (text === null) {
      text = "";
    }
    $hour.html(
      '<form><textarea class="form-control-plaintext" name="' +
        i +
        'th-hour" type="text" rows=3>' +
        text +
        "</textarea></form>"
    );

    //the following function fills colors based on the hour of the time variable.
    if (i > time) {
      $hour.attr("class", "col-8 hour future");
    } else if (i === time) {
      $hour.attr("class", "col-8 hour present");
    } else {
      $hour.attr("class", "col-8 hour past");
    }
  }

  // loop over the buttons.
  $("body").on("click", function (event) {
    var $textArray = $("form").serializeArray();
    for (var i = 8; i <= 17; i++) {
      if (event.target.matches("#hour" + i)) {
        var $saveText = $textArray[i - 8].value;
        localStorage.setItem("hour" + i, $saveText);
      }
    }
  });
});