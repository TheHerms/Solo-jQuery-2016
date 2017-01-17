var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

$(document).ready(function() {
  $('.color-button').on('click', function() {
    var color = $(this).data("color");
    console.log(color);

    $('.container').append('<div class="color-cube '+ color +'"></div>');

    if(color == "red") {
      red ++;
      $('#red').html('' + red);
    } else if (color == "blue") {
      blue++;
      $('#blue').html('' + blue);
    } else if (color == "yellow") {
      yellow++;
      $('#yellow').html('' + yellow);
    }
    else if (color == "green") {
    green++;
      $('#green').html('' + green);
    };
  });
});
