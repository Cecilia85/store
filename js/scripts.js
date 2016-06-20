
$(document).ready(function() {
$( ".btn" ).click(function() {
  $( "#blanks" ).hide();





  var stuff= [$("input#food").val(),$("input#cleaning").val(),$("input#toys").val(),$("input#book").val()].sort();
  var upperStuff= stuff.map(function(item){
  return item.toUpperCase();
  });



    $("#buys").append("<li>"+ upperStuff[0] + "</li>").show();
    $("#buys").append("<li>"+ upperStuff[1] + "</li>").show();
    $("#buys").append("<li>"+ upperStuff[2] + "</li>").show();
    $("#buys").append("<li>"+ upperStuff[3] + "</li>").show();
    



  });
});
