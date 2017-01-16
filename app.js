var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

$(document).ready(function() {
  $('.color-button').on('click', function() {
    var color = $(this).data("#data-color");
    console.log(color);

    $('.container').append('<div class="color-cube"'+ color +'class="data-color"></div>');


    if(color == "red") {
      red ++;
      $('.red').container('Total red: ' + red);
    } else if (color == "blue") {
      blue++;
      $('.blue').container('Total blue: ' + blue);
    } else if (color == "yellow") {
      yellow++;
      $('.yellow').container('Total yellow: ' + yellow);
    }
    else if (color == "green") {
    green++;
      $('#green').html('Total green: ' + green);
    };
  });
});
